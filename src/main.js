import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb, faRobot, faCircleQuestion, faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add(faLightbulb, faRobot, faCircleQuestion, faEye, faEnvelope, faLinkedin)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
