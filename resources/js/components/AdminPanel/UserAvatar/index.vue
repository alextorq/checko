<template>
    <el-dropdown class="right-menu-item" trigger="click">
        <div class="avatar-wrapper">
           <span>
               A
           </span>
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided>
                <span style="display:block;" @click="">Logout</span>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>