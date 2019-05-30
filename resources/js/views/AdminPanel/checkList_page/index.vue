<template>
    <el-row
            v-loading="loading"
            element-loading-text="Loading..."
            element-loading-spinner="el-icon-loading">


        <el-col :span="24">
            <div class="checklist_page">
                <el-row>
                    <h2>{{list.name}}</h2>
                </el-row>

                <div>{{list.complete}}</div>
                <div>Create: {{list.created_at}}</div>
                <div>Description: {{list.description}}</div>
                <div>Modified: {{list.updated_at}}</div>

                <h2>CheckItems</h2>
                <el-table
                        :data="list.check_items"
                        style="width: 100%">
                    :default-sort = "{prop: 'check_item_id', order: 'descending'}"
                    <el-table-column
                            prop="check_item_id"
                            label="id"
                            sortable
                            width="100">
                    </el-table-column>

                    <el-table-column
                            prop="name"
                            label="Name"
                            width="180">
                    </el-table-column>

                    <el-table-column
                            prop="description"
                            label="Description"
                            width="180">
                    </el-table-column>

                    <el-table-column
                            prop="created_at"
                            label="created"
                            sortable
                            width="180">
                    </el-table-column>

                    <el-table-column
                            prop="updated_at"
                            label="updated"
                            sortable
                            width="180">
                    </el-table-column>


                    <el-table-column
                            prop="date_complete"
                            label="date of complete"
                            sortable
                            width="180">
                    </el-table-column>

                    <el-table-column label="Complete"  sortable prop="complete">
                        <template slot-scope="scope">
                            <el-switch
                                    style="display: block; margin-bottom: 5px"
                                    v-model="scope.row.complete"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    active-text="Complete"
                                    inactive-text="Incomplete">
                            </el-switch>
                        </template>
                    </el-table-column>

                </el-table>

                <!--<el-tabs v-model="activeTab">-->
                    <!--<el-tab-pane label="Info" name="first">-->
                        <!--<p>Активность: {{user.active}}</p>-->
                        <!--<el-row type="flex" align="middle">-->
                            <!--<el-col :span="1">Создан:</el-col>-->
                            <!--<el-col :span="5">-->
                                <!--<el-date-picker-->
                                        <!--v-model="user.created_at"-->
                                        <!--type="datetime"-->
                                        <!--placeholder="Select date and time">-->
                                <!--</el-date-picker>-->
                            <!--</el-col>-->
                        <!--</el-row>-->

                        <!--<el-row type="flex" align="middle">-->
                            <!--<el-col :span="1">Email:</el-col>-->
                            <!--<el-col :span="5">-->
                                <!--<el-input placeholder="Please input" v-model="user.email"></el-input>-->
                            <!--</el-col>-->
                        <!--</el-row>-->

                    <!--</el-tab-pane>-->

                    <!--<el-tab-pane label="Pay History" name="second">Pay History</el-tab-pane>-->

                <!--</el-tabs>-->
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                list: '',
                activeTab: 'first',
                loading: true
            }
        },
        methods: {
            save() {

            }
        },
        created() {
            this.$store.dispatch('checkListGetOne', this.id).then((data) => {
                console.log(data);
                this.list = data;
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

<style scoped>

</style>