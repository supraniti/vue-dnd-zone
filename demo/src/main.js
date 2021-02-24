import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueDndZone from 'vue-dnd-zone'
import 'vue-dnd-zone/vue-dnd-zone.css'
Vue.use(VueDndZone)
Vue.config.productionTip = false
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
