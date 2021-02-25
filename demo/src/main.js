import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

/* Production Syntax (npm module) */

// import VueDndZone from 'vue-dnd-zone'
// import 'vue-dnd-zone/vue-dnd-zone.css'

/* Development  Syntax (local files) */
import VueDndZone from './dev/vue-dnd-zone.js'
import './dev/vue-dnd-zone.css'

Vue.use(VueDndZone)
Vue.config.productionTip = false
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
