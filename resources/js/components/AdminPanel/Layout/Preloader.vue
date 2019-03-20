<template>
    <div class="loader" :class="{ loaded: load === true }">
        <div class="loader-inner">
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
                <div class="loader-line"></div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['isLoaded'],
        computed: {
            load() {
                return this.$store.getters.prerender;
            }
        }
    }
</script>

