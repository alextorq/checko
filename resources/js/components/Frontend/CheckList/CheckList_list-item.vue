<template>
    <li class="user-lists__item" :class="currentURL">
        <div class="user-lists__item-info" @click="changeCheckList">
            <div class="left-col">
              <span class="icon" :class="{complete: complete}">
                    <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 15.1 8.3" style="enable-background:new 0 0 15.1 8.3;" xml:space="preserve">
                    <polyline class="st0" points="1,1 8.3,7.3 14.1,1.6 "/>
                    </svg>
               </span>
            </div>

            <div class="flex-start">
                <div class="user-lists__item-title">
                    {{list.name || 'Таинственный лист'}}
                </div>
                <div class="user-lists__item-created_at date">
                    {{dateFormat}}
                </div>
            </div>

            <div class="complete percent-progress">
                {{completePercentView}}
            </div>
        </div>

        <div class="context-menu-wrapper" :class="contextMenuOpen">
            <button class="check-item__menu" :class="contextMenuOpen" ref="contextMenuButton" @click="openContextMenu" >
                <!--<span class="icon"></span>-->
                ...
            </button>
            <ul class="context-menu__list">
                <!--<li class="context-menu__item">attach</li>-->
                <!--<li class="context-menu__item" @click="">comments</li>-->
                <li class="context-menu__item" @click="deleteList">delete</li>
            </ul>
        </div>

    </li>
</template>

<script>

    function closeContextMenu(event) {
        let target = event.target;
        if (window._self.$refs['contextMenuButton'] !== target) {
            if(window._self.contextMenuOpenStatus) {
                window._self.contextMenuOpenStatus = false
            }
        }
        window._self.deleteHandler();
    }

    import moment from 'moment'
    import { Base64 } from 'js-base64';

    export default {
        name: "CheckList_list-item",
        data() {
          return {
              contextMenuOpenStatus: false
          }
        },
        computed: {
            dateFormat() {
                let formatDate = this.$store.getters.getDateFormatDefault.value;
                return moment(this.list.created_at).format(formatDate)
            },
            currentURL() {
                let currentListID = this.$route.params.list_id;
                let hashCodeURI = Base64.encodeURI(this.list.check_list_id);
                return {active: currentListID === hashCodeURI}
            },
            completePercentView() {
                let complete = this.list.check_items.filter((item) => item.complete).length;
                let allItems = this.list.check_items.length;
                if (this.$store.getters.settingProgressViewType === '%') {
                    if (!allItems) {
                        return '0%'
                    }
                    return Math.ceil(complete / (allItems / 100))  + '%';
                }
                else {
                    return `${complete}/${allItems}`
                }
            },
            contextMenuOpen() {
                return {'open': this.contextMenuOpenStatus}
            }
        },
        methods: {
            changeCheckList() {
                let currentListID = this.$route.params.list_id;
                if (currentListID === this.list.check_list_id) {
                  return
                }
                let items =this.$store.state.checkItem.checkItems;
                this.$store.commit('selectCheckList', {listID: this.list.check_list_id, items: items});
                this.$store.commit('initStateCheckItems',  JSON.parse(JSON.stringify(this.list.check_items)));

                let hashCodeURI = Base64.encodeURI(this.list.check_list_id);
                this.$router.push({name: 'CheckList', params: { list_id: hashCodeURI }});
            },

            openContextMenu(event) {
                if (!this.contextMenuOpenStatus) {
                    window._self = this;
                    event.stopPropagation();
                    document.addEventListener('click', closeContextMenu, {passive: true});
                }else {
                    this.deleteHandler();
                }
                this.contextMenuOpenStatus = !this.contextMenuOpenStatus
            },
            deleteHandler() {
                document.removeEventListener('click', closeContextMenu);
                window._self = null;
            },
            deleteList() {
                let hashCodeURI = Base64.decode(this.$route.params.list_id);
                if (hashCodeURI) {
                    hashCodeURI = +hashCodeURI;
                }
                this.$store.dispatch('checkListDelete', this.list.check_list_id).then(() => {
                    console.log(this.$route.params.list_id, this.list.check_list_id);
                    if (hashCodeURI === this.list.check_list_id) {
                        this.$store.commit('clearList');
                        this.$store.commit('clearItems');
                        this.$router.push('/');
                    }
                    this.$store.commit('deleteList', this.list.check_list_id);
                })
            }
        },
        props: {
            list: {
                type: Object,
                required: true
            },
            complete: {
                type: Boolean,
                required: false
            }
        },
        components: {

        }
    }
</script>
