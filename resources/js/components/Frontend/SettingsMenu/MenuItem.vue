<template>
    <li class="settings-menu__item" :class="active">
        <router-link :to="{name: item.name}">{{item.meta.title}}</router-link>
    </li>
</template>

<script>
    export default {
        name: "item",
        computed: {
          active() {
              let currentPath = this.$route.name;
              let status = (currentPath === this.item.name);
              return {active: status}
          }
        },
        props: {
            item: {
                type: Object,
                required: true
            }
        }
    }
</script>

