<template>
    <div class="text-default">
        <div class="container">
            <div class="default-content">
                <h1>{{info.pagetitle}}</h1>
                <div v-html="info.content"></div>
            </div>
        </div>

        <copyright v-once></copyright>
    </div>
</template>

<script>
    import copyright from '../../../components/Frontend/Copyright'

    export default {
        name: "index",
        data() {
            return {
                info: {}
            }
        },
        components: {
            copyright
        },
        props: ['page'],
        beforeRouteEnter (to, from, next) {
            next(vm => {
                axios.post('/frontend/pages/' + vm.page).then((responce) => {
                    vm.info = Object.freeze(responce.data);
                    document.title = responce.data.pagetitle;
                })
            })
        },

        beforeRouteUpdate (to, from, next) {
            axios.post('/frontend/pages/' + to.params.page).then((responce) => {
                this.info = Object.freeze(responce.data);
                document.title = responce.data.pagetitle;
                setTimeout(() => {
                    window.scrollTo({
                        top: 0,
                        left: 100,
                        behavior: 'smooth'
                    });
                }, 20)
            });
            next();
        },

    }
</script>
