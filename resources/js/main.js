import Vue from 'vue';
import router from './router/AdminPanel';
import ElementUI from 'element-ui';
import store from './store/AdminPanel';
import App from './App';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import axios from 'axios';

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
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


Vue.use(ElementUI, { locale });

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});