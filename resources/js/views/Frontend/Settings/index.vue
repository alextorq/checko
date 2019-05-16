<template>
    <div class="settings-layout">
        <SettingsMenu :open.sync="menuOpen"></SettingsMenu>
        <div class="settings-content__wrapper">
            <Breadcrump>
                <template v-slot:left>
                    <button @click="menuOpen = !menuOpen" class="menu-navigation-back">
                        <span class="arrow"></span>
                    </button>
                </template>
                <template v-slot:right>
                    <button @click="goToHome" class="settings-layout-close">
                        <span class="close-delete_2"></span>
                    </button>
                </template>
            </Breadcrump>

            <transition name="slide-left">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import SettingsMenu from '../../../components/Frontend/SettingsMenu'
    import Breadcrump from '../../../components/Frontend/Settings/Breadcrump'

    export default {
        name: "SettingsLayout",
        data() {
            return {
                menuOpen: false
            }
        },
        methods: {
          goToHome() {
              this.$router.push('/')
          }
        },
        components: {
            SettingsMenu,
            Breadcrump,
        },
    }
</script>
