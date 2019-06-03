<template>
    <div class="container">
        <div class="content">

            <AllList v-if="userLoginStatus"></AllList>

            <div class="checklist">

                <button class="button user-lists-title-phone" v-show="allListIsOpen"
                        v-if="userLoginStatus" @click="openAllList">
                    <span>My lists</span>
                    <div class="left-col">
                        <div class="arrow"></div>
                    </div>
                </button>


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
    import CheckItem from '../../../components/Frontend/CheckItem'
    import CheckItemComplete from '../../../components/Frontend/CheckItem/complete'
    import addNewItem  from '../../../components/Frontend/AddNewCheckItemButton'
    import Spoiler from '../../../components/Frontend/Spoiler'
    import draggable from 'vuedraggable'
    import ProgressBar from '../../../components/Frontend/ProgressBar'
    import CheckListDescription from '../../../components/Frontend/CheckListDescription'
    import CheckListName from '../../../components/Frontend/CheckListName'
    import AllList from '../../../components/Frontend/CheckList/CheckList_List'

    import EventBus from 'Core/helpers/eventBus'

    export default {
        name: "CheckList",
        data() {
          return {
              allListIsOpen: true
          }
        },
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
            openAllList() {

                EventBus.$emit('CheckList:openAllList');
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
            CheckListName,
            AllList
        },
        beforeRouteUpdate (to, from, next) {
            console.log(to, from);
            if (from.fullPath === '/') {
                next();
                return
            }

            next()
        },
        created() {
            this.$store.dispatch('loadCheckList', this.$route.params.list_id);
            EventBus.$on('CheckList:closeAllList', () => {this.allListIsOpen = !this.allListIsOpen;})
        }
    }
</script>
>