import Vue from 'vue'
import Vuex from 'vuex';
import checkList from './modules/checkList'
import checkItem from './modules/checkItem'
import settings from  './modules/settings'

Vue.use(Vuex);


let store = new Vuex.Store({
    modules: {
        checkList,
        checkItem,
        settings
    },
    state: {

    },
    getters: {


    },
    actions: {

    },
    mutations: {

    }

});

export default store;
