<template>
    <el-submenu v-if="!item.hidden&&!item.name" :index="item.path">
        <template slot="title">
            <i class="fas" :class="item.meta.icon"></i>
            <span>{{item.meta.title}}</span>
        </template>
        <el-menu-item v-for="child in item.children" :index="child.name || child.path"
                    v-if="!child.hidden"  :key="child.path || child.name" :route="{name: child.name}">{{child.meta.title}}
        </el-menu-item>
    </el-submenu>

    <el-menu-item v-else :index="item.path || item.name" :route="{name: item.name}">
        <i class="fas" :class="item.meta.icon"></i>
        <span>{{item.meta.title}}</span>
    </el-menu-item>
</template>

<script>

    export default {
        name: "SidebarItem",
        props: {
            // route object
            item: {
                type: Object,
                required: true
            },
            isNest: {
                type: Boolean,
                default: false
            },
            basePath: {
                type: String,
                default: ''
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>