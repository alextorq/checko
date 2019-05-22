<template>
    <div class="container">
        <div class="content">

            <AllList v-if="userLoginStatus"></AllList>

            <div class="checklist">
                <CheckListName></CheckListName>
                <ProgressBar></ProgressBar>
                <CheckListDescription></CheckListDescription>
                <div class="checklist__item-list">
                    <draggable v-model="inCompleteItems" group="incomplete" @start="drag=true" @end="drag=false"
                               handle=".handle" :sortable="false">
                        <transition-group name="list" >
                            <CheckItem v-for="item in inCompleteItems"
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
                                <CheckItemComplete
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
    import AllList from  './CheckList_List'

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
            },
            userLoginStatus() {
                return this.$store.getters.userLoginStatus;
            }
        },
        methods: {

        },
        components: {
            CheckItem,
            CheckItemComplete,
            draggable,
            addNewItem,
            Spoiler,
            ProgressBar,
            CheckListDescription,
            CheckListName,
            AllList
        },
        created() {
            this.$store.dispatch('loadCheckList', this.$route.params.list_id);
        }
    }
</script>
>