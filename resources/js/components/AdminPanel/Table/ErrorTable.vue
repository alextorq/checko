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
                        <el-option label="Browser" value="browser"></el-option>
                        <el-option label="uri" value="uri"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search" @click="searchField"></el-button>
                </el-input>
            </el-col>
        </el-row>

        <el-table v-loading="listLoading"  stripe :data="list"
                  border fit highlight-current-row>

            <el-table-column prop="error_id" align="center" label="ID" width="80"
                             :sortable="true"
                             :sort-method="(a, b) => sortData(a, b, 'number')"
                             :sort-orders="['ascending']">
            </el-table-column>

            <el-table-column  width="220px" prop="uri" align="left" label="uri/ip">
                <template slot-scope="scope">
                    <p><a class="error-link" target="_blank" :href="scope.row.uri">{{scope.row.uri}}</a></p>
                    <b>{{scope.row.ip}}</b>
                </template>
            </el-table-column>

            <el-table-column width="120px" prop="browser" align="center" label="browser">
                <template slot-scope="scope">
                    <img class="browser-icon" :src="iconPath(scope.row.browser)"
                         :title="scope.row.browser"
                         :alt="scope.row.browser">
                </template>
            </el-table-column>

            <el-table-column width="180px" prop="created_at" align="center" label="Date">
            </el-table-column>

            <el-table-column width="100px" prop="type" align="center" label="Type">
                <template slot-scope="scope">
                    <el-tag>{{scope.row.type}}</el-tag>
                </template>
            </el-table-column>

            <el-table-column min-width="300px" label="Details">
                <template slot-scope="scope">
                    <JsonViewer
                            boxed
                            :expand-depth="0"
                            :value="JSON.parse(scope.row.details)">
                    </JsonViewer>
                </template>
            </el-table-column>


            <el-table-column align="left" label="Actions" width="auto">
                <template slot-scope="scope">
                    <el-button-group>
                        <el-button type="primary" size="small" icon="el-icon-more"
                                   @click="openInfo(scope.row.details)"></el-button>
                        <el-tooltip class="item" effect="dark" content="delete" placement="top">
                            <el-button type="danger" size="small" icon="el-icon-delete"
                                       @click="deleteError(scope.row.error_id)"></el-button>
                        </el-tooltip>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>
        <pagination v-show="total>0" :total="total" :page.sync="listQuery.page"
                    :limit.sync="listQuery.limit" @pagination="getList" />


        <el-dialog
                title="Info"
                :visible.sync="dialogVisible"
                width="70%">
            <template>
                <JsonViewer
                        class="left"
                        :expand-depth="3"
                        :value="errorMore">
                </JsonViewer>
            </template>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Close</el-button>
            </span>
        </el-dialog>



    </div>
</template>

<script>

    import { mapGetters } from 'vuex';
    import pagination from '../Pagination/pagination'
    import preferenceKeeper from '../../../utils/PreferenceKeeper';
    import JsonViewer from 'vue-json-viewer';

    export default {
        name: 'ErrorTable',
        data() {
            return {
                list: [],
                total: 50,
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
                errorMore: {},
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
            pagination,
            JsonViewer
        },
        watch:{
            'listQuery.limit': function (newVal, oldVal){
                preferenceKeeper.save(this.$options.name + '_page-limit', newVal);
            }
        },
        methods: {
            getList() {
                this.listLoading = true;
                axios.get('/admin_api/v1/errors/all',{
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
                    this.$notify({
                        title: 'Error',
                        type: 'error',
                        message: `Something went wrong`
                    });
                    console.log(err)
                });
            },
            iconPath(browser) {
                browser = browser.toLowerCase();
                if (browser.split(' ').length > 1) {
                    browser = browser.split(' ').join('')
                }
                return '/images/browsers/' + browser + '.png'
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
            deleteError(id) {
                axios.delete('/admin_api/v1/errors/' + id)
                    .then(response => {
                        this.$notify({
                            title: 'Error',
                            type: 'success',
                            message: `Error was delete`
                        });
                    }).catch((err) => {
                        this.$notify({
                            title: 'Error',
                            type: 'error',
                            message: `Something went wrong`
                        });
                    console.log(err)
                }).finally(() => {this.getList()})
            },

            openInfo(data) {
                this.dialogVisible = true;
                this.errorMore =  JSON.parse(data);
            },
        },
        created() {
            this.listQuery.limit = preferenceKeeper.get(this.$options.name + '_page-limit');
            this.getList();
        },
    }
</script>

<style scoped>

    .left {
        text-align: left;
    }
    .search-type {
        width: 100px;

    }

    .browser-icon {
        width: 60px;
    }
    .error-link {
        color: inherit;
        text-transform: none;
        text-decoration: none;
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
