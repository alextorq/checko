<template>
    <div class="settings-layout">
        <SettingsMenu :open.sync="menuOpen"></SettingsMenu>
        <div class="settings-content__wrapper">
            <Breadcrumbs>
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
            </Breadcrumbs>

            <transition name="slide-left">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import SettingsMenu from '../../../components/Frontend/SettingsMenu'
    import Breadcrumbs from '../../../components/Frontend/Settings/Breadcrumbs'

    export default {
        name: "SettingsLayout",
        data() {
            return {
                menuOpen: false
            }
        },
        methods: {
          goToHome() {
              let hashCodeURI = Base64.encode(this.$store.getters.checkListId);
              this.$router.push({name: 'CheckList', params: { list_id: hashCodeURI }});
          }
        },
        components: {
            SettingsMenu,
            Breadcrumbs,
        },
    }
</script>
