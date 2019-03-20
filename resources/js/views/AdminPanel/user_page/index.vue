<template>
    <el-row
            v-loading="loading"
            element-loading-text="Loading..."
            element-loading-spinner="el-icon-loading">
        <el-col :span="24">
            <div class="user_page">
                <el-row>
                    <h1><span>{{user.user_id}}:</span> {{user.name}}</h1>
                </el-row>
                <el-tabs v-model="activeTab">
                    <el-tab-pane label="Info" name="first">
                        <p>Активность: {{user.active}}</p>
                        <el-row type="flex" align="middle">
                            <el-col :span="1">Создан:</el-col>
                            <el-col :span="5">
                                <el-date-picker
                                        v-model="user.created_at"
                                        type="datetime"
                                        placeholder="Select date and time">
                                </el-date-picker>
                            </el-col>
                        </el-row>

                        <el-row type="flex" align="middle">
                            <el-col :span="1">Email:</el-col>
                            <el-col :span="5">
                                <el-input placeholder="Please input" v-model="user.email"></el-input>
                            </el-col>
                        </el-row>

                    </el-tab-pane>
                    <el-tab-pane label="Pay History" name="second">Pay History</el-tab-pane>
                    <el-tab-pane label="Role" name="third">
                        <ul>
                            <li v-for="role in roles">
                                {{role}}
                            </li>
                        </ul>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "index",
        data() {
          return {
              user: '',
              roles: [],
              activeTab: 'first',
              loading: true
          }
        },
        methods: {
            save() {

                // axios.get('/admin_api/v1/permissions/roles/all')
                //     .then(response => {
                //         this.list = response.data.roles;
                //         this.total = this.list.length;
                //         this.listLoading = false
                //     });
                // this.user
            }
        },
        created() {
              this.$store.dispatch('getUserByID', this.id).then((data) => {
                  this.user = data.user;
                  this.roles = data.roles;
                  this.loading = false;
              }).catch((err) => {
                  this.$notify({
                      title: 'Error',
                      type: 'error',
                      message: `Something went wrong`
                  });
                  console.log(err)
              })
        },
        props: ['id']
    }
</script>

<style>
    .user_page {
        text-align: left;

    }
</style>