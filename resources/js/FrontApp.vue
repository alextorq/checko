<template>
    <div id="app">
        <notifications position="top right" classes="my-style"/>
        <Header></Header>
    </div>
</template>

<script>

    import Header from './views/Frontend/Header'
    export default {
        name: "FrontApp",
        components: {
            Header
        }
    }
</script>
