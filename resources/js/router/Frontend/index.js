import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../../store/Frontend/index'

/*Компоненты*/

import Layout from  '../../components/Frontend/Layout'
import CheckList from '../../views/Frontend/CheckList'

const FormRegistration = () =>  import('../../views/Frontend/FormRegistration');
const FormLogin = () =>  import('../../views/Frontend/FormLogin');
const ForgotPassword  = () =>  import('../../views/Frontend/FormForgotPassword');

const NotFound = () => import('../../views/Frontend/404');
import  SettingsLayout from  '../../views/Frontend/Settings'
import  SettingsList from '../../components/Frontend/Settings/List'
import  SettingsAccount from '../../components/Frontend/Settings/Account'

const About = () => import('../../views/Frontend/About/index.vue');

import  SettingsNotification from '../../components/Frontend/Settings/Notification'
import  SettingsPayment from '../../components/Frontend/Settings/Payment'
import  SettingsGeneral from '../../components/Frontend/Settings/General'

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
                path: '/about',
                name: 'about',
                component: About,
                meta: {title: 'About us', breadcrumb: true, keepAlive: true,
                    permission: {
                        hook: null
                    }
                }
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
