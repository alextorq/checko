<template>
    <div id="app">
        <notifications position="top right" classes="my-style"/>
        <Header></Header>
        <main>
            <div class="container">
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import Header from '../Header'

    export default {
        name: "Layout",
        components: {
            Header,
        },
        created() {
            this.$store.commit('loadSettings');
        }

    }

</script>

