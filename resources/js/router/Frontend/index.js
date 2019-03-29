import Vue from 'vue';
import VueRouter from 'vue-router';

/*
* Компоненты
/* Layout */

import Layout from  '../../components/Frontend/Layout'
import CheckList from  '../../components/Frontend/CheckList'
import Blank from '../../components/Frontend/CheckListBlank'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Layout,
        meta: {title: 'Main', breadcrumb: true, keepAlive: true},
        children: [
            {
                path: '',
                component: Blank,
                name: 'Blank',
                meta: {title: 'Blank', breadcrumb: true, keepAlive: true},
            },
            {
                path: 'frontend/checklist/:list_id',
                component: CheckList,
                name: 'CheckList',
                meta: {title: 'CheckList', breadcrumb: true, keepAlive: true},
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
