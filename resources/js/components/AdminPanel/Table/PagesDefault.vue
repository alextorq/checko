<template>
    <div class="app-container">

        <div class="bottom-fixed-button">
            <el-tooltip class="item" effect="dark" content="new page" placement="top">
                <el-button type="primary" size="small" @click="$router.push({name: 'new_page'})"
                           icon="el-icon-circle-plus-outline" circle>
                </el-button>
            </el-tooltip>
        </div>

        <el-table v-loading="listLoading"  stripe :data="list"
                  border fit highlight-current-row>

            <el-table-column prop="page_id" align="center" label="ID" width="80"
                             :sortable="true"
                             :sort-method="(a, b) => sortData(a, b, 'number')"
                             :sort-orders="['ascending']">
            </el-table-column>

            <el-table-column  width="220px" prop="pagetitle" align="left" label="pagetitle">
            </el-table-column>

            <el-table-column width="180px" prop="created_at" align="center" label="Date">
            </el-table-column>


            <el-table-column min-width="300px" label="Description">
                <template slot-scope="scope">
                    <template v-if="scope.row.description">
                        {{scope.row.description}}
                    </template>
                    <span v-else>null</span>
                </template>
            </el-table-column>

            <el-table-column width="100px" prop="publish" align="left" label="publish">
                <template slot-scope="scope">
                    <template v-if="scope.row.publish">
                        <el-tag type="success">Public</el-tag>
                    </template>
                    <span v-else>
                        <el-tag type="info">Hidden</el-tag>
                    </span>
                </template>
            </el-table-column>

            <el-table-column align="left" label="Actions" width="auto">
                <template slot-scope="scope">
                    <el-button-group>
                        <el-tooltip class="item" effect="dark" content="more" placement="top">
                            <el-button type="primary" size="small" icon="el-icon-more"
                                       @click="viewPage(scope.row.page_id)"></el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="delete user" placement="top">
                            <el-button type="danger" size="small" icon="el-icon-delete"
                                       @click="showConfirmDelete(scope.row)"></el-button>
                        </el-tooltip>
                    </el-button-group>
                </template>
            </el-table-column>


        </el-table>


        <pagination v-show="total>0" :total="total" :page.sync="listQuery.page"
                    :limit.sync="listQuery.limit" @pagination="getList" />

        <!--Диалог на удаление пользователя-->
        <el-dialog
                title="Deleting user"
                :visible.sync="dialogVisible"
                width="30%">
            <template>
                <span>Do you really want to delete the page {{deleteInfo.pagetitle}}?</span>
            </template>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Нет</el-button>
                <el-button type="primary" @click="deletePage">Да</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
    import pagination from '../Pagination/pagination'
    import preferenceKeeper from '../../../utils/PreferenceKeeper';

    export default {
        name: 'InlineEditTable',
        data() {
            return {
                list: [],
                total: 50,
                listLoading: false,
                listQuery: {
                    page: 1,
                    limit: 5
                },
                dialogVisible: false,
                deleteInfo: {},
            }
        },
        computed: {

        },
        components: {
            pagination
        },
        watch:{
            'listQuery.limit': function (newVal, oldVal){
                preferenceKeeper.save(this.$options.name + '_page-limit', newVal);
            }
        },
        methods: {
            getList() {
                this.listLoading = true;
                axios.get('/admin_api/v1/pages/all',{
                    params: {
                        'page': this.listQuery.page,
                        'limit': this.listQuery.limit,
                    }
                })
                    .then(response => {
                        this.list = response.data.data;
                        this.total = response.data.total;
                        this.listLoading = false
                    }).catch((err) => {
                    this.$notify({
                        title: 'Error',
                        type: 'error',
                        message: `Something went wrong`
                    });
                    console.log(err)
                });
            },
            deletePage() {
                axios.delete('/admin_api/v1/pages/' + this.deleteInfo.page_id)
                    .then(() => {
                            this.$notify({
                                title: 'Delete Page',
                                type: 'danger',
                                message: `Page ${this.deleteInfo.pagetitle} has been delete`
                            });
                            this.getList();
                        }
                    ).catch((error) => {
                    this.$notify({
                        title: 'Error',
                        type: 'error',
                        message: `Something went wrong`
                    });
                    console.log(error);
                });
                this.dialogVisible = false;
            },
            viewPage(id) {
                this.$router.push({
                    name: 'one_page',
                    params: {id}
                });
            },
            showConfirmDelete(data) {
                this.deleteInfo = data;
                this.dialogVisible = true;
            }
        },
        created() {
            this.listQuery.limit = preferenceKeeper.get(this.$options.name + '_page-limit');
            this.getList();
        },
    }
</script>

<style scoped>

</style>