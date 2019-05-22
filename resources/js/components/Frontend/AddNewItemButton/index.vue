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
                if (this.$store.getters.checkListIsCreate) {
                    this.$store.commit('addCheckItem', this.$store.getters.checkListId);
                } else {
                    this.$store.dispatch('createCheckList').then(() => {
                        this.$store.commit('addCheckItem', this.$store.getters.checkListId);
                    });
                }
            }
        }
    }
</script>
