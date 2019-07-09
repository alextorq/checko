import Vue from 'vue';
import App from './FrontApp';
import axios from 'axios';
import Vuex from './store/Frontend'
import Notifications from 'vue-notification'
import VueAutosize from'vue-autosize'
import router from './router/Frontend';
import ErrorVueHandler from  './helpers/Frontend/ErrorVueHandler'
import ErrorGlobalHandler from './helpers/Frontend/ErrorGlobalHandler'
import ErrorRESTHandler from  './helpers/Frontend/ErrorRESTHandler'



window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */
let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    // console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}



axios.interceptors.response.use(
    response => response,
    ErrorRESTHandler
);




window.countLoad = 0;

Vue.use(Notifications);
Vue.use(VueAutosize);


if  (process.env.NODE_ENV !== 'development') {
    window.onerror = ErrorGlobalHandler;
    Vue.config.errorHandler = ErrorVueHandler;
}



const app = new Vue({
    el: '#app',
    store: Vuex,
    router,
    render: h => h(App)
});

