<template>
    <div class="settings-menu__wrapper">
        <ul class="settings-menu__list">
            <MenuItem v-for="route in settings_routers" :item="route" :key="route.name"></MenuItem>
        </ul>
    </div>
</template>

<script>
    import MenuItem from './MenuItem';

    export default {
        name: "SettingsMenu",
        computed: {
            settings_routers() {
                let parentRoute = this.$router.options.routes[0].children;
                let settingsRoute = parentRoute.find((item) => { return item.path === '/settings'});
                return settingsRoute.children
            }
        },
        components: {
            MenuItem
        }
    }
</script>
