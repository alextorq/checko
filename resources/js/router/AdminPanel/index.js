import Vue from 'vue';
import VueRouter from 'vue-router';
/*
* Компоненты
/* Layout */
import Layout from '../../components/AdminPanel/AdminPanel'
import main from '../../views/AdminPanel/main/index.vue'

import UserPage from '../../views/AdminPanel/user_page/index.vue';
import Users from '../../views/AdminPanel/users'
import InlineEditTable from '../../components/AdminPanel/Table/user-edit-table';
import SelectUsers from '../../components/AdminPanel/Table/SelectUsers';
import SelectAbility from '../../components/AdminPanel/Table/SelectAbilities';

import Permissions from '../../views/AdminPanel/permission/index.vue'
import Roles from '../../views/AdminPanel/roles/Roles'
import RolesTable from '../../components/AdminPanel/Table/roles-table'
import RolePage from '../../components/AdminPanel/Permissions/RoleItem'
import Availability from '../../components/AdminPanel/Permissions/Availability'

import ErrorsLayout from '../../views/AdminPanel/errors'
import ErrorTable from '../../components/AdminPanel/Table/ErrorTable';

import CheckListLayput from '../../views/AdminPanel/checkList/layout'
import ChecklistsTable from  '../../components/AdminPanel/Table/ChecklistsTable'
import CheckList from '../../views/AdminPanel/checkList_page'

import DefaultPages from  '../../views/AdminPanel/default_pages'
import defaultPagesTable from '../../components/AdminPanel/Table/PagesDefault'
import defaultPageCreate from '../../components/AdminPanel/Forms/CreatePage'
import defaultPage from '../../components/AdminPanel/DefaultPage/onePage'



Vue.use(VueRouter);

const routes = [
    {
        path: '/admin',
        component: Layout,
        meta: {title: 'Dashbord', breadcrumb: true, keepAlive: true},
        children: [
            {
                path: '',
                component: main,
                name: 'dashboard',
                meta: {title: 'Dashboard', breadcrumb: false, icon: 'fa-home', keepAlive: true},
            },
            {
                path: 'users',
                component: Users,
                meta: {title: 'Users', breadcrumb: true, icon: 'fa-users', keepAlive: true},
                children: [
                    {
                        path: '',
                        component: InlineEditTable,
                        name: 'users_list',
                        meta: {title: 'All Users', breadcrumb: true, keepAlive: true},
                    },
                    {
                        path: 'select',
                        component: SelectUsers,
                        hidden: true,
                        props: true,
                        cache: false,
                        name: 'users_select',
                        meta: {title: 'Select Users', breadcrumb: true, keepAlive: false}
                    },
                    {
                        path: ':id',
                        component: UserPage,
                        name: 'user_page',
                        props: true,
                        hidden: true,
                        meta: {title: 'User page', breadcrumb: true, keepAlive: true},
                    }
                ]
            },
            {
                path: 'pages',
                name: '',
                component: DefaultPages,
                meta: {title: 'Pages', breadcrumb: true, icon: 'el-icon-document', keepAlive: true},
                children: [
                    {
                        path: '',
                        component: defaultPagesTable,
                        name: 'page_list',
                        meta: {title: 'All Page', breadcrumb: true, keepAlive: true},
                    },
                    {
                        path: 'new',
                        component: defaultPageCreate,
                        name: 'new_page',
                        hidden: true,
                        meta: {title: 'New Page', breadcrumb: true, keepAlive: true},
                    },
                    {
                        path: ':id',
                        component: defaultPage,
                        name: 'one_page',
                        props: true,
                        hidden: true,
                        meta: {title: 'Page', breadcrumb: true, keepAlive: true},
                    }
                ]
            },
            {
                path: 'checklists/',
                name: '',
                component: CheckListLayput,
                meta: {title: 'checklists', breadcrumb: true, icon: 'el-icon-finished', keepAlive: true},
                children: [
                    {
                        path: '',
                        component: ChecklistsTable,
                        name: 'check_list',
                        hidden: false,
                        meta: {title: 'checklists', breadcrumb: true, icon: 'el-icon-finished', keepAlive: true},
                    },
                    {
                        path: ':id',
                        component: CheckList,
                        name: 'check_list_page',
                        props: true,
                        hidden: true,
                        meta: {title: 'CheckList page', breadcrumb: true, keepAlive: true},
                    }
                ]
            },
            {
                path: 'errors/',
                name: '',
                component: ErrorsLayout,
                meta: {title: 'Errors', breadcrumb: true, icon: 'el-icon-error', keepAlive: true},
                children: [
                    {
                        path: '',
                        component: ErrorTable,
                        name: 'error_list',
                        hidden: false,
                        meta: {title: 'Error List', breadcrumb: true, icon: 'el-icon-error', keepAlive: true},
                    }
                ]
            },
            {
                path: 'permissions',
                component: Permissions,
                meta: {title: 'Permissions', breadcrumb: true, icon: 'fa-lock', keepAlive: true},
                redirect: { name: 'roles_list' },
                children: [
                    {
                        path: 'roles',
                        component: Roles,
                        name: 'roles',
                        meta: {title: 'Roles', breadcrumb: true, keepAlive: true},
                        redirect: { name: 'all_roles' },
                        children: [
                            {
                                path: 'all_roles',
                                component: RolesTable,
                                meta: {title: 'Roles Table', breadcrumb: false, icon: 'fa-lock', keepAlive: true},
                                name: 'all_roles'
                            },
                            {
                                path: ':name',
                                component: RolePage,
                                meta: {title: 'Roles Page', breadcrumb: true, icon: 'fa-lock', keepAlive: true},
                                name: 'role_page',
                                props: true,
                            }
                        ]
                    },
                    {
                        path: 'availability',
                        component: Availability,
                        name: 'availability_list',
                        meta: {title: 'Availabilities', breadcrumb: true, keepAlive: true},
                    },
                    // {
                    //     path: 'select_availability',
                    //     component: SelectAbility,
                    //     hidden: true,
                    //     props: true,
                    //     cache: false,
                    //     name: 'select_availability',
                    //     meta: {title: 'SelectAbility', breadcrumb: false, keepAlive: false},
                    // },

                ]
            },
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
