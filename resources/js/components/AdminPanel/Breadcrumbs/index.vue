<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">

            <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
                <a @click.prevent="handleLink(item)">{{item.meta.title}}</a>
            </el-breadcrumb-item>

        </transition-group>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                levelList: null
            }
        },
        watch: {
          $route() {
              this.getBreadcrumb();
          }
        },
        created() {
          this.getBreadcrumb();
        },
        methods: {
            getBreadcrumb() {
                this.levelList = this.$route.matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb);
            },

            handleLink(item) {
                const { path } = item;
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>

</style>