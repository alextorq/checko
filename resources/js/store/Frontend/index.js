import Vue from 'vue'
import Vuex from 'vuex';
import checkList from './modules/checkList'
import checkItem from './modules/checkItem'
import settings from  './modules/settings'
import user from './modules/user'

Vue.use(Vuex);


let store = new Vuex.Store({
    modules: {
        checkList,
        checkItem,
        settings,
        user
    },
    state: {
        isLoad: false
    },
    getters: {
        isLoad(state) {
            return state.isLoad;
        }
    },
    actions: {

    },
    mutations: {
        updateLoadStatus(state, payload) {
            state.isLoad = payload;
        }
    }

});


export default store;
