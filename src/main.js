import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import EvaIcons from 'vue-eva-icons'
import VueNoty from 'vuejs-noty'

//Style
import './scss/app.scss'
import 'vuejs-noty/dist/vuejs-noty.css'

//Router
import router from './router'

window.$ = window.jQuery = require('jquery');
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(EvaIcons)
Vue.use(VueNoty, {
    theme: 'relax',
    timeout: 4000,
    progressBar: true,
    layout: 'topRight',
    visibilityControl: true
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')