<template>

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

        <addNewItem></addNewItem>

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

    export default {
        name: "CheckList",
        data() {
          return {}
        },
        computed: {
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
            },
            deleteItem(id) {
                this.$store.dispatch('deleteCheckItem', id);
            },
            checkCheckList() {
                if (!this.$store.getters.checkListId) {
                    axios
                        .post(document.location.pathname)
                        .then(response => {
                            this.$store.commit('initStateCheckItems', response.data.check_items);
                            this.$store.commit('initStateCheckList', response.data);
                        }).catch((err) => {
                            console.log(err)
                    });
                }
            }
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
            this.checkCheckList();
        }
    }
</script>
