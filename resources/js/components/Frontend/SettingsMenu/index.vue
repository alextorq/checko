<template>
    <div class="settings-menu__wrapper" :class="menuOpenStatus">
        <ul class="settings-menu__list">
            <MenuItem v-for="route in settings_routers" @selectMenu="openMenu" :item="route" :key="route.name"></MenuItem>
        </ul>
        <button class="button" @click="openMenu">
            <span>Settings</span>
        </button>
    </div>
</template>

<script>
    import MenuItem from './MenuItem';

    export default {
        name: "SettingsMenu",
        data() {
          return {
              isMenuOpen: false
          }
        },
        computed: {
            settings_routers() {
                let parentRoute = this.$router.options.routes[0].children;
                let settingsRoute = parentRoute.find((item) => { return item.path === '/settings'});
                return settingsRoute.children
            },
            menuOpenStatus() {
              return {open: this.isMenuOpen}
            }
        },
        methods: {
          openMenu() {
              this.isMenuOpen = !this.isMenuOpen;
          }
        },
        components: {
            MenuItem
        }
    }
</script>
