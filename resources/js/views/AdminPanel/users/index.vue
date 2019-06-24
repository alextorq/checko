<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: "index",
        created() {
            console.log(this.$route);
        }
    }
</script>
