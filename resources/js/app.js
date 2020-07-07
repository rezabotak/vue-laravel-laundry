import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import App from './App.vue'
import router from './router.js'
import store from './store.js'


Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)


new Vue({
    el: '#dw',
    router,
    store,
    components: {
        App
    }
})