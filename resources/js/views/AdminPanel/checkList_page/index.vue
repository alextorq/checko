<template>
    <el-row
            v-loading="loading"
            element-loading-text="Loading..."
            element-loading-spinner="el-icon-loading">

        <el-col :span="24">
            <div class="checklist_page">

                <h2>{{list.name}}</h2>
                <div style="margin-bottom: 20px;">
                    <el-link :href="linkToList" target="_blank">To checklist
                        <i class="el-icon-view el-icon--right"></i>
                    </el-link>
                </div>


                <el-row :gutter="20" class="info-list">
                    <el-col :span="19">
                        <div class="info-item grid-content bg-purple">Create: {{list.created_at}}</div>
                        <div class="info-item grid-content bg-purple">Description: {{list.description}}</div>
                        <div class="info-item grid-content bg-purple">Modified: {{list.updated_at}}</div>
                    </el-col>
                    <el-col :span="1">
                        <div class="info-item">
                            <el-tag v-if="list.complete" type="success">Complete</el-tag>
                            <el-tag v-else type="warning">Incomplete</el-tag>
                        </div>
                    </el-col>
                </el-row>

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

                    <el-table-column label="Complete" width="180" sortable prop="complete">
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

            </div>
        </el-col>
    </el-row>
</template>

<script>
    import { Base64 } from 'js-base64';

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
        computed: {
          linkToList() {
              let hashCodeURI = '/t/' + Base64.encodeURI(this.id);
              return hashCodeURI
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
