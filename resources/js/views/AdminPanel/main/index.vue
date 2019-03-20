<template>
    <div>
        <el-row class="last-user__wrapper" type="flex" justify="space-between" align="top">
            <el-col :span="11">
                <lastRegistrationUsers></lastRegistrationUsers>
            </el-col>
            <el-col :span="12" v-loading="loading">
                <lastRegistrationUsersChart @load="loading = !loading"></lastRegistrationUsersChart>
            </el-col>
        </el-row>
        <el-row class="last-user__wrapper">

        </el-row>
    </div>
</template>

<script>

    import lastRegistrationUsers from '../../../components/AdminPanel/Table/last-registration-uers'
    import lastRegistrationUsersChart from '../../../components/AdminPanel/Grafic/UserRegistration'

    export default {
        name: "index",
        data() {
            return {
                loading: true
            }
        },
        components: {
            lastRegistrationUsers,
            lastRegistrationUsersChart
        }

    }
</script>

<style scoped>
    .last-user__wrapper {
        color: white;

    }
    .last-user__wrapper > div {
        background: #fff;
        padding: 10px;
    }
    .last-user__list {
        display: flex;
        flex-direction: column;
    }
</style>