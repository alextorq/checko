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
                    vm.info = responce.data;
                })
            })
        },

        beforeRouteUpdate (to, from, next) {
            axios.post('/frontend/pages/' + to.params.page).then((responce) => {
                this.info = responce.data;
                setTimeout(() => {
                    let top = document.querySelector('.default-content');
                    if (top)  {
                        top.scrollIntoView({
                            behavior: "smooth",
                            block:    "start"
                        });
                    }
                }, 50)
            });
            next();
        },

    }
</script>
