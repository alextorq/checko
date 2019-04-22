import Vue from 'vue';
import VueRouter from 'vue-router';

/*
* Компоненты
/* Layout */

import Layout from  '../../components/Frontend/Layout'
import CheckList from  '../../components/Frontend/CheckList'
import Blank from '../../components/Frontend/CheckListBlank'
import FormRegistration from  '../../components/Frontend/FormRegistration'
import FormLogin from  '../../components/Frontend/FormLogin'
import Reglament from  '../../components/Frontend/Reglament'
import  NotFound from  '../../views/Frontend/404'
import  SettingsLayout from  '../../views/Frontend/Settings'
import  SettingsGeneral from '../../components/Frontend/Settings/General'
import  SettingsList from '../../components/Frontend/Settings/List'
import  SettingsAccount from '../../components/Frontend/Settings/Account'
import  SettingsNotification from '../../components/Frontend/Settings/Notification'
import  SettingsPayment from '../../components/Frontend/Settings/Payment'

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
                path: '/settings',
                component: SettingsLayout,
                name: '',
                meta: {title: 'SettingsLayout', breadcrumb: true, keepAlive: true},
                children: [
                        {
                            path: 'account',
                            component: SettingsAccount,
                            name: 'SettingsAccount',
                            meta: {title: 'Account', breadcrumb: true, keepAlive: true},
                        },
                        {
                            path: '',
                            component: SettingsGeneral,
                            name: 'SettingsGeneral',
                            meta: {title: 'General', breadcrumb: true, keepAlive: true},
                        },
                        {
                            path: 'list',
                            component: SettingsList,
                            name: 'SettingsList',
                            meta: {title: 'Lists & tasks', breadcrumb: true, keepAlive: true},
                        },
                        {
                            path: 'notification',
                            component: SettingsNotification,
                            name: 'SettingsNotification',
                            meta: {title: 'Notification', breadcrumb: true, keepAlive: true},
                        },
                        {
                            path: 'payment',
                            component: SettingsPayment,
                            name: 'SettingsPayment',
                            meta: {title: 'Payment', breadcrumb: true, keepAlive: true},
                        },

                ]
            },
            {
                path: 'frontend/checklist/:list_id',
                component: CheckList,
                name: 'CheckList',
                meta: {title: 'CheckList', breadcrumb: true, keepAlive: true},
            },
            {
                path: 'registration',
                component: FormRegistration,
                name: 'Registration',
                meta: {title: 'registration', breadcrumb: true, keepAlive: true},
            },
            {
                path: 'login',
                component: FormLogin,
                name: 'Login',
                meta: {title: 'Login', breadcrumb: true, keepAlive: true},
            },
            {
                path: '/reglament',
                name: 'reglament',
                component: Reglament,
            },
            {
                path: '/404',
                name: '404',
                component: NotFound,
            },
            {
                path: '*',
                redirect: '/404'
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

//TODO Test this
router.afterEach((to) => {
    Vue.nextTick(() => {
        if (to.meta.title) {
            document.title = to.meta.title;
        }
    })
});

export default router;
