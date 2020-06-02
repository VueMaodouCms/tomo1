import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import draggable from 'vuedraggable'
import 'noto-sans-tc/noto_sans_tc_regular/css.css'
import './style/style.styl'
import RadialProgressBar from 'vue-radial-progress'
// 根據 icon 的種類引用
import { faCheck, faPen, faTimes, faUndo, faSave, faPlayCircle, faPause, faStepForward, faClock, faListUl, faBell } from '@fortawesome/free-solid-svg-icons'
import AudioVisual from 'vue-audio-visual'
// import AvLine from 'vue-audio-visual/src/components/AvLine'
import VueAnalytics from 'vue-analytics'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
Vue.use(VueSweetalert2)

Vue.use(VueAnalytics, {
  id: 'UA-168243644-1'
})

library.add(faCheck, faPen, faTimes, faUndo, faSave, faPlayCircle, faPause, faStepForward, faClock, faListUl, faBell)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('draggable', draggable)
Vue.component('RadialProgressBar', RadialProgressBar)
Vue.use(AudioVisual)
// Vue.component('AudioVisual', AvLine)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
