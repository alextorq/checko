<template>
    <ul class="settings-menu general-settings" >
        <li class="settings-menu__item">
            Date format
            <AppSelect :list="settingsDateFormat" :default_value="settingsDateFormatDefault"
                       @change="updateSettings" name="dateFormat"></AppSelect>
        </li>
        <li class="settings-menu__item">
            Progress display
            <AppSelect :list="getProgressDisplay" name="progressDisplay"
                       :default_value="settingsProgressDisplayDefault"
                       @change="updateSettings">
            </AppSelect>
        </li>
        <li class="settings-menu__item">
            Add new items to the end of the list
            <CheckBoxButton @update="updateSettings" :default_value="getOrderCreateSettingDefault" name="addToEndList">
            </CheckBoxButton>
        </li>


        <li class="settings-menu__item">
            Private lists (access by e-mail)
            <CheckBoxButton @update="updateSettings" :default_value="getOrderCreateSettingDefault" name="addToEndList">
            </CheckBoxButton>
            <span class="settings-menu__item-caption">Non-privatized list can be viewed by anyone who has a link to projects</span>
        </li>

    </ul>
</template>

<script>
    import CheckBoxButton from '../ChekBoxButton'
    import AppSelect from '../Select'

    export default {
        name: "List",
        computed: {
            settingsDateFormat() {
                return this.$store.getters.getDateFormat
            },
            settingsDateFormatDefault() {
                return this.$store.getters.getDateFormatDefault;
            },
            getProgressDisplay() {
                return this.$store.getters.getProgressDisplay
            },
            settingsProgressDisplayDefault() {
                return this.$store.getters.getProgressDisplayDefault;
            },
            getNewListForComplete() {
                return  this.$store.getters.getNewListForComplete;
            },
            getOrderCreateSettingDefault() {
                return this.$store.getters.getOrderCreateSetting;
            },
        },
        methods: {
            updateSettings(payload) {
                this.$store.dispatch('updateSettings', payload)
            },
        },
        components: {
            CheckBoxButton,
            AppSelect
        }
    }
</script>
