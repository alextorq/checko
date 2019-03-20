<template>
    <div>
    <div class="bottom-fixed-button">
        <el-tooltip class="item" effect="dark" content="add ability" placement="top">
            <el-button type="primary" size="small" @click="isDialogOpen.status = !isDialogOpen.status"
                       icon="el-icon-circle-plus-outline" circle></el-button>
        </el-tooltip>
    </div>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row>
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
    </el-table>

    <createAbility :visible="isDialogOpen" @create_ability="loadAbilities"></createAbility>
    </div>
</template>

<script>
    import createAbility from '../Forms/CreateAbility';

    export default {
        name: "Availability",
        data() {
            return {
                listLoading: true,
                total: 10,
                isDialogOpen: {
                    status: false
                }
            }
        },
        computed: {
            list() {
                return this.$store.getters.availabilities;
            }
        },
        methods: {
            loadAbilities() {
                this.listLoading = true;
                this.$store.dispatch('getavailabilities').then(() => {
                    this.listLoading = false;
                }).catch((error) => {
                    console.log(error);
                    this.$notify({
                        title: 'Error',
                        type: 'error',
                        message: `Something went wrong`
                    });
                })
            }
        },
        components: {
            createAbility
        },
        created() {
            this.loadAbilities();
        }

    }
</script>

<style scoped>

</style>