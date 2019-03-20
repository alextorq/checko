<template>
    <el-row
            v-loading="loading"
            element-loading-text="Loading..."
            element-loading-spinner="el-icon-loading">
        <el-col :span="24">
            <div class="user_page">
                <el-row>
                    <h1><span>{{role.id}}:</span> {{role.name}}</h1>
                </el-row>
                <el-tabs v-model="activeTab" >
                    <el-tab-pane label="Avilities" name="first" key="first">
                        <el-table :data="abilities" border fit highlight-current-row>

                            <el-table-column align="center" label="ID" width="80">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.id }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column width="280px" align="center" label="Name">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.name }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column width="200px" align="center" label="Date">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.created_at }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column min-width="220px" align="left" label="Title">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.title }}</span>
                                </template>
                            </el-table-column>

                            <el-table-column align="center" label="Actions" width="120">
                                <template slot-scope="scope">
                                    <el-button-group>
                                        <el-tooltip class="item" effect="dark" content="disallow" placement="right">
                                            <el-button type="danger" size="small" icon="el-icon-delete"
                                                       @click="disallowAbility(scope.row.id)"></el-button>
                                        </el-tooltip>
                                    </el-button-group>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="bottom-fixed-button">
                            <el-tooltip class="item" effect="dark" content="add ability" placement="top">
                                <el-button type="primary" size="small" @click="addAbilityDialog.status = !addAbilityDialog.status"
                                           icon="el-icon-circle-plus-outline" circle></el-button>
                            </el-tooltip>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="Users" key="third" name="third">
                        <el-table  :data="users" border fit highlight-current-row>

                    <el-table-column align="center" label="ID" width="80">
                        <template slot-scope="scope">
                            <span>{{ scope.row.user_id }}</span>
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

                    <el-table-column width="220px" align="center" label="Email">
                        <template slot-scope="scope">
                            <span>{{ scope.row.email }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column min-width="300px" label="Description">
                        <template slot-scope="scope">
                            <template v-if="scope.row.description">
                                {{scope.row.description}}
                            </template>
                            <span v-else>null</span>
                        </template>
                    </el-table-column>

                    <el-table-column align="center" label="Actions" width="120">
                        <template slot-scope="scope">
                            <el-button-group>
                                <el-tooltip class="item" effect="dark" content="retract" placement="left">
                                    <el-button type="danger" size="small" icon="el-icon-delete"
                                               @click="retractRoleToUser(scope.row.user_id)"></el-button>
                                </el-tooltip>
                            </el-button-group>
                        </template>
                    </el-table-column>

                </el-table>
                        <div class="bottom-fixed-button">
                            <el-tooltip class="item" effect="dark" content="add user" placement="top">
                                <el-button type="primary" size="small" @click="selectUsers"
                                           icon="el-icon-circle-plus-outline" circle></el-button>
                            </el-tooltip>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-col>
        <addAbility :visible="addAbilityDialog" :parent_abilities="abilities" :role_id="this.role.id"
        @attach="getRole">
        </addAbility>
    </el-row>
</template>

<script>
import addAbility from '../Forms/AddAbilityToRole'
    export default {
        name: "RoleItem",
        data() {
            return {
                users: [],
                abilities: [],
                role: {},
                activeTab: 'first',
                loading: true,
                addAbilityDialog: {
                    status: false
                }
            }
        },
        methods: {
          getRole() {
              axios
                  .get('/admin_api/v1/permissions/roles/' + this.name)
                  .then(response => {
                      this.users = response.data.users;
                      this.abilities = response.data.abilities;
                      this.role = response.data.role;
                      this.loading = false;
                  }).catch((err) => {
                  console.log(err)
              });
          },
            selectUsers() {
              this.$router.push(
                  {
                      name: 'users_select',
                      params: {callback : this.assignRoleToUser.bind(this)}
                  }
              );
            },
            retractRoleToUser(userID) {
                axios
                    .post('/admin_api/v1/permissions/roles/retract', {
                        roleName: this.role.name,
                        user: userID
                    })
                    .then(() => {
                        this.getRole();
                        this.$notify({
                            title: 'Success',
                            message: `User retract`,
                            type: 'success'
                        });
                    }).catch((err) => {
                    console.log(err)
                });
            },

            assignRoleToUser(users) {
                axios
                    .post('/admin_api/v1/permissions/roles/assign', {
                        roleName: this.role.name,
                        users: users
                    })
                    .then(() => {
                        this.$router.replace({name: 'role_page', params: {name: this.role.name}});
                    }).catch((err) => {
                        console.log(err)
                });
            },
            disallowAbility(id) {
                this.loading = true;
                axios
                    .post('/admin_api/v1/permissions/availability/disallow', {
                        roleID: this.role.id,
                        abilityID: id
                    })
                    .then(() => {
                        this.getRole();
                        this.$notify({
                            title: 'Success',
                            message: `Ability disallow`,
                            type: 'success'
                        });
                    }).catch((err) => {
                        this.$notify({
                            title: 'Error',
                            type: 'error',
                            message: `Something went wrong`
                        });
                        console.log(err)
                });
            }
        },

        created() {
            this.getRole();
        },
        components: {
            addAbility
        },
        props: ['name']
    }
</script>

<style>
    .user_page {
        text-align: left;

    }
</style>