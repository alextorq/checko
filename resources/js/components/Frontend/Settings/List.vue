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
                this.$store.commit('updateSettings', payload)
            },
        },
        components: {
            CheckBoxButton,
            AppSelect
        }
    }
</script>

<style scoped>
    .settings-menu__item {
        display: flex;
        width: 50%;
        margin-bottom: 40px;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

    }
    .settings-menu__item .settings-menu__item-caption {
        display: block;
        width: 100%;
        /*margin-top: 10px;*/
        color: #a4b5be;
        font-size: 12px;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0.08px;
    }
</style>