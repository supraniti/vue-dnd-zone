const VueDndZone = {
  install: function(Vue,) {
    Vue.component('DndZone',{
      props: {
        validate:{
          type: Function,
          default: function(item, container, zone){
            if(item && container && zone){
              return true
            }
          }
        },
        mirrorMinHeight:{
          type: Number,
          default: 150,
        },
        mirrorMaxWidth:{
          type: Number,
          default: 500,
        },
        calcInterval:{
          type: Number,
          default: 150,
        },
        shadowAnchor:{
          type: Function,
          default: function(){
            return this.$el
          }
        },
        mirrorAnchor:{
          type: Function,
          default: function(){
            return this.$el
          }
        },
        transitionDuration:{
          type: Number,
          default: 0.2,
        },
        dragstartBuffer: {
          type: Number,
          default: 50,
        },
        nativeScroll: {
          type: Boolean,
          default: true,
        },
        handleClass:{
          type: [Boolean,String],
          default: false
        },
        waitStop:{
          type: [Number,Boolean],
          default: false
        }
      },
      data: () => ({
        // Application State
        isDndZone:true,
        dndState: 'Idle',
        positionCache:null,
        calc:true,
        // Data Management
        dataObject:null, // Vue Observable Object
        dataObjectContainer:null, // Vue dnd-container Component
        registeredContainers:{}, // Vue dnd-container Registry
        // Animation Management
        shadow: null,
        mirror: null,
        transitions:{
          leaveContainer:{
            id:null,
            updated:null
          },
          enterContainer:{
            id:null,
            updated:null
          },
        },
        // shadowCache:null,
        dragOffset:{
          x:0,
          y:0
        },
        // Event Management
        intervalID: null,
        event: null,
        cursorX: null,
        cursorY: null,
        prevX:0,
        prevY:0,
        lastAction:0,
        cursorEl:null,
        passiveCallback:{
          passive:true
        },
        // Scroll Management
        scrollInvoked: {
            top: null,
            left: null,
            bottom: null,
            right: null
        },
        activeScroll:false,
      }),
      methods:{
        // Event Management
        // React to mouse events
        routeEvent(e){
          if ( (e.type === 'mouseup') || (e.buttons === 0) ){
            this.clear()
          }else if ( (e.type === 'mousedown') && (e.buttons === 1) ){
            this.event = e
            this.init(e)
          }else if ( (e.type === 'mousemove') && (e.buttons === 1)){
            this.event = e
            this.animateMirror()
            if (!this.nativeScroll){
              let scrollState = this.canScroll()
              for (let direction in scrollState) {
                  if ((scrollState[direction]) && (!this.scrollInvoked[direction])) {
                      this.scroll(direction);
                  }
              }
            }
          }
        },
        // Start DND Event
        init(e){
          if (this.dndState === 'Idle'){
            this.dndState = 'DragStartBuffer'
            window.setTimeout(function () {
              if ( this.dndState === 'DragStartBuffer' ){
                if (this.handleClass && !e.target.classList.contains(this.handleClass)){
                  this.dndState = 'Idle'
                  return
                }
                let draggable = this.getValidItem(e.target)
                if (draggable){
                  this.dataObject = draggable.dndModel
                }else{
                  this.dndState = 'Idle'
                  return
                }
                let nestable = this.getContainer(draggable)
                if (draggable && nestable){
                  this.dataObject = draggable.dndModel
                  // console.log(this.dataObject)
                  this.updateDataObjectContainer()
                  this.addListeners()
                  this.$el.classList.add('dnd-zone')
                  document.documentElement.style.setProperty('--dnd-transition-duration', this.transitionDuration + 's')
                  let source = draggable.$el
                  let rect = draggable.$el.getBoundingClientRect()
                  this.animateShadow(rect,source)
                  this.animateMirror(rect,source)
                  if (!this.nativeScroll){
                    this.activeScroll = true
                  }
                  Object.keys(this.registeredContainers).forEach(key=>{
                    this.registeredContainers[key].saveRects()
                  })
                  clearInterval(this.intervalID)
                  this.intervalID = window.setInterval(this.track, this.calcInterval)
                  this.dndState = 'DragTrack'
                }else{
                  this.dndState = 'Idle'
                }
              }
            }.bind(this),this.dragstartBuffer)
          }
        },
        animateShadow(rect,source){
          if (!this.shadow && rect && source){
            this.shadow = source.cloneNode(true)
            let s = this.shadow.style
            s.setProperty('position', 'fixed', 'important')
            s.setProperty('opacity', '0.5', 'important')
            s.setProperty('margin', '0', 'important')
            s.setProperty('visibility', 'visible', 'important')
            s.setProperty('pointer-events', 'none', 'important')
            s.setProperty('transition-duration', this.transitionDuration + 's', 'important')
            s.setProperty('transition-property', 'all', 'important')
            this.setRect(this.shadow,rect)
            this.shadowAnchor().append(this.shadow)
          }else if(rect){
            this.setRect(this.shadow,rect)
            // this.$el.classList.remove('dnd-notransition')
          }
        },
        animateMirror(rect,source){
          if (!this.mirror && rect && source){
            // Mirror Element
            let mirrorWrapper = document.createElement(source.parentElement.tagName)
            let mirror = source.cloneNode(true)
            mirrorWrapper.append(mirror)
            // Clone attributes from original elements to mirror and mirror wrapper
            this.cloneAttributes(mirrorWrapper,source.parentElement)
            this.cloneAttributes(mirror,source)
            // Track offset between pointer location and element
            this.dragOffset.x = this.event.clientX - rect.left
            this.dragOffset.y = this.event.clientY - rect.top
            // Scale the mirror so it wouldnt take too much space
            let scaleX = this.mirrorMaxWidth / rect.width
            let scaleY = this.mirrorMinHeight / rect.height
            let scale = Math.min(1, Math.max(scaleX, scaleY))
            // Update dragOffset to scale
            this.dragOffset.x *= scale
            this.dragOffset.y *= scale
            // Set mirror class and style attributes
            mirror.style.setProperty('transform', 'scale(' + scale + ',' + scale + ')')
            mirror.style.setProperty('transform-origin', '0 0')
            mirror.style.setProperty('position', 'fixed', 'important')
            mirror.classList.add('dnd-mirror')
            mirror.style.setProperty('margin', '0', 'important')
            mirror.style.setProperty('width', rect.width + 'px', 'important')
            mirror.style.setProperty('height', rect.height + 'px', 'important')
            mirror.style.setProperty('pointer-events', 'none', 'important')
            mirrorWrapper.style.setProperty('padding', '0', 'important')
            mirrorWrapper.style.setProperty('position', 'fixed', 'important')
            mirrorWrapper.style.setProperty('pointer-events', 'none', 'important')
            mirrorWrapper.style.setProperty('width', '0px', 'important')
            mirrorWrapper.style.setProperty('height', '0px', 'important')
            this.mirror = mirror
            this.mirrorAnchor().append(mirrorWrapper)
          }
          // Update Mirror Location
          this.mirror.style.setProperty('top', (this.event.clientY - this.dragOffset.y) + 'px')
          this.mirror.style.setProperty('left', (this.event.clientX - this.dragOffset.x) + 'px')
        },
        containerUpdated(container){
          // Animate shadow
          if (this.transitions.leaveContainer.id === container.dndId){
            this.transitions.leaveContainer.updated = true
          }
          if (this.transitions.enterContainer.id === container.dndId){
            this.transitions.enterContainer.updated = true
          }
          if (this.transitions.enterContainer.updated && this.transitions.leaveContainer.updated){
            this.updateDataObjectContainer()
            this.dataObjectDomElement.classList.remove('dnd-move')
            let el = this.dataObjectDomElement
            while (el && el !== this.$el){
              el.classList.remove('dnd-move')
              el = el.parentElement
            }
            let rect = this.dataObjectDomElement.getBoundingClientRect()
            this.animateShadow(rect)
            let containers = [this.registeredContainers[this.transitions.leaveContainer.id],this.registeredContainers[this.transitions.enterContainer.id]]
            containers.forEach(container=>{
              container.saveRects()
              if ( (container.newRect.height !== container.oldRect.height) || (container.newRect.width !== container.oldRect.width) ){
                container.$el.style.setProperty('transition-duration',this.transitionDuration + 's', 'important')
                container.$el.style.setProperty('transition-property','all')
                container.setRect(container.oldRect)
                Vue.nextTick(()=>{
                  container.setRect(container.newRect)
                })
                container.$el.addEventListener('transitionend',()=>{
                  container.$el.style.setProperty('transition-duration','0s')
                  container.unsetRect()
                },{once:true})
              }
            })
          }
        },
        track(){
          if (!this.event){
            return
          }
          if (this.dndState !== 'DragTrack'){
            return
          }
          this.cursorEl = this.event.target
          this.cursorX = this.event.clientX
          this.cursorY = this.event.clientY
        },
        clear(){
          if (this.dndState !== 'Idle'){
            this.removeListeners()
            this.$el.classList.remove('dnd-zone')
            let mirrorRect = this.mirror.getBoundingClientRect()
            if (!this.dataObjectDomElement){
              this.setIdleState()
              return
            }
            this.dataObjectDomElement.classList.remove('dnd-move')
            let finalRect = this.dataObjectDomElement.getBoundingClientRect()
            let offset = Math.abs(mirrorRect.top - finalRect.top) + Math.abs(mirrorRect.left - finalRect.left) +
            Math.abs(mirrorRect.width - finalRect.width) + Math.abs(mirrorRect.height - finalRect.height)
            if (offset > 0){
              this.mirror.style.setProperty('top',finalRect.top + 'px','important')
              this.mirror.style.setProperty('left',finalRect.left + 'px','important')
              this.mirror.style.setProperty('width',finalRect.width + 'px','important')
              this.mirror.style.setProperty('height',finalRect.height + 'px','important')
              this.mirror.style.setProperty('transform', 'scale(1,1)', 'important')
              this.mirror.style.setProperty('transition-duration',this.transitionDuration + 's','important')
              this.mirror.style.setProperty('transition-property','all','important')
              this.mirror.classList.remove('dnd-mirror')
              this.shadow.style.setProperty('top',finalRect.top + 'px','important')
              this.shadow.style.setProperty('left',finalRect.left + 'px','important')
              this.shadow.style.setProperty('width',finalRect.width + 'px','important')
              this.shadow.style.setProperty('height',finalRect.height + 'px','important')
              let flag = true
              this.mirror.addEventListener('transitionend',function(){
                if (flag) {
                  flag = false
                  this.setIdleState()
                }
              }.bind(this))
            }else{
              this.setIdleState()
            }
          }
        },
        setIdleState(){
          // console.log('setidlestate')
          this.dndState = 'Idle'
          this.shadow.parentElement.removeChild(this.shadow)
          this.mirror.parentElement.parentElement.removeChild(this.mirror.parentElement)
          // this.shadowAnchor().removeChild(this.shadow)
          // this.mirrorAnchor().removeChild(this.mirror.parentElement)
          this.activeScroll = null
          this.dataObject = null
          this.dataObjectContainer = null
          this.shadow = null
          this.mirror = null
          this.event = null
          this.cursorX = null
          this.cursorY = null
          this.cursorEl = null
          this.prevX = null
          this.prevY = null
          Object.keys(this.registeredContainers).forEach(key=>{
            let container = this.registeredContainers[key]
            container.nr.hasChanged = false
            container.$el.style.removeProperty('transition-duration')
            container.unsetRect()
          })
        },
        registerContainer(vnode){
          this.registeredContainers[vnode.dndId] = vnode
        },
        unregisterContainer(vnode){
          delete(this.registeredContainers[vnode.dndId])
        },
        updateDataObjectContainer(){
          // console.log('updateDataObjectContainer')
          let keys = Object.keys(this.registeredContainers)
          for (let i=0;i<keys.length;i++){
            let container = this.registeredContainers[keys[i]]
            if (container.getDataObjectIndex(this.dataObject) > -1){
              this.dataObjectContainer = container
              return
            }
          }
          this.dataObjectContainer = null
        },
        // Scroll Controller
        scroll(direction){
          this.scrollInvoked[direction] = window.setInterval(function () {
              switch (direction) {
                  case "top":
                      window.scrollTo(window.pageXOffset, window.pageYOffset - this.scrollSpeed(this.event,document.documentElement));
                      break;
                  case "left":
                      window.scrollTo(window.pageXOffset - this.scrollSpeed(this.event,document.documentElement), window.pageYOffset);
                      break;
                  case "bottom":
                      window.scrollTo(window.pageXOffset, window.pageYOffset + this.scrollSpeed(this.event,document.documentElement));
                      break;
                  case"right":
                      window.scrollTo(window.pageXOffset + this.scrollSpeed(this.event,document.documentElement), window.pageYOffset);
                      break;
              }
              if ((!this.canScroll()[direction]) || (!this.activeScroll)) {
                  clearInterval(this.scrollInvoked[direction])
                  this.scrollInvoked[direction] = null
              }
          }.bind(this), 16)
        },
        scrollSpeed(e, el) {
          return Math.max(0, 20 + (Math.max(0 - e.clientY, 0 - e.clientX, e.clientY - el.clientHeight, e.clientX - el.clientWidth)))
        },
        canScroll(){
          return {
            top: (this.event.clientY <= 20) && (window.pageYOffset > 0),
            left: (this.event.clientX <= 20) && (window.pageXOffset > 0),
            bottom: (this.event.clientY >= document.documentElement.clientHeight - 20) && (window.pageYOffset < document.documentElement.scrollHeight - document.documentElement.clientHeight),
            right: (this.event.clientX >= document.documentElement.clientWidth - 20) && (window.pageXOffset < document.documentElement.scrollWidth - document.documentElement.clientWidth)
          }
        },
        // Helpers
        // Mute event
        muteEvent(e){
          e.preventDefault()
          e.stopPropagation()
          return false
        },
        // Convert touch events to mouse events
        simulateMouseEvent(e){
          e.preventDefault()
          e.stopPropagation()
          if (e.touches.length > 1) {
            return false
          }
          let simulatedType = (e.type === 'touchstart') ? 'mousedown' : (e.type === 'touchend') ? 'mouseup' : 'mousemove'
          let simulatedEvent = new MouseEvent(simulatedType, {
            'view': window,
            'bubbles': true,
            'cancelable': true,
            'screenX': (e.touches[0]) ? e.touches[0].screenX : 0,
            'screenY': (e.touches[0]) ? e.touches[0].screenY : 0,
            'clientX': (e.touches[0]) ? e.touches[0].clientX : 0,
            'clientY': (e.touches[0]) ? e.touches[0].clientY : 0,
            'button': 0,
            'buttons': 1
          })
          let eventTarget = (e.type === 'touchmove') ? document.elementFromPoint(simulatedEvent.clientX, simulatedEvent.clientY) || document.body : e.target
          eventTarget.dispatchEvent(simulatedEvent)
        },
        // Clone DOM element attributes to another element
        cloneAttributes(target, source) {
          [...source.attributes].forEach( attr => { target.setAttribute(attr.nodeName === "id" ? 'data-id' : attr.nodeName ,attr.nodeValue) })
        },
        // Add Event Listeners
        addListeners(){
          document.body.addEventListener('mousemove',this.routeEvent)
          this.$el.addEventListener('touchmove', this.simulateMouseEvent, this.passiveCallback)
          this.$el.addEventListener('touchend', this.simulateMouseEvent)
          document.addEventListener("mouseup",() => {
              this.clear()
            },
            { once: true }
          )
        },
        // Remove Event Listeners
        removeListeners(){
          document.body.removeEventListener('mousemove',this.routeEvent)
          this.$el.removeEventListener('mouseup',this.routeEvent)
          this.$el.removeEventListener('touchmove', this.simulateMouseEvent, this.passiveCallback)
          this.$el.removeEventListener('touchend', this.simulateMouseEvent)
        },
        // Get closest dnd-item component from vue component
        getItem(component){
          while (component && component.$parent){
            if (component.isDraggable && component.dndModel){
              return component
            }else{
              component = component.$parent
            }
          }
          return null
        },
        // Get closet valid dnd-item component from DOM element
        getValidItem(el){
          while (el !== this.$el){
            if (el.__vue__){
              return this.getItem(el.__vue__)
            }else{
              el = el.parentElement
            }
          }
          return null
        },
        // Get closest dnd-container component from vue component
        getContainer(component){
          if (!this.dataObject){
            return null
          }
          while (component && component.$parent){
            if (component.isNestable && component.dndModel && component.dndZone == this &&  !this.isSubset(component.dndModel,this.dataObject)){
              return component
            }else{
              component = component.$parent
            }
          }
          return null
        },
        // Get closet valid dnd-container component from DOM element
        getValidContainer(){
          let el = this.cursorEl
          while (el && el !== this.$el && el !== document.body){
            if (el.__vue__){
              return this.getContainer(el.__vue__)
            }else{
              el = el.parentElement
            }
          }
          return null
        },
        // Check if a dnd-container is a contained by a data object or its decendants
        isSubset(dataObjectContainer,dataObject){
          // console.log(dataObjectContainer,dataObject)
          if ( dataObject.children && dataObject.children.length > 0 ){
            if ( dataObjectContainer !== dataObject.children ){
              return Object.keys(dataObject.children).some( key=>{
                this.isSubset (dataObjectContainer,dataObject.children[key])
              })
            }
          }
          return dataObjectContainer === dataObject.children
        },
        // Set width, height, top, left properties on a DOM element
        setRect(el,rect){
          // this.shadowCache = rect
          let s = el.style
          s.setProperty('width', rect.width + 'px')
          s.setProperty('height', rect.height + 'px')
          s.setProperty('top', rect.top + 'px')
          s.setProperty('left', rect.left + 'px')
        },
        debounce(func, delay){
          let inDebounce
          return function() {
            const context = this
            const args = arguments
            clearTimeout(inDebounce)
            inDebounce = setTimeout(() => func.apply(context, args), delay)
          }
        }
      },
      computed:{
        // DATAOBJECT
        // dnd-item component containing the data object
        dataObjectComponent(){
          if (this.dataObjectContainer){
            return this.dataObjectContainer.getDataObjectComponent(this.dataObject)[0]
          }
          return null
        },
        // Data object DOM element
        dataObjectDomElement(){
          if (this.dataObjectComponent){
            return this.dataObjectComponent.$el
          }
          return null
        },
        // CURSOR
        // Closest valid dnd-container from cursor location
        cursorContainer(){
          if (this.cursorEl && this.dataObject){
            return this.getValidContainer(this.cursorEl)
          }
          return null
        },
        // Get cursor index inside dnd-container
        cursorIndex(){
          if (this.cursorContainer && this.cursorX && this.cursorY){
            return this.cursorContainer.getIndex(this.cursorX,this.cursorY)
          }
          return null
        },
        // Combined value of cursor container and index
        cursorPosition(){
          if (!this.calc){
            return this.positionCache
          }
          if (this.cursorContainer){
            return this.cursorContainer.dndId + '-' + this.cursorIndex
          }
          return null
        },
      },
      watch: {
        dataObjectDomElement(newVal,oldVal){
          if (newVal){
            newVal.style.setProperty('visibility', 'hidden', 'important')
          }
          if (oldVal){
            oldVal.style.removeProperty('visibility')
          }
        },
        cursorPosition(newVal) {
          if (newVal && this.dataObjectContainer){
            this.positionCache = newVal
            let newContainer = this.cursorContainer
            if (!newContainer){
              return
            }
            let index = Math.min(this.dataObjectContainer.dndModel.length - 1,this.cursorIndex)
            let oldIndex = this.dataObjectContainer.getDataObjectIndex(this.dataObject)
            if ( this.dataObjectContainer == newContainer ){
              let index = Math.min(this.dataObjectContainer.dndModel.length - 1,this.cursorIndex)
              let oldIndex = this.dataObjectContainer.getDataObjectIndex(this.dataObject)
              if (  oldIndex == index ){
                return
              }else{
                if ( !this.validate(this.dataObjectComponent,newContainer,this) ){
                  return
                }
                this.$emit('move',{
                  from:{
                    container:newContainer,
                    index:oldIndex
                  },
                  to:{
                    container:newContainer,
                    index:index
                  }
                })
                this.dataObjectContainer.removeDataObject(this.dataObject)
                newContainer.addDataObject(this.dataObject,index)
                newContainer.nr.hasChanged = true
                this.transitions.leaveContainer = {
                  id:this.dataObjectContainer.dndId,
                  updated:false
                }
                this.transitions.enterContainer = {
                  id:newContainer.dndId,
                  updated:false
                }
              }
            }else{
              // Same dnd-zone restriction
              if ( newContainer.dndZone !== this.dataObjectContainer.dndZone){
                return
              }
              // Drop Validation Hook
              if ( !this.validate(this.dataObjectComponent,newContainer,this) ){
                return
              }
              this.$emit('move',{
                from:{
                  container:this.dataObjectContainer,
                  index:oldIndex
                },
                to:{
                  container:newContainer,
                  index:index
                }
              })
              this.dataObjectContainer.removeDataObject(this.dataObject)
              this.dataObjectContainer.nr.hasChanged = true
              newContainer.addDataObject(this.dataObject,this.cursorIndex)
              newContainer.nr.hasChanged = true
              this.transitions.leaveContainer = {
                id:this.dataObjectContainer.dndId,
                updated:false
              }
              this.transitions.enterContainer = {
                id:newContainer.dndId,
                updated:false
              }
            }
            if (this.waitStop){
              this.calc = false
              window.setTimeout(()=>{
                this.calc = true
              },this.waitStop)
            }
          }
        }
      },
      mounted(){
        this.$el.addEventListener('mousedown',this.routeEvent)
        this.$el.addEventListener('touchstart', this.simulateMouseEvent)
        this.$el.addEventListener('drag', this.muteEvent, false)
        this.$el.addEventListener('dragstart', this.muteEvent, false)
      },
      beforeDestroy(){
        this.$el.removeEventListener('mousedown',this.routeEvent)
        this.$el.removeEventListener('touchstart', this.simulateMouseEvent)
        this.$el.removeEventListener('drag', this.muteEvent, false)
        this.$el.removeEventListener('dragstart', this.muteEvent, false)
      },
      render: function () {
        return this.$slots.default
      }
  })
    Vue.component('DndContainer',{
      props: {
        tag:{
          type: String,
          default: 'div'
        },
        dndId:{
          type: [Number,String],
          default: null
        },
        dndModel: {
          type: Array,
          default: function(){
            return []
          },
        },
        verticalSearch: {
          type: Boolean,
          default: false,
        },
        isNestable: {
          type: Boolean,
          default: true,
        },
      },
      data: () => ({
        itemCount:null,
        oldRect:null,
        newRect:null,
        dndZone:null,
        processing:false,
        nr:{
          rects:null,
          hasChanged:false,
          hasUpdated:false
        }
      }),
      render:function(h) {
        return h('transition-group',{
          props:{
            tag:this.tag,
            name:'dnd'
          },
          class:this.class,
          style:this.style,
          attrs:this.attrs,
        },this.$slots.default)
      },
      methods:{
        // Data Management
        addDataObject(dataObject,index){
          if (this.dndModel.length === 0){
            this.dndModel.push(dataObject)
          }else if ( index > this.dndModel.length - 1 ){
            this.dndModel.push(dataObject)
          }else{
            this.dndModel.splice(index,0,dataObject)
          }
        },
        removeDataObject(dataObject){
          let index = this.dndModel.indexOf(dataObject)
          this.dndModel.splice(index,1)
        },
        getDataObjectIndex(dataObject){
          return this.dndModel.indexOf(dataObject)
        },
        getDataObjectComponent(dataObject){
          return this.$children[0].$children.filter(child=>{
            return child.dndModel === dataObject
          })
        },
        // DND management
        getRectangleMap(rectangles){
          let map = []
          let rowTop = Infinity
          let rowBottom = -Infinity
          let rows = []
          let row = []
          let pointers = []
          if (this.verticalSearch){
            for (let i=0; i < rectangles.length; i++){
              map.push(rectangles[i].bottom)
            }
          }else{
            for (let i=0; i < rectangles.length; i++){
              rowTop = Math.min(rowTop,rectangles[i].top)
              rowBottom = Math.max(rowBottom,rectangles[i].bottom)
              let isLastInRow = (i === rectangles.length - 1) || (rectangles[i+1].left < rectangles[i].right)
              if (isLastInRow){
                row.push( rectangles[i].right )
                map.push([rowTop,rowBottom])
                rows.push([],row)
                pointers.push(i + 1 - row.length,i + 1 - row.length)
                row = []
                rowTop = ( i === rectangles.length - 1 ) ? Infinity : rectangles[i+1].bottom
              }else{
                row.push( (rectangles[i].right + rectangles[i+1].left) / 2 )
              }
            }
            rows.push([])
            pointers.push(rectangles.length)
          }
          return {
            map: map.flat(),
            rows: rows,
            pointers: pointers
          }
        },
        getIndex(x,y){
          // let rectangleMap = this.getRectangleMap([...this.$el.children]
          //   .map(child=>this.getValidItem(child))
          //   .filter(child=>child)
          //   .map(child=>child.$el.getBoundingClientRect()))
          let rectangleMap = this.getRectangleMap(this.nr.rects)
          if (this.verticalSearch){
            return this.binarySearch(rectangleMap.map,y)
          }else{
            let row = this.binarySearch(rectangleMap.map,y)
            return this.binarySearch(rectangleMap.rows[row],x) + rectangleMap.pointers[row]
          }
        },
        getDndZone(vnode){
          while (vnode.$parent){
            if (vnode.isDndZone){
              return vnode
            }else{
              vnode = vnode.$parent
            }
          }
          return null
        },
        register(){
          this.dndZone = this.getDndZone(this)
          if (this.dndZone){
            this.dndZone.registerContainer(this)
          }
          // console.log(this.dndZone,this)
        },
        unregister(){
          if (this.dndZone){
            this.dndZone.unregisterContainer(this,true)
          }
        },
        //Helpers
        binarySearch(arr,x){
          let start = 0, end = arr.length-1, index = arr.length
          while (start <= end){
            let mid = Math.floor((start + end) / 2)
            if (arr[mid] > x){
              index = mid
              end = mid - 1
            }else{
              start = mid + 1
            }
          }
          return index
        },
        setRect(rect){
          this.$el.style.setProperty('height',rect.height + 'px','important')
          this.$el.style.setProperty('width',rect.width + 'px','important')
        },
        unsetRect(){
          this.$el.style.removeProperty('height')
          this.$el.style.removeProperty('width')
        },
        saveRects(skip){
          let els = [...this.$el.children]
          if (!skip){
            for (let i=0;i<els.length;i++){
              if (els[i].classList.contains('dnd-move')){
                els[i].addEventListener('transitionend',()=>{
                  this.saveRects(true)
                },{ once: true })
                return
              }
            }
          }
          this.nr.rects = els
            .map(child=>this.getValidItem(child))
            .filter(child=>child)
            .map(child=>child.$el.getBoundingClientRect())
        },
        // Get closest dnd-item component from vue component
        getItem(component){
          while (component && component.$parent){
            if (component.isDraggable && component.dndModel){
              return component
            }else{
              component = component.$parent
            }
          }
          return null
        },
        // Get closet valid dnd-item component from DOM element
        getValidItem(el){
          while (el !== this.$el){
            if (el.__vue__){
              return this.getItem(el.__vue__)
            }else{
              el = el.parentElement
            }
          }
          return null
        },
      },
      mounted(){
        this.itemCount = this.dndModel.length
        this.register()
        this.saveRects()
        this.oldRect = this.$el.getBoundingClientRect()
        this.newRect = this.oldRect
      },
      beforeUpdate(){
        this.unsetRect()
        if (this.nr.hasChanged){
          this.oldRect = this.$el.getBoundingClientRect()
        }
      },
      updated(){
        if (this.nr.hasChanged){
          this.newRect = this.$el.getBoundingClientRect()
          this.nr.hasChanged = false
          this.dndZone.containerUpdated(this)
        }
      },
      beforeDestroy(){
        this.$el.style.removeProperty('transition-duration')
        this.unsetRect()
      }
    })
    Vue.component('DndItem',{
      props: {
        dndId:{
          type: [Number,String],
          default: null
        },
        handleClass:{
          type: [Boolean,String],
          default: false
        },
        dndModel: {
          type: Object,
          default: function(){
            return {}
          },
        },
        isDraggable: {
          type: Boolean,
          default: true,
        },
      },
      render: function () {
        return this.$slots.default
      },
      mounted(){
        // console.log('mounted',this.$el,this.$el.getBoundingClientRect())
      },
      updated(){
        // console.log('updated',this.$el)
      }
    })
  }
}
export default VueDndZone
