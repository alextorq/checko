<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
                :default-active="getActiveLink"
                :collapse="isCollapse"
                background-color="transparent"
                text-color="#81869a"
                :show-timeout="200"
                mode="vertical"
                class="el-menu-vertical-demo"
                :router="true">
            <sidebarItem v-for="route in permission_routers" :key="route.path + '_parent'" :item="route"></sidebarItem>
        </el-menu>
    </el-scrollbar>
</template>

<script>

    import sidebarItem from './SidebarItem'
    export default {

        data: function() {
            return {
            }
        },

        computed: {
            getActiveLink() {
                console.log(this.$route);
                return  this.$route.name || this.$route.path;
            },
            permission_routers() {
                return this.$router.options.routes[0].children
            }
        },
        components : {sidebarItem},

        created() {

        },
        props: {
            isCollapse: {
                type: Boolean
            }
        }
    }
</script>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 300px;
        /*min-height: 400%;*/
    }
    .scrollbar-wrapper {
        height: 100%;
        min-height: 100vh;
    }
    .el-scrollbar__view {
        height: 100%;
    }
    .el-scrollbar__view > ul{
        height: 100%;
    }
</style>
