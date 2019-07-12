<template>
    <ul class="settings-menu general-settings" >
    <li class="settings-menu__item">
        Language
    </li>

    </ul>
</template>

<script>
    export default {
        name: "General",
        methods: {
            updateSettings(payload) {
                this.$store.commit('updateSettings', payload)
            },
        },
        components: {

        }
    }
</script>
