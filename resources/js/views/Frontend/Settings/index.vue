<template>
    <div class="settings-layout">
        <SettingsMenu></SettingsMenu>
        <div class="settings-content__wrapper">
            <transition name="slide-left">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import SettingsMenu from '../../../components/Frontend/SettingsMenu'

    export default {
        name: "SettingsLayout",
        components: {
            SettingsMenu
        }
    }
</script>
