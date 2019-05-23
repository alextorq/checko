import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../../store/Frontend/index'
/*
* Компоненты
/* Layout */

import Layout from  '../../components/Frontend/Layout'
import CheckList from  '../../components/Frontend/CheckList'
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
import ForgotPassword from  '../../components/Frontend/FormForgotPassword'


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Layout,
        meta: {title: 'Main', breadcrumb: true, keepAlive: true,
            permission: {
                hook: null
            }
        },
        children: [
            {
                path: 't/:list_id?',
                alias: '',
                component: CheckList,
                name: 'CheckList',
                meta: {title: 'CheckList', breadcrumb: true, keepAlive: true,
                    permission: {
                        hook: null
                    }
                },
            },
            {
                path: '/settings',
                component: SettingsLayout,
                name: '',
                meta: {title: 'SettingsLayout', breadcrumb: true, keepAlive: true,
                    permission: {
                        hook: null
                    }
                },
                children: [
                        {
                            path: 'account',
                            component: SettingsAccount,
                            name: 'SettingsAccount',
                            meta: {title: 'Account', breadcrumb: true, keepAlive: true,
                                permission: {
                                    hook: 'login'
                                }
                            },
                        },
                        // {
                        //     path: '',
                        //     component: SettingsGeneral,
                        //     name: 'SettingsGeneral',
                        //     meta: {title: 'General', breadcrumb: true, keepAlive: true,
                        //         permission: {
                        //             hook: null
                        //         }
                        //     },
                        // },
                        {
                            path: '',
                            component: SettingsList,
                            name: 'SettingsList',
                            meta: {title: 'Lists & tasks', breadcrumb: true, keepAlive: true,
                                permission: {
                                    hook: null
                                }
                            },
                        },
                        // {
                        //     path: 'notification',
                        //     component: SettingsNotification,
                        //     name: 'SettingsNotification',
                        //     meta: {title: 'Notification', breadcrumb: true, keepAlive: true,
                        //         permission: {
                        //             hook: null
                        //         }
                        //     },
                        // },
                        // {
                        //     path: 'payment',
                        //     component: SettingsPayment,
                        //     name: 'SettingsPayment',
                        //     meta: {title: 'Payment', breadcrumb: true, keepAlive: true,
                        //         permission: {
                        //             hook: null
                        //         }
                        //     },
                        // },
                ]
            },

            {
                path: 'registration',
                component: FormRegistration,
                name: 'Registration',
                meta: {title: 'registration', breadcrumb: true, keepAlive: true,
                    permission: {
                        hook: null
                    }
                },
            },
            {
                path: 'login',
                component: FormLogin,
                name: 'Login',
                meta: {title: 'Login', breadcrumb: true, keepAlive: true,
                    permission: {
                        hook: null
                    }
                },
            },
            {
                path: 'forgot_password',
                component: ForgotPassword,
                name: 'ForgotPassword',
                meta: {title: 'Forgot Password', breadcrumb: true, keepAlive: true,
                    permission: {
                        hook: null
                    }
                },
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
                meta: {title: 'Page not found', breadcrumb: true, keepAlive: true,
                    permission: {
                        hook: null
                    }
                }
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


router.afterEach((to) => {

    Vue.nextTick(() => {
        if (to.meta.title) {
            document.title = to.meta.title;
        }
    });

    console.log(to);

});

router.beforeEach((to, from, next) => {
    if (to.meta.permission.hook === 'login') {
        if (store.getters.userLoginStatus) {
            next();
            return
        }
        next('/login')
    }
    next();
});


export default router;
