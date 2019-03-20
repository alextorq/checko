<template>
    <div class="app-container">

        <el-row class="filter_wrapper" type="flex">
            <el-col :span="6">
                <el-date-picker
                        v-model="filter.date"
                        type="daterange"
                        start-placeholder="Start Date"
                        end-placeholder="End Date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        @change="getList"
                        :default-time="['00:00:00', '23:59:59']">
                </el-date-picker>
            </el-col>

            <el-col :span="8">
                <el-input placeholder="Search" v-model="search.query" :class="searchErrors" class="input-with-select"
                          clearable @clear="getList">
                    <el-select v-model="search.type" class="search-type" slot="prepend" placeholder="Field">
                        <el-option label="Name" value="name"></el-option>
                        <el-option label="Email" value="email"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search" @click="searchField"></el-button>
                </el-input>
            </el-col>
            <el-col :span="6" style="margin-left: 10px">
                <el-checkbox @change="getList" v-model="filter.trashed" label="Trashed" border ></el-checkbox>
            </el-col>
        </el-row>

        <el-table v-loading="listLoading" max-height="650" stripe :data="list"
          border fit highlight-current-row>

            <el-table-column prop="user_id" align="center" label="ID" width="80"
                             :sortable="true"
                            :sort-method="(a, b) => sortData(a, b, 'number')"
                            :sort-orders="['ascending']">
            </el-table-column>

            <el-table-column  width="220px" prop="name" align="left" label="Name">
            </el-table-column>

            <el-table-column width="180px" prop="created_at" align="center" label="Date">
            </el-table-column>

            <el-table-column width="220px" prop="email" align="left" label="Email">
            </el-table-column>

            <el-table-column min-width="300px" label="Description">
                <template slot-scope="scope">
                    <template v-if="scope.row.description">
                        {{scope.row.description}}
                    </template>
                    <span v-else>null</span>
                </template>
            </el-table-column>

            <el-table-column min-width="50px" align="center" label="Status">
                <template slot-scope="scope">
                    <template v-if="scope.row.deleted_at">
                        <el-tag type="danger">Deleted</el-tag>
                    </template>
                    <template v-else>
                        <el-tag type="success">OK</el-tag>
                    </template>
                </template>
            </el-table-column>

            <el-table-column align="left" label="Actions" width="auto">
                <template slot-scope="scope">
                    <el-button-group>
                        <el-tooltip class="item" effect="dark" content="more" placement="top">
                            <el-button type="primary" size="small" icon="el-icon-more"
                                       @click="viewUserPage(scope.row.user_id)"></el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="delete user" placement="top">
                            <el-button type="danger" size="small" icon="el-icon-delete"
                                       @click="showConfirmDelete(scope.row)"></el-button>
                        </el-tooltip>
                        <el-tooltip v-if="!!scope.row.deleted_at" class="item" effect="dark" content="restore user"
                                    placement="top">
                            <el-button type="success" size="small" icon="el-icon-refresh"
                                       @click="restoreUser(scope.row.user_id)"></el-button>
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
            <template v-if="deleteUserInfo.deleted_at">
                <span>Attention this procedure is non-cancellable. Do you want сontinue?</span>
            </template>
            <template v-else>
                <span>Do you really want to delete the user {{deleteUserInfo.name}}?</span>
            </template>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Нет</el-button>
                <el-button type="primary" @click="deleteUser">Да</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>

    import { mapGetters } from 'vuex';
    import pagination from '../Pagination/pagination'
    import preferenceKeeper from '../../../utils/PreferenceKeeper';

    export default {
        name: 'InlineEditTable',
        data() {
            return {
                list: [],
                total: 50,
                dialogPvVisible: false,
                listLoading: false,
                listQuery: {
                    page: 1,
                    limit: 5
                },
                filter: {
                  date: '',
                  trashed: false
                },
                search: {
                  type: '',
                  query: '',
                  errors: {
                      empty: false
                  }
                },
                dialogVisible: false,
                deleteUserInfo: {},
            }
        },
        computed: {
            ...mapGetters([
                'users',
            ]),
            searchErrors() {
                return this.search.errors;
            }
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
                axios.get('/admin_api/v1/users/all',{
                        params: {
                            'page': this.listQuery.page,
                            'limit': this.listQuery.limit,
                            'startDate': this.filter.date ? this.filter.date[0] : '',
                            'endDate': this.filter.date ? this.filter.date[1] : '',
                            'trash': this.filter.trashed,
                            'searchType': this.search.type,
                            'searchQuery': this.search.query
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

            searchField() {
                if (!this.search.type) {
                    this.search.errors.empty = true;
                    setTimeout(() => {
                        this.search.errors.empty = false;
                    }, 500);
                }else if (this.search.query) {
                    this.getList();
                }

            },
            sortData(a, b, value) {
                if (value === 'string') {
                    let collator = new Intl.Collator(undefined, {
                        sensitivity: "accent"
                    });
                     console.log(a, b, value);
                     return collator.compare(a, b);
                }
                return a[value] - b[value];
            },
            restoreUser(userId) {
                this.$store.dispatch('restoreUser', userId)
                    .then(() => {
                            this.$notify({
                                title: 'Delete User',
                                type: 'success',
                                message: `User ${this.deleteUserInfo.name} has been restored`
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
            },
            deleteUser() {
                this.$store.dispatch('deleteUser',
                    {id: this.deleteUserInfo.user_id, force: !!this.deleteUserInfo.deleted_at})
                .then(() => {
                    this.$notify({
                        title: 'Delete User',
                        type: 'danger',
                        message: `User ${this.deleteUserInfo.name} has been delete`
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
            viewUserPage(id) {
                this.$router.push({
                    name: 'user_page',
                    params: {id}
                });
            },
            showConfirmDelete(data) {
                this.deleteUserInfo = data;
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
    .search-type {
        width: 100px;

    }
    .empty .search-type{
        border: 1px solid #F46C6C;
        border-radius: 2px;
    }
    .filter_wrapper {
        text-align: left;
    }
    .edit-input {
        padding-right: 100px;
    }
    .cancel-btn {
        position: absolute;
        right: 15px;
        top: 10px;
    }
</style>
