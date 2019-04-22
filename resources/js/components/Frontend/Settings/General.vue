<template>
    <ul class="settings-menu general-settings" >
    <li class="settings-menu__item">
        Language
    </li>

    </ul>
</template>

<script>
    import CheckBoxButton from '../ChekBoxButton'
    import AppSelect from '../Select'

    export default {
        name: "General",
        computed: {

        },
        methods: {
            updateSettings(payload) {
                this.$store.commit('updateSettings', payload)
            },
        },
        components: {
            CheckBoxButton,
            AppSelect
        }
    }
</script>
