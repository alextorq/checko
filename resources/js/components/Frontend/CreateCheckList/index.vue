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
        name: "ButtonCreateCheckList",
        methods: {
            addItem() {
                this.$store.commit('clearItems');

                this.$store.dispatch('createCheckList').then(() => {
                    this.$store.dispatch('addCheckItem', this.$store.getters.checkListId);
                });
            }
        }
    }
</script>
