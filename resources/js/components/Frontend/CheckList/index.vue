<template>
    <div class="checklist">
        <div class="checklist__name-wrapper" :class="{'complete': completeDone}">
            <div class="left-col">
                <span class="icon">
                    <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 15.1 8.3" style="enable-background:new 0 0 15.1 8.3;" xml:space="preserve">
                    <polyline class="st0" points="1,1 8.3,7.3 14.1,1.6 "/>
                    </svg>
               </span>
            </div>

            <input class="checklist__name" type="text" v-model="checkList.name" @blur="">
        </div>
        <ProgressBar :percent="completePercent" :complete_type="completePercentView"></ProgressBar>

        <div class="checklist__description-wrapper" :class="descriptionEditClass"
             @click="changeDescription">
            <div v-html="getDescriptionMarkdownRender" class="checklist__description-markdown"></div>
            <textarea @blur="checkListDescriptionEditStatus = !checkListDescriptionEditStatus" ref="description"
                      class="checklist__description" @keyup="rowLength" :style="{ 'min-height': checkListDescriptionAmountRow + 'px' }"
                      v-model="checkList.description"></textarea>
        </div>

        <div class="checklist__item-list">

                <draggable v-model="inCompleteItems" group="people" @start="drag=true" @end="drag=false">
                    <transition-group name="list" >
                    <CheckItem v-for="item in inCompleteItems" @update="updateCheckItem" @delete="deleteItem"
                               :data="item" :key="item.timestamp_id"></CheckItem>
                    </transition-group>
                </draggable>



        </div>

        <button class="checklist__add-new-item" @click="addNewItem">
            <span class="left-col">
                <span class="icon"></span>
            </span>
            New item
        </button>

        <div class="checklist__item-list complete" v-if="completeItems.length > 0">
            <span class="checklist__description">
                Completed
            </span>
            <draggable v-model="completeItems" group="people" @start="drag=true" @end="drag=false">
                <transition-group name="list" >
                    <CheckItemComplete @update="updateCheckItem" @delete="deleteItem"
                                       v-for="item in completeItems" :data="item" :key="item.timestamp_id + 'complete'">
                    </CheckItemComplete>
                </transition-group>
            </draggable>
        </div>

    </div>
</template>

<script>
    import CheckItem from '../CheckItem'
    import CheckItemComplete from '../CheckItem/complete'
    import ProgressBar from '../ProgressBar'

    import  marked from 'marked'
    import draggable from 'vuedraggable'

    export default {
        name: "index",
        data() {
          return {
              checkList: {
                  name: 'Сhecklist name',
                  description: '## Description',
                  complete: false,
                  id: null
              },
              checkListDescriptionEditStatus: false,
              checkListDescriptionAmountRow: 5,
          }
        },
        computed: {
            getDescriptionMarkdownRender() {
                return marked(this.checkList.description, { sanitize: true });
            },
            completeItems() {
                return this.$store.getters.completeItems;
            },
            inCompleteItems: {
                get() {
                    return this.$store.getters.inCompleteItems;
                },
                // set(value) {
                //     this.$store.commit('updateList', value)
                // }
            },
            completeDone() {
                return this.$store.getters.completeDone;
            },
            completePercent() {
                return this.$store.getters.completePercent;
            },
            completePercentView() {
                let config = this.$store.getters.completeViewProgress;
                if (this.$store.getters.settingProgressViewType === '%') {
                    return this.$store.getters.completePercent + '%';
                }
                else {
                    return `${config.complete}/${config.all}`
                }
            },
            descriptionEditClass() {
              return {
                  edit: this.checkListDescriptionEditStatus
              }
            },
        },
        methods: {
            rowLength(event) {
                let rowLength = event.target.value.split(/\r\n|\r|\n/);
                this.checkListDescriptionAmountRow = rowLength.length * 30;
            },
            updateCheckItem(data) {
                this.$store.dispatch('editCheckItem', data);
            },
            addNewItem() {
                if (!this.$store.getters.checkListId) {
                    this.$store.dispatch('createCheckList').then(() => {
                        this.$store.dispatch('addNewItem', this.$store.getters.checkListId);
                    });
                }else {
                    this.$store.dispatch('addNewItem', this.$store.getters.checkListId);
                }
            },
            deleteItem(id) {
                this.$store.dispatch('deleteCheckItem', id);
            },
            changeDescription(event) {
                if (event.target.closest('.checklist__description-markdown')) {
                    this.checkListDescriptionEditStatus = !this.checkListDescriptionEditStatus;
                    if (this.checkListDescriptionEditStatus) {
                        setTimeout(() => {
                            this.$refs.description.focus()
                        }, 100)
                    }
                }
            }
        },
        components: {
            CheckItem,
            ProgressBar,
            CheckItemComplete,
            draggable
        },
        created() {
            // this.checkListItems.sort((a, b) => {
            //     return a.order - b.order;
            // });
        }
    }
</script>
