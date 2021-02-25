(function(t){function e(e){for(var i,o,a=e[0],d=e[1],l=e[2],c=0,u=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);h&&h(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var d=n[a];0!==r[d]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-dnd-zone/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var h=d;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-spacer"),n("v-toolbar-title",[t._v("vue-dnd-zone")]),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/supraniti/vue-dnd-zone",target:"_blank",large:"",icon:""}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-github")])],1)],1),n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",[t._v("mdi-selection-drag")]),t._v(" DATA DRIVEN DND ")],1),n("v-list-item-subtitle",[t._v(" BUILT FOR VUE ")])],1)],1),n("v-divider"),n("v-tabs",{attrs:{vertical:"",color:"black"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{staticClass:"justify-start"},[t._v(" About ")]),n("v-tab",{staticClass:"justify-start"},[t._v(" Examples ")]),n("v-tab",{staticClass:"justify-start"},[t._v(" API ")])],1)],1),n("v-main",[n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("v-card",{staticClass:"elevation-5"},[n("dnd-zone",{attrs:{"handle-class":"handle","native-scroll":!1}},[n("v-card-text",[n("dnd-container",{staticClass:"row",attrs:{"dnd-model":t.about.children,"dnd-id":"about","vertical-search":t.$vuetify.breakpoint.xs}},[t._l(t.about.children,(function(e){return[n("dnd-item",{key:e.id,attrs:{"dnd-id":e.id,"dnd-model":e}},[n("v-col",{attrs:{cols:"12",sm:e.cols}},[n("v-card",{attrs:{dark:e.dark,color:e.color}},[n("v-card-actions",[n("v-icon",{staticClass:"handle"},[t._v("mdi-drag")]),n("v-spacer")],1),n("v-card-text",{staticClass:"body-1 pt-0",staticStyle:{opacity:"1"}},[n("p",{staticClass:"title my-2",domProps:{textContent:t._s(e.title)}}),t._l(e.text,(function(e,i){return n("p",{key:i,staticClass:"my-2",domProps:{textContent:t._s(e)}})})),t._l(e.html,(function(e,i){return n("div",{key:i,domProps:{innerHTML:t._s(e)}})}))],2)],1)],1)],1)]}))],2)],1)],1),n("v-card-actions",[t._v(" Next ")])],1)],1),n("v-tab-item",[n("HelloWorld")],1)],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{staticClass:"text-center"},[i("v-col",{attrs:{cols:"12"}},[i("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),i("v-col",{staticClass:"mb-4"},[i("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),i("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),i("br"),t._v("please join our online "),i("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),i("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),i("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),i("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),i("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),i("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),i("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},a=[],d={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},l=d,h=n("2877"),c=n("6544"),u=n.n(c),p=n("62ad"),m=n("a523"),f=n("adda"),v=n("0fd9"),b=Object(h["a"])(l,o,a,!1,null,null,null),g=b.exports;u()(b,{VCol:p["a"],VContainer:m["a"],VImg:f["a"],VRow:v["a"]});var y={name:"App",components:{HelloWorld:g},data:function(){return{drawer:!0,tab:0,about:{children:[{id:0,color:"black",dark:!0,cols:4,title:"vue-dnd-zone",text:["vue-dnd-zone is a vue.js plugin for drag and drop functionality.","Unlike most plugins, it is not a wrapper for an external js library, but a set of three vue components managing the drag and drop event."]},{id:1,color:"white",dark:!1,cols:4,title:"Motivation",text:["Having the drag and drop functionality within vue, makes it possible to utilize vue core features such as computed properties & transition groups for the event and animation management for better performance, and exposing a developer friendly API (component props)"]},{id:2,color:"black",dark:!0,cols:4,title:"Main Features",text:["- Supports nested structures","- Smooth transitions","- Scroll while dragging","- Lightweight (~4kb gzipped) With no dependencies"]},{id:3,color:"white",dark:!1,cols:4,title:"Installation",html:["<kbd>npm install vue-dnd-zone</kbd><p class=\"mt-2 mb-0 caption\">main.js</p><code>import VueDndZone from 'vue-dnd-zone'<br/>import 'vue-dnd-zone/vue-dnd-zone.css'</code>"]},{id:4,color:"white",dark:!1,cols:4,title:"Installation",html:["<kbd>npm install vue-dnd-zone</kbd><p class=\"mt-2 mb-0 caption\">main.js</p><code>import VueDndZone from 'vue-dnd-zone'<br/>import 'vue-dnd-zone/vue-dnd-zone.css'</code>"]},{id:5,color:"white",dark:!1,cols:4,title:"Installation",html:["<kbd>npm install vue-dnd-zone</kbd><p class=\"mt-2 mb-0 caption\">main.js</p><code>import VueDndZone from 'vue-dnd-zone'<br/>import 'vue-dnd-zone/vue-dnd-zone.css'</code>"]}]}}}},w=y,C=n("7496"),O=n("40dc"),j=n("5bc1"),x=n("8336"),E=n("b0af"),P=n("99d9"),I=n("ce7e"),k=n("132d"),_=n("da13"),S=n("5d23"),D=n("f6c4"),M=n("f774"),$=n("2fa4"),L=n("71a3"),R=n("c671"),V=n("fe57"),Y=n("aac8"),X=n("2a7f"),T=Object(h["a"])(w,r,s,!1,null,null,null),z=T.exports;u()(T,{VApp:C["a"],VAppBar:O["a"],VAppBarNavIcon:j["a"],VBtn:x["a"],VCard:E["a"],VCardActions:P["a"],VCardText:P["b"],VCol:p["a"],VDivider:I["a"],VIcon:k["a"],VListItem:_["a"],VListItemContent:S["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VMain:D["a"],VNavigationDrawer:M["a"],VSpacer:$["a"],VTab:L["a"],VTabItem:R["a"],VTabs:V["a"],VTabsItems:Y["a"],VToolbarTitle:X["a"]});var A=n("f309");i["a"].use(A["a"]);var B=new A["a"]({}),N=n("2909"),Z=(n("a9e3"),n("159b"),n("b64b"),n("a434"),n("4de4"),n("d81d"),{install:function(t){t.component("DndZone",{props:{validate:{type:Function,default:function(t,e,n){if(t&&e&&n)return!0}},mirrorMinHeight:{type:Number,default:150},mirrorMaxWidth:{type:Number,default:500},calcInterval:{type:Number,default:150},shadowAnchor:{type:Function,default:function(){return this.$el}},mirrorAnchor:{type:Function,default:function(){return this.$el}},transitionDuration:{type:Number,default:.2},dragstartBuffer:{type:Number,default:50},nativeScroll:{type:Boolean,default:!0},handleClass:{type:[Boolean,String],default:!1}},data:function(){return{isDndZone:!0,dndState:"Idle",positionCache:null,lockPosition:!1,dataObject:null,dataObjectContainer:null,registeredContainers:{},shadow:null,mirror:null,transitions:{leaveContainer:{id:null,updated:null},enterContainer:{id:null,updated:null}},dragOffset:{x:0,y:0},intervalID:null,event:null,cursorX:null,cursorY:null,prevX:0,prevY:0,lastAction:0,cursorEl:null,passiveCallback:{passive:!0},scrollInvoked:{top:null,left:null,bottom:null,right:null},activeScroll:!1,shadowPos:{top:0,left:0,pageXOffset:0,pageYOffset:0}}},methods:{routeEvent:function(t){if("mouseup"===t.type||0===t.buttons)this.clear();else if("mousedown"===t.type&&1===t.buttons)this.event=t,this.init(t);else if("mousemove"===t.type&&1===t.buttons&&(this.event=t,this.animateMirror(),!this.nativeScroll)){var e=this.canScroll();for(var n in e)e[n]&&!this.scrollInvoked[n]&&this.scroll(n)}},init:function(t){"Idle"===this.dndState&&(this.dndState="DragStartBuffer",window.setTimeout(function(){var e=this;if("DragStartBuffer"===this.dndState){if(this.handleClass&&!t.target.classList.contains(this.handleClass))return void(this.dndState="Idle");var n=this.getValidItem(t.target);if(!n)return void(this.dndState="Idle");this.dataObject=n.dndModel;var i=this.getContainer(n);if(n&&i){this.dataObject=n.dndModel,this.updateDataObjectContainer(),this.addListeners(),this.$el.classList.add("dnd-zone"),document.documentElement.style.setProperty("--dnd-transition-duration",this.transitionDuration+"s");var r=n.$el,s=n.$el.getBoundingClientRect();this.animateShadow(s,r),this.animateMirror(s,r),this.nativeScroll||(this.activeScroll=!0),Object.keys(this.registeredContainers).forEach((function(t){e.registeredContainers[t].saveRects()})),clearInterval(this.intervalID),this.intervalID=window.setInterval(this.track,this.calcInterval),this.dndState="DragTrack"}else this.dndState="Idle"}}.bind(this),this.dragstartBuffer))},animateShadow:function(t,e){if(!this.shadow&&t&&e){this.shadow=e.cloneNode(!0);var n=this.shadow.style;n.setProperty("position","fixed","important"),n.setProperty("opacity","0.5","important"),n.setProperty("margin","0","important"),n.setProperty("visibility","visible","important"),n.setProperty("pointer-events","none","important"),n.setProperty("transition-duration",this.transitionDuration+"s","important"),n.setProperty("transition-property","all","important"),this.setRect(this.shadow,t),this.shadowAnchor().append(this.shadow)}else t&&(this.shadow.style.setProperty("transition-duration",this.transitionDuration+"s","important"),this.setRect(this.shadow,t))},animateMirror:function(t,e){if(!this.mirror&&t&&e){var n=document.createElement(e.parentElement.tagName),i=e.cloneNode(!0);n.append(i),this.cloneAttributes(n,e.parentElement),this.cloneAttributes(i,e),this.dragOffset.x=this.event.clientX-t.left,this.dragOffset.y=this.event.clientY-t.top;var r=this.mirrorMaxWidth/t.width,s=this.mirrorMinHeight/t.height,o=Math.min(1,Math.max(r,s));this.dragOffset.x*=o,this.dragOffset.y*=o,i.style.setProperty("transform","scale("+o+","+o+")"),i.style.setProperty("transform-origin","0 0"),i.style.setProperty("position","fixed","important"),i.classList.add("dnd-mirror"),i.style.setProperty("margin","0","important"),i.style.setProperty("width",t.width+"px","important"),i.style.setProperty("height",t.height+"px","important"),i.style.setProperty("pointer-events","none","important"),n.style.setProperty("padding","0","important"),n.style.setProperty("position","fixed","important"),n.style.setProperty("pointer-events","none","important"),n.style.setProperty("width","0px","important"),n.style.setProperty("height","0px","important"),this.mirror=i,this.mirrorAnchor().append(n)}this.mirror.style.setProperty("top",this.event.clientY-this.dragOffset.y+"px"),this.mirror.style.setProperty("left",this.event.clientX-this.dragOffset.x+"px")},containerUpdated:function(e){var n=this;if(this.transitions.leaveContainer.id===e.dndId&&(this.transitions.leaveContainer.updated=!0),this.transitions.enterContainer.id===e.dndId&&(this.transitions.enterContainer.updated=!0),this.transitions.enterContainer.updated&&this.transitions.leaveContainer.updated){this.registeredContainers[this.transitions.enterContainer.id].saveRects(),this.updateDataObjectContainer(),this.dataObjectDomElement.classList.remove("dnd-move");var i=this.dataObjectDomElement;while(i&&i!==this.$el)i.classList.remove("dnd-move"),i=i.parentElement;var r=this.dataObjectDomElement.getBoundingClientRect();this.animateShadow(r);var s=[this.registeredContainers[this.transitions.leaveContainer.id],this.registeredContainers[this.transitions.enterContainer.id]];s.forEach((function(e){e.newRect.height===e.oldRect.height&&e.newRect.width===e.oldRect.width||(e.$el.style.setProperty("transition-duration",n.transitionDuration+"s","important"),e.$el.style.setProperty("transition-property","all"),e.setRect(e.oldRect),t.nextTick((function(){e.setRect(e.newRect)})),e.$el.addEventListener("transitionend",(function(){e.$el.style.setProperty("transition-duration","0s"),e.unsetRect()}),{once:!0}))}))}},track:function(){if(this.event&&"DragTrack"===this.dndState){if(this.lockPosition){var t=Math.abs(this.event.clientX-this.cursorX)+Math.abs(this.event.clientY-this.cursorY);if(t<100)return;this.lockPosition=!1}this.cursorEl=this.event.target,this.cursorX=this.event.clientX,this.cursorY=this.event.clientY}},clear:function(){if("Idle"!==this.dndState){this.removeListeners(),this.$el.classList.remove("dnd-zone");var t=this.mirror.getBoundingClientRect();if(!this.dataObjectDomElement)return void this.setIdleState();this.dataObjectDomElement.classList.remove("dnd-move");var e=this.dataObjectDomElement.getBoundingClientRect(),n=Math.abs(t.top-e.top)+Math.abs(t.left-e.left)+Math.abs(t.width-e.width)+Math.abs(t.height-e.height);if(n>0){this.mirror.style.setProperty("top",e.top+"px","important"),this.mirror.style.setProperty("left",e.left+"px","important"),this.mirror.style.setProperty("width",e.width+"px","important"),this.mirror.style.setProperty("height",e.height+"px","important"),this.mirror.style.setProperty("transform","scale(1,1)","important"),this.mirror.style.setProperty("transition-duration",this.transitionDuration+"s","important"),this.mirror.style.setProperty("transition-property","all","important"),this.mirror.classList.remove("dnd-mirror"),this.shadow.style.setProperty("top",e.top+"px","important"),this.shadow.style.setProperty("left",e.left+"px","important"),this.shadow.style.setProperty("width",e.width+"px","important"),this.shadow.style.setProperty("height",e.height+"px","important");var i=!0;this.mirror.addEventListener("transitionend",function(){i&&(i=!1,this.setIdleState())}.bind(this))}else this.setIdleState()}},setIdleState:function(){var t=this;this.dndState="Idle",this.shadow.parentElement.removeChild(this.shadow),this.mirror.parentElement.parentElement.removeChild(this.mirror.parentElement),this.activeScroll=null,this.dataObject=null,this.dataObjectContainer=null,this.shadow=null,this.mirror=null,this.event=null,this.cursorX=null,this.cursorY=null,this.cursorEl=null,this.prevX=null,this.prevY=null,Object.keys(this.registeredContainers).forEach((function(e){var n=t.registeredContainers[e];n.nr.hasChanged=!1,n.$el.style.removeProperty("transition-duration"),n.unsetRect()}))},registerContainer:function(t){this.registeredContainers[t.dndId]=t},unregisterContainer:function(t){delete this.registeredContainers[t.dndId]},updateDataObjectContainer:function(){for(var t=Object.keys(this.registeredContainers),e=0;e<t.length;e++){var n=this.registeredContainers[t[e]];if(n.getDataObjectIndex(this.dataObject)>-1)return void(this.dataObjectContainer=n)}this.dataObjectContainer=null},scroll:function(t){this.scrollInvoked[t]=window.setInterval(function(){switch(t){case"top":window.scrollTo(window.pageXOffset,window.pageYOffset-this.scrollSpeed(this.event,document.documentElement));break;case"left":window.scrollTo(window.pageXOffset-this.scrollSpeed(this.event,document.documentElement),window.pageYOffset);break;case"bottom":window.scrollTo(window.pageXOffset,window.pageYOffset+this.scrollSpeed(this.event,document.documentElement));break;case"right":window.scrollTo(window.pageXOffset+this.scrollSpeed(this.event,document.documentElement),window.pageYOffset);break}this.shadow.style.setProperty("transition-duration","0s","important"),this.shadow.style.setProperty("top",this.shadowPos.top+this.shadowPos.pageYOffset-window.pageYOffset+"px"),this.canScroll()[t]&&this.activeScroll||(clearInterval(this.scrollInvoked[t]),this.scrollInvoked[t]=null,this.dataObjectContainer.saveRects())}.bind(this),16)},scrollSpeed:function(t,e){return Math.max(0,20+Math.max(0-t.clientY,0-t.clientX,t.clientY-e.clientHeight,t.clientX-e.clientWidth))},canScroll:function(){return{top:this.event.clientY<=20&&window.pageYOffset>0,left:this.event.clientX<=20&&window.pageXOffset>0,bottom:this.event.clientY>=document.documentElement.clientHeight-20&&window.pageYOffset<document.documentElement.scrollHeight-document.documentElement.clientHeight,right:this.event.clientX>=document.documentElement.clientWidth-20&&window.pageXOffset<document.documentElement.scrollWidth-document.documentElement.clientWidth}},muteEvent:function(t){return t.preventDefault(),t.stopPropagation(),!1},simulateMouseEvent:function(t){if("touchstart"!==t.type&&t.preventDefault(),t.stopPropagation(),t.touches.length>1)return!1;var e="touchstart"===t.type?"mousedown":"touchend"===t.type?"mouseup":"mousemove",n=new MouseEvent(e,{view:window,bubbles:!0,cancelable:!0,screenX:t.touches[0]?t.touches[0].screenX:0,screenY:t.touches[0]?t.touches[0].screenY:0,clientX:t.touches[0]?t.touches[0].clientX:0,clientY:t.touches[0]?t.touches[0].clientY:0,button:0,buttons:1}),i="touchmove"===t.type?document.elementFromPoint(n.clientX,n.clientY)||document.body:t.target;i.dispatchEvent(n)},cloneAttributes:function(t,e){Object(N["a"])(e.attributes).forEach((function(e){t.setAttribute("id"===e.nodeName?"data-id":e.nodeName,e.nodeValue)}))},addListeners:function(){var t=this;document.body.addEventListener("mousemove",this.routeEvent),this.$el.addEventListener("touchmove",this.simulateMouseEvent),this.$el.addEventListener("touchend",this.simulateMouseEvent),document.addEventListener("mouseup",(function(){t.clear()}),{once:!0})},removeListeners:function(){document.body.removeEventListener("mousemove",this.routeEvent),this.$el.removeEventListener("mouseup",this.routeEvent),this.$el.removeEventListener("touchmove",this.simulateMouseEvent),this.$el.removeEventListener("touchend",this.simulateMouseEvent)},getItem:function(t){while(t&&t.$parent){if(t.isDraggable&&t.dndModel)return t;t=t.$parent}return null},getValidItem:function(t){while(t!==this.$el){if(t.__vue__)return this.getItem(t.__vue__);t=t.parentElement}return null},getContainer:function(t){if(!this.dataObject)return null;while(t&&t.$parent){if(t.isNestable&&t.dndModel&&t.dndZone==this&&!this.isSubset(t.dndModel,this.dataObject))return t;t=t.$parent}return null},getValidContainer:function(){var t=this.cursorEl;while(t&&t!==this.$el&&t!==document.body){if(t.__vue__)return this.getContainer(t.__vue__);t=t.parentElement}return null},isSubset:function(t,e){var n=this;return e.children&&e.children.length>0&&t!==e.children?Object.keys(e.children).some((function(i){n.isSubset(t,e.children[i])})):t===e.children},setRect:function(t,e){var n=t.style;this.shadowPos.left=e.left,this.shadowPos.top=e.top,this.shadowPos.pageXOffset=window.pageXOffset,this.shadowPos.pageYOffset=window.pageYOffset,n.setProperty("width",e.width+"px"),n.setProperty("height",e.height+"px"),n.setProperty("top",e.top+"px"),n.setProperty("left",e.left+"px")}},computed:{dataObjectComponent:function(){return this.dataObjectContainer?this.dataObjectContainer.getDataObjectComponent(this.dataObject)[0]:null},dataObjectDomElement:function(){return this.dataObjectComponent?this.dataObjectComponent.$el:null},cursorContainer:function(){return this.cursorEl&&this.dataObject?this.getValidContainer(this.cursorEl):null},cursorIndex:function(){return this.cursorContainer&&this.cursorX&&this.cursorY&&!this.lockPosition?this.cursorContainer.getIndex(this.cursorX,this.cursorY):null},cursorPosition:function(){return this.cursorContainer?this.cursorContainer.dndId+"-"+this.cursorIndex:null}},watch:{dataObjectDomElement:function(t,e){t&&t.style.setProperty("visibility","hidden","important"),e&&e.style.removeProperty("visibility")},cursorPosition:function(t){if(this.lockPosition)return this.positionCache;if(t&&this.dataObjectContainer){this.positionCache=t;var e=this.cursorContainer;if(!e)return;var n=Math.min(this.dataObjectContainer.dndModel.length-1,this.cursorIndex),i=this.dataObjectContainer.getDataObjectIndex(this.dataObject);if(this.dataObjectContainer==e){var r=Math.min(this.dataObjectContainer.dndModel.length-1,this.cursorIndex),s=this.dataObjectContainer.getDataObjectIndex(this.dataObject);if(s==r)return;if(!this.validate(this.dataObjectComponent,e,this))return;this.$emit("move",{from:{container:e,index:s},to:{container:e,index:r}}),this.dataObjectContainer.removeDataObject(this.dataObject),e.addDataObject(this.dataObject,r),this.lockPosition=!0,e.nr.hasChanged=!0,this.transitions.leaveContainer={id:this.dataObjectContainer.dndId,updated:!1},this.transitions.enterContainer={id:e.dndId,updated:!1}}else{if(e.dndZone!==this.dataObjectContainer.dndZone)return;if(!this.validate(this.dataObjectComponent,e,this))return;this.$emit("move",{from:{container:this.dataObjectContainer,index:i},to:{container:e,index:n}}),this.dataObjectContainer.removeDataObject(this.dataObject),this.dataObjectContainer.nr.hasChanged=!0,e.addDataObject(this.dataObject,this.cursorIndex),e.nr.hasChanged=!0,this.lockPosition=!0,this.transitions.leaveContainer={id:this.dataObjectContainer.dndId,updated:!1},this.transitions.enterContainer={id:e.dndId,updated:!1}}}}},mounted:function(){this.$el.addEventListener("mousedown",this.routeEvent),this.$el.addEventListener("touchstart",this.simulateMouseEvent),this.$el.addEventListener("drag",this.muteEvent,!1),this.$el.addEventListener("dragstart",this.muteEvent,!1)},beforeDestroy:function(){this.$el.removeEventListener("mousedown",this.routeEvent),this.$el.removeEventListener("touchstart",this.simulateMouseEvent),this.$el.removeEventListener("drag",this.muteEvent,!1),this.$el.removeEventListener("dragstart",this.muteEvent,!1)},render:function(){return this.$slots.default}}),t.component("DndContainer",{props:{tag:{type:String,default:"div"},dndId:{type:[Number,String],default:null},dndModel:{type:Array,default:function(){return[]}},verticalSearch:{type:Boolean,default:!1},isNestable:{type:Boolean,default:!0}},data:function(){return{itemCount:null,oldRect:null,newRect:null,dndZone:null,processing:!1,nr:{rects:null,hasChanged:!1,hasUpdated:!1}}},render:function(t){return t("transition-group",{props:{tag:this.tag,name:"dnd"},class:this.class,style:this.style,attrs:this.attrs},this.$slots.default)},methods:{addDataObject:function(t,e){0===this.dndModel.length||e>this.dndModel.length-1?this.dndModel.push(t):this.dndModel.splice(e,0,t)},removeDataObject:function(t){var e=this.dndModel.indexOf(t);this.dndModel.splice(e,1)},getDataObjectIndex:function(t){return this.dndModel.indexOf(t)},getDataObjectComponent:function(t){return this.$children[0].$children.filter((function(e){return e.dndModel===t}))},getRectangleMap:function(t){var e=[],n=1/0,i=-1/0,r=[],s=[],o=[];if(this.verticalSearch)for(var a=0;a<t.length;a++)e.push(t[a].bottom);else{for(var d=0;d<t.length;d++){n=Math.min(n,t[d].top),i=Math.max(i,t[d].bottom);var l=d===t.length-1||t[d].right>t[d+1].right;l?(s.push(t[d].right),e.push([n,i]),r.push([],s),o.push(d+1-s.length,d+1-s.length),s=[],n=d===t.length-1?1/0:t[d+1].bottom):s.push((t[d].right+t[d+1].left)/2)}r.push([]),o.push(t.length)}return{map:e.flat(),rows:r,pointers:o}},getIndex:function(t,e){var n=this.getRectangleMap(this.nr.rects);if(this.verticalSearch)return this.binarySearch(n.map,e);var i=this.binarySearch(n.map,e);return this.binarySearch(n.rows[i],t)+n.pointers[i]},getDndZone:function(t){while(t.$parent){if(t.isDndZone)return t;t=t.$parent}return null},register:function(){this.dndZone=this.getDndZone(this),this.dndZone&&this.dndZone.registerContainer(this)},unregister:function(){this.dndZone&&this.dndZone.unregisterContainer(this,!0)},binarySearch:function(t,e){var n=0,i=t.length-1,r=t.length;while(n<=i){var s=Math.floor((n+i)/2);t[s]>e?(r=s,i=s-1):n=s+1}return r},setRect:function(t){this.$el.style.setProperty("height",t.height+"px","important"),this.$el.style.setProperty("width",t.width+"px","important")},unsetRect:function(){this.$el.style.removeProperty("height"),this.$el.style.removeProperty("width")},saveRects:function(t){var e=this,n=Object(N["a"])(this.$el.children);if(!t)for(var i=0;i<n.length;i++)if(n[i].classList.contains("dnd-move"))return void n[i].addEventListener("transitionend",(function(){e.saveRects(!0)}),{once:!0});this.nr.rects=n.map((function(t){return e.getValidItem(t)})).filter((function(t){return t})).map((function(t){return t.$el.getBoundingClientRect()}))},getItem:function(t){while(t&&t.$parent){if(t.isDraggable&&t.dndModel)return t;t=t.$parent}return null},getValidItem:function(t){while(t!==this.$el){if(t.__vue__)return this.getItem(t.__vue__);t=t.parentElement}return null}},mounted:function(){this.itemCount=this.dndModel.length,this.register(),this.oldRect=this.$el.getBoundingClientRect(),this.newRect=this.oldRect},beforeUpdate:function(){this.unsetRect(),this.nr.hasChanged&&(this.oldRect=this.$el.getBoundingClientRect())},updated:function(){this.nr.hasChanged&&(this.newRect=this.$el.getBoundingClientRect(),this.nr.hasChanged=!1,this.dndZone.containerUpdated(this))},beforeDestroy:function(){this.$el.style.removeProperty("transition-duration"),this.unsetRect()}}),t.component("DndItem",{props:{dndId:{type:[Number,String],default:null},handleClass:{type:[Boolean,String],default:!1},dndModel:{type:Object,default:function(){return{}}},isDraggable:{type:Boolean,default:!0}},render:function(){return this.$slots.default},mounted:function(){},updated:function(){}})}}),W=Z;n("934a");i["a"].use(W),i["a"].config.productionTip=!1,new i["a"]({vuetify:B,render:function(t){return t(z)}}).$mount("#app")},"934a":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app-legacy.638294df.js.map