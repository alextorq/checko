<template>
    <div class="wrapper-user-lists scrolled" :class="openClass">
        <button class="button" @click="open" v-show="!openStatus">
            <span>My lists</span>
            <div class="arrow"></div>
        </button>

        <div class="user-lists-title-wrapper">
            <h2 class="user-lists-title" @click="open">
                <div class="left-col">
                    <div class="arrow"></div>
                </div>
                My lists
            </h2>
            <div class="sort-lists">
                <AppSelect :list="sortOptions" name="sortLists"
                           :default_value="sortOptions[1]"
                           @change="sort">
                </AppSelect>
            </div>
        </div>

        <ul class="user-lists">
            <list v-for="list in unCompleteLists" :list="list" :key="list.check_list_id"></list>
        </ul>

        <Spoiler>
            <ul class="user-lists done">
                <list v-for="list in completeLists" :complete="true" :list="list" :key="list.check_list_id"></list>
            </ul>
        </Spoiler>

    </div>
</template>

<script>
    import list from './CheckList_list-item';
    import Spoiler from '../Spoiler'
    import AppSelect from '../Select'
    import EventBus from 'Core/helpers/eventBus'

    export default {
        name: "CheckList_List",
        data() {
          return {
              openStatus: true,
              sortOptions: [
                  {name: 'first new', value: {function_sort: 'sortByDate', direction: 'ASC'}},
                  {name: 'last new', value: {function_sort: 'sortByDate', direction: 'DESC'}},
                  {name: 'complete up', value: {function_sort: 'sortByComplete', direction: 'ASC'}},
                  {name: 'complete down', value: {function_sort: 'sortByComplete', direction: 'DESC'}},
                  {name: 'modified up', value: {function_sort: 'sortByModified', direction: 'ASC'}},
                  {name: 'modified down', value: {function_sort: 'sortByModified', direction: 'DESC'}},
              ]
          }
        },
        components: {
            list,
            AppSelect,
            Spoiler
        },
        computed: {
            completeLists() {
                return this.$store.getters.completeLists;
            },
            unCompleteLists() {
                return this.$store.getters.unCompleteLists;
            },
            openClass() {
              return {open: this.openStatus}
            }
        },
        methods: {
            open() {
                this.openStatus = !this.openStatus
            },
            sort(payload) {
                this.$store.commit('sortListsBy', payload.value)
            }
        },
        created() {
            this.$store.dispatch('allCheckList');
            EventBus.$on('CheckList:openAllList', () => {this.open()})
        },
    }
</script>
>