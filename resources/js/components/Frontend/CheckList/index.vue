<template>
    <div class="container">
        <div class="content">
            <div class="checklist">
                <CheckListName></CheckListName>
                <ProgressBar></ProgressBar>
                <CheckListDescription></CheckListDescription>
                <div class="checklist__item-list">
                    <draggable v-model="inCompleteItems" group="incomplete" @start="drag=true" @end="drag=false"
                               handle=".handle" :sortable="false">
                        <transition-group name="list" >
                            <CheckItem v-for="item in inCompleteItems" @update="updateItem" @delete="deleteItem"
                                       :data="item" :key="item.timestamp_id"></CheckItem>
                        </transition-group>
                    </draggable>
                </div>

                <addNewItem v-if="canCreateItem"></addNewItem>

                <div class="checklist__item-list complete" v-if="completeItems.length > 0">
                    <Spoiler>
                        <draggable v-model="completeItems" group="complete" @start="drag=true" @end="drag=false"
                                   handle=".handle" :sortable="false">
                            <transition-group name="list" >
                                <CheckItemComplete @update="updateItem" @delete="deleteItem"
                                                   v-for="item in completeItems" :data="item" :key="item.timestamp_id + 'complete'">
                                </CheckItemComplete>
                            </transition-group>
                        </draggable>
                    </Spoiler>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import CheckItem from '../CheckItem'
    import CheckItemComplete from '../CheckItem/complete'
    import addNewItem  from '../AddNewItemButton'
    import Spoiler from '../Spoiler'
    import draggable from 'vuedraggable'
    import ProgressBar from '../ProgressBar'
    import CheckListDescription from '../CheckListDescription'
    import CheckListName from '../CheckListName'
    import { Base64 } from 'js-base64';

    export default {
        name: "CheckList",
        computed: {
            canCreateItem() {
                return this.$store.state.checkItem.canCreate;
            },
            completeItems: {
                get() {
                    return this.$store.getters.completeItems;
                },
                set(value) {
                    this.$store.dispatch('updateListOrder', value)
                }
            },
            inCompleteItems: {
                get() {
                    return this.$store.getters.inCompleteItems;
                },
                set(value) {
                    this.$store.dispatch('updateListOrder', value)
                }
            }
        },
        methods: {
            updateItem(data) {
                this.$store.dispatch('updateCheckItemField', data);
                if (data.update === true)  {
                    this.$store.dispatch('checkCheckListOnComplete', this.$store.getters.completePercent);
                }
            },
            deleteItem(id) {
                this.$store.dispatch('deleteCheckItem', id);
                this.$store.dispatch('checkCheckListOnComplete', this.$store.getters.completePercent);
            },
        },
        components: {
            CheckItem,
            CheckItemComplete,
            draggable,
            addNewItem,
            Spoiler,
            ProgressBar,
            CheckListDescription,
            CheckListName
        },
        created() {
            this.$store.dispatch('loadCheckList', this.$route.params.list_id)
        }
    }
</script>
