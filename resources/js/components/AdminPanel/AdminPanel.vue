<template>
    <el-container>
        <sidebar :isCollapse="menuOpen"></sidebar>
        <el-container>
            <el-header>
                <el-row type="flex" justify="start" align="middle">
                    <el-col :span="1">
                    <button @click="toggleMenu" class="toggle-menu-button" :class="{'is-active' : menuOpen}">
                        <svg
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30">
                            <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
                        </svg>
                    </button>
                    </el-col>
                    <el-col :span="15">
                        <breadcrums></breadcrums>
                    </el-col>
                    <el-col :span="1" class="avatar-container">
                        <userAvatar></userAvatar>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-row>
                    <div class="main-container">
                        <el-main class='main'>
                            <transition name="fade-transform" mode="out-in">
                                <keep-alive v-if="$route.meta.keepAlive">
                                    <router-view :key="key"></router-view>
                                </keep-alive>
                                <router-view v-else :key="key"></router-view>
                                <!--<keep-alive >-->
                                    <!--<router-view :key="key"></router-view>-->
                                <!--</keep-alive>-->
                            </transition>
                        </el-main>
                    </div>
                </el-row>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import sidebar from './Layout/Sidebar';
    import breadcrums from './Breadcrumbs/index'
    import userAvatar from './UserAvatar/index'

    export default {
        data: function () {
            return {
                menuOpen: false
            }
        },
        computed: {
            key() {
                return this.$route.fullPath;
            }
        },

        methods: {
            toggleMenu: function()  {
                this.menuOpen = !this.menuOpen;
            }
        },
        components: {
            sidebar,
            breadcrums,
            userAvatar
        }
    }
</script>
<style lang="sass">

</style>
