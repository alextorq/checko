<template>
    <button class="checklist__add-new-item" @click="addItem">
            <span class="left-col">
                <span class="icon"></span>
            </span>
        New item
    </button>
</template>

<script>
    export default {
        name: "Add CheckItem",
        methods: {
            addItem() {
                this.$store.dispatch('addCheckItem', this.$store.getters.checkListId);
            }
        }
    }
</script>
