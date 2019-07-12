<template>
    <div class="wrapper-user-lists scrolled" :class="openClass">
        <div class="wrapper-user-list-content">
            <div class="user-lists-title-wrapper">
                <h2 class="user-lists-title" @click="close">
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

            <Spoiler v-if="completeLists.length > 0">
                <ul class="user-lists done">
                    <list v-for="list in completeLists" :complete="true" :list="list" :key="list.check_list_id"></list>
                </ul>
            </Spoiler>
        </div>
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
              openStatus: false,
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
            close() {
                this.openStatus = false;
                EventBus.$emit('CheckList:showButton')
            },
            sort(payload) {
                this.$store.commit('sortListsBy', payload.value)
            }
        },
        created() {
            this.$store.dispatch('allCheckList');
            EventBus.$on('CheckList:openAllList', () => {this.openStatus = true;})
        },
    }
</script>