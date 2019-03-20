<template>
    <div>
        <h2>Last registered user</h2>
        <el-table
            :data="lastUsers" border style="width: 100%;padding-top: 15px;"
            v-loading="loading"
            element-loading-text="Loading..."
            element-loading-spinner="el-icon-loading">

            <el-table-column label="Name" min-width="140">
                <template slot-scope="scope">
                    {{ scope.row.name }}
                </template>
            </el-table-column>
            <el-table-column label="Created" width="170" align="center">
                <template slot-scope="scope">
                    {{ scope.row.created_at}}
                </template>
            </el-table-column>
            <el-table-column label="Email" width="250" align="center">
                <template slot-scope="scope" >
                    {{ scope.row.email }}
                </template>
            </el-table-column>

            <el-table-column align="center" label="Actions" width="80">
                <template slot-scope="scope">
                    <el-tooltip class="item" effect="dark" content="more" placement="right">
                        <el-button type="primary" size="small" icon="el-icon-more" @click="viewUserPage(scope.row)"></el-button>
                    </el-tooltip>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>

<script>
    export default {
        name: "last-registration-users",
        data() {
          return {
              loading: true
          }
        },
        methods: {
            viewUserPage(data) {
                this.$router.push({
                    name: 'user_page',
                    params: {id: data.user_id}
                });
            },
        },
        computed: {
            lastUsers() {
                return this.$store.getters.lastRegisteredUser
            }
        },
        components: {

        },
        created() {
            this.$store.dispatch('getLastUsers').then(() => {
                this.loading = false;
            }).catch((error) => {
                console.log(error);
                this.$notify({
                    title: 'Error',
                    type: 'error',
                    message: `Something went wrong`
                });
            });
        }
    }
</script>

<style scoped>

</style>