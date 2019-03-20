<template>
    <div class="app-container" style="position: relative">
        <el-button type="success" size="small"
                   icon="el-icon-check" @click="returnUser" style="position: absolute; right: 0; z-index: 5;">
            OK</el-button>
        <el-tabs v-model="activeName">
            <el-tab-pane label="Users" name="first">
                <el-row class="filter_wrapper" type="flex">
                    <el-col :span="6">
                        <el-date-picker
                                v-model="filter.date"
                                type="daterange"
                                start-placeholder="Start Date"
                                end-placeholder="End Date"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd HH:mm:ss"
                                @change="filterDate"
                                :default-time="['00:00:00', '23:59:59']">
                        </el-date-picker>
                    </el-col>
                    <el-col :span="8">
                        <el-input placeholder="Search" v-model="search.query" :class="searchErrors" class="input-with-select" clearable
                                  @clear="getList">
                            <el-select v-model="search.type" class="search-type" slot="prepend" placeholder="Field">
                                <el-option label="Name" value="name"></el-option>
                                <el-option label="Email" value="email"></el-option>
                            </el-select>
                            <el-button slot="append" icon="el-icon-search" @click="searchField"></el-button>
                        </el-input>
                    </el-col>
                </el-row>
                <el-table v-loading="listLoading" max-height="650" stripe :data="filterUsers"
                          border fit highlight-current-row @selection-change="handleSelectionChange">
                        <el-table-column width="55" type="selection">
                        </el-table-column>

                        <el-table-column prop="user_id" align="left" label="ID" width="80"
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

                </el-table>
                <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
            </el-tab-pane>
            <el-tab-pane label="Selects" name="second">
                <el-table max-height="650" stripe :data="selectUsers"
                          border fit highlight-current-row @selection-change="selectUserUnselect">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>

                    <el-table-column prop="user_id" align="center" label="ID" width="80"
                                     :sortable="true"
                                     :sort-method="(a, b) => sortData(a, b, 'number')"
                                     :sort-orders="['ascending']">
                    </el-table-column>

                    <el-table-column  width="220px" prop="name" align="center" label="Name">
                    </el-table-column>

                    <el-table-column width="180px" prop="created_at" align="center" label="Date">
                    </el-table-column>

                    <el-table-column width="220px" prop="email" align="center" label="Email">
                    </el-table-column>

                    <el-table-column min-width="300px" label="Description">
                        <template slot-scope="scope">
                            <template v-if="scope.row.description">
                                {{scope.row.description}}
                            </template>
                            <span v-else>null</span>
                        </template>
                    </el-table-column>
                </el-table>

            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';
    import pagination from '../Pagination/pagination'
    import preferenceKeeper from '../../../utils/PreferenceKeeper';

    export default {
        name: 'SelectUsers',
        data() {
            return {
                list: [],
                total: 50,
                selectUsers: [],
                selectUsersId: [],
                listLoading: false,
                activeName: 'first',
                listQuery: {
                    page: 1,
                    limit: 5
                },
                filter: {
                    date: ''
                },
                search: {
                    type: '',
                    query: '',
                    errors: {
                        empty: false
                    }
                },
                dialogVisible: false,
                deleteUserInfo: {
                    id: '',
                    name: ''
                },
            }
        },
        computed: {
            ...mapGetters([
                'users',
            ]),
            filterUsers() {
                return this.list.filter((user) => {
                   return !this.selectUsersId.includes(user.user_id)
                });
            },
            searchErrors() {
                return this.search.errors;
            },
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
            handleSelectionChange(users) {
                users.forEach((user) => {
                    this.selectUsers.push(user);
                    this.selectUsersId.push(user.user_id);
                });
            },
            selectUserUnselect(users) {
                users.forEach((user) => {
                    let index = this.selectUsersId.indexOf(user.user_id);
                    this.selectUsers.splice(index, 1);
                    this.selectUsersId.splice(index, 1);
                });
            },
            getList() {
                this.listLoading = true;
                axios.get('/admin_api/v1/users/all',{
                    params: {
                        'page': this.listQuery.page,
                        'limit': this.listQuery.limit,
                        'startDate': this.filter.date ? this.filter.date[0] : '',
                        'endDate': this.filter.date ? this.filter.date[1] : '',
                        'searchType': this.search.type,
                        'searchQuery': this.search.query
                    }
                })
                    .then(response => {
                        this.list = response.data.data;
                        this.total = response.data.total;
                        this.listLoading = false
                    }).catch((err) => {
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
            filterDate() {
                this.getList();
            },
            returnUser(){
                this.callback(this.selectUsersId);
            }
        },
        props: {
            callback: Function
        },
        mount() {
            this.selectUsers = [];
        },
        // deactivated() {
        //     this.$destroy();
        // },
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
