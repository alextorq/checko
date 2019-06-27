<template>
    <main class="main">
        <div class="container">
            <h1>{{info.pagetitle}}</h1>
            <div v-html="info.content"></div>
        </div>
    </main>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                info: {}
            }
        },
        props: ['page'],
        beforeRouteEnter (to, from, next) {
            next(vm => {
                axios.post('/frontend/pages/' + vm.page).then((responce) => {
                    vm.info = responce.data;
                })
            })
        }
    }
</script>
