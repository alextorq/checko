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
        name: "AddCheckItem",
        methods: {
            addItem() {
                this.$store.dispatch('addCheckItem', this.$store.getters.checkListId);
                this.$store.dispatch('checkCheckListOnComplete', this.$store.getters.completePercent);
            }
        }
    }
</script>
