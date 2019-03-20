<template>
    <div>

        <div class="bottom-fixed-button">
            <el-tooltip class="item" effect="dark" content="add role" placement="top">
                <el-button type="primary" size="small" @click="isDialogOpen.status = !isDialogOpen.status"
                           icon="el-icon-circle-plus-outline" circle></el-button>
            </el-tooltip>
        </div>

        <el-table v-loading="listLoading" :data="list" stripe border fit highlight-current-row>

            <el-table-column align="center" label="ID" width="80">
                <template slot-scope="scope">
                    <span>{{ scope.row.id }}</span>
                </template>
            </el-table-column>

            <el-table-column width="120px" align="center" label="Name">
                <template slot-scope="scope">
                    <span>{{ scope.row.name }}</span>
                </template>
            </el-table-column>

            <el-table-column width="180px" align="center" label="Date">
                <template slot-scope="scope">
                    <span>{{ scope.row.created_at }}</span>
                </template>
            </el-table-column>

            <el-table-column width="220px" align="center" label="Title">
                <template slot-scope="scope">
                    <span>{{ scope.row.title }}</span>
                </template>
            </el-table-column>

            <el-table-column min-width="300px" label="Level">
                <template slot-scope="scope">
                    <span>{{scope.row.level}}</span>
                    <span>{{scope.row.level}}</span>
                </template>
            </el-table-column>

            <el-table-column align="center" label="Actions" width="120">
                <template slot-scope="scope">
                    <el-button-group>
                        <el-tooltip class="item" effect="dark" content="more" placement="left">
                            <el-button type="primary" size="small" icon="el-icon-more"
                                       @click="linkPage(scope.row.name)"></el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="delete role" placement="left">
                            <el-button type="danger" size="small" icon="el-icon-delete"
                                       @click="deleteRole(scope.row.name)"></el-button>
                        </el-tooltip>
                    </el-button-group>
                </template>
            </el-table-column>

        </el-table>
        <createRoleForm :visible="isDialogOpen" @create_role="getList"></createRoleForm>
    </div>
</template>

<script>
    import createRoleForm from '../Forms/CreateRole';
    export default {
        name: "RolesTable",
        data() {
            return {
                listLoading: false,
                total: 10,
                list: [],
                isDialogOpen: {
                    status: false
                }
            }
        },
        methods: {
            getList() {
                axios.get('/admin_api/v1/permissions/roles/all')
                    .then(response => {
                        this.list = response.data.roles;
                        this.total = this.list.length;
                        this.listLoading = false
                    });
            },
            message(data) {
                const h = this.$createElement;
                let abilitiesTitle = h('p', {  style: {margin: '0 0 5px 0' , fontWeight: 700}}, 'Abilities');
                let userTitle = h('p', {  style: {margin: '0 0 5px 0', fontWeight: 700}}, 'Users');
                let users = h('ul', {  style: {margin: '0 0 10px 0'}},
                    data.abilities.map(function (ability) {
                        return h('li', {  style: {margin: '0 0 5px 0'}}, ability.name)
                    }));
                let abilities = h('ul',  data.users.map(function (user) {
                    return h('li', {  style: {margin: '0 0 5px 0'}}, user.name)
                }));

                return this.$msgbox({
                    title: 'Warning this role has users or abilities, whatever delete?',
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    showCancelButton: true,
                    message: h('div', [userTitle, users, abilitiesTitle, abilities])
                })
            },
            deleteRole(name) {
                axios
                    .delete(`/admin_api/v1/permissions/roles/${name}`)
                    .then((responce) => {
                        console.log(responce);
                    }).catch((error) => {
                        if (error.response.status === 422) {
                            /*
                            Если у роли есть пользователи то спросить подтверждение
                            * */
                            this.message(error.response.data).then((action) => {
                                if (action === 'confirm') {
                                    axios
                                        .delete(`/admin_api/v1/permissions/roles/${name}`, {params: {force: true}})
                                        .then((responce) => {
                                           this. getList();
                                        }).catch((error) => {console.log(error)})
                                }
                            })
                        }else {
                            this.$notify({
                                title: 'Error',
                                type: 'error',
                                message: `Something went wrong`
                            });
                            console.log(error)
                        }
                });
            },
            linkPage(name) {
                this.$router.push({name: 'role_page', params: {name: name}});
            }

        },
        components: {
            createRoleForm
        },
        created() {
            this.getList();
        }
    }
</script>