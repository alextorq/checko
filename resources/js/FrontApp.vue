<template>
        <router-view></router-view>
</template>

<script>
    export default {
        name: "FrontApp",
        created() {
            this.$store.commit('loadSettings');
            this.$store.dispatch('getUser');
        }
    }
</script>
