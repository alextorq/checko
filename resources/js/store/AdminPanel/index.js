import Vue from 'vue'
import Vuex from 'vuex';
import users from './modules/users'
import checklist from './modules/CheckList'
import availabilities from './modules/availabilities'

Vue.use(Vuex);



let store = new Vuex.Store({
    modules: {
        users,
        availabilities,
        checklist
    },
    state: {
        currentCategory: ''
    },
    getters: {


    },
    actions: {

    },
    mutations: {

    }

});

export default store;
