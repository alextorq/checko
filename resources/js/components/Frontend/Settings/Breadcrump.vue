<template>
    <div class="breadcrumb-wrapper">
        <slot name="left"></slot>
        <span class="route-path">{{path}}</span>
        <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
        name: "Breadcrump",
        computed: {
            path() {
                return this.$route.meta.title;
            }
        }
    }
</script>
