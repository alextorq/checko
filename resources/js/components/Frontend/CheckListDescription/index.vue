<template>
    <div class="checklist__description-wrapper" :class="descriptionEditClass"
         @click="changeDescription">
        <div v-html="getDescriptionMarkdownRender" class="checklist__description-markdown"></div>
        <textarea @change="updateDescription" @blur="checkListDescriptionEditStatus = !checkListDescriptionEditStatus"
                  ref="description"
                  class="checklist__description" @keyup="rowLength"
                  :style="{ 'min-height': checkListDescriptionAmountRow + 'px' }"
                  v-model.trim="description"></textarea>
    </div>
</template>

<script>
    import  marked from 'marked'

    export default {
        name: "CheckListDescription",
        data() {
            return {
                checkListDescriptionEditStatus: false,
                checkListDescriptionAmountRow: 5,
            }
        },
        computed: {
            getDescriptionMarkdownRender() {
                return marked(this.$store.state.checkList.list.description, { sanitize: true });
            },
            descriptionEditClass() {
                return {
                    edit: this.checkListDescriptionEditStatus
                }
            },
            description: {
                get() {
                    return this.$store.state.checkList.list.description;
                },
                set(value) {
                    this.$store.commit('updateCheckListField', {
                        field: 'description',
                        value: value
                    });
                }
            },
        },
        methods: {
            rowLength(event) {
                let rowLength = event.target.value.split(/\r\n|\r|\n/);
                this.checkListDescriptionAmountRow = rowLength.length * 30;
            },
            updateDescription() {
                this.checkListDescriptionEditStatus = !this.checkListDescriptionEditStatus;
                this.$store.dispatch('updateCheckListField');
            },
            changeDescription(event) {
                if (event.target.closest('.checklist__description-markdown')) {
                    this.checkListDescriptionEditStatus = !this.checkListDescriptionEditStatus;
                    if (this.checkListDescriptionEditStatus) {
                        this.$nextTick(() => {
                            this.$refs.description.focus();
                        });
                    }
                }
            }
        },
    }
</script>

