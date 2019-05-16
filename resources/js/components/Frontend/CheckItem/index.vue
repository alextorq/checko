<template>
    <div class="check-item">
        <div class="handle"></div>
        <div class="left-col">
            <label class="check-item__label">
                <input v-model="cache.complete" type="checkbox" @change="updateWithDate('complete')">
                <span class="checkbox-svg-wrapper"></span>
            </label>
        </div>
        <div class="check-item__name-wrapper" :class="editClass" v-focus="data.check_item_id"
             @click="changeClass">
            <div class="check-item__name-parse" v-html="parse"></div>
            <textarea wrap="hard" v-autosize="cache.name" class="check-item__name" rows="1" v-model.trim="cache.name"
                      cols="20" @change="update('name')" ref="item" @blur="onBluer" :placeholder="placeholder"
                      @keydown.enter="createNewItem"  @keyup.esc="onBluer(); update('name');"
                   ></textarea>
        </div>
        <div class="context-menu-wrapper" :class="contextMenuOpen">
            <button class="check-item__menu" :class="contextMenuOpen" ref="contextMenuButton" @click="openContextMenu" >
                <!--<span class="icon"></span>-->
                ...
            </button>
            <ul class="context-menu__list">
                <li class="context-menu__item">attach</li>
                <li class="context-menu__item" @click="openCommentMenu">comments</li>
                <li class="context-menu__item" @click="deleteItemEvent">delete</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {checkItem} from 'Core/helpers/defaultValue'

    function closeContextMenu(event) {
        let target = event.target;
        if (window._self.$refs['contextMenuButton'] !== target) {
            if(window._self.contextMenuOpenStatus) {
                window._self.contextMenuOpenStatus = false
            }
        }
        window._self.deleteHandler();
    }
    
    export default {
        name: "completeItem",
        data() {
            return {
                cache: {
                    name: null
                },
                placeholder: checkItem.name,
                editStatus: false,
                height: 10,
                contextMenuOpenStatus: false
            }
        },
        directives: {
            focus: {
                inserted: function (el, binding, vnode) {
                    if (!binding.value) {
                        vnode.context.newItemFocus();
                    }
                }
            }
        },
        computed: {
            canCreateItem() {
                return this.$store.state.checkItem.canCreate;
            },
            editClass() {
                return {
                    edit: this.editStatus
                }
            },
          parse() {
                let str = this.cache.name || this.placeholder;
                let refBr = str.match(/\r\n|\r|\n/g);
                for (let key in refBr) {
                  str = str.replace(refBr[key],'<br/>')
                }
                // let regA = str.match(/http\:\/\/[\w\-\.\/]+/);
                let regA = str.match(/(http|https|ftp):\/\/[\w\-.\/]+/gim);
                if (regA) {
                    for (let key in Array.from(regA)) {
                        str = str.replace(regA[key],`<a href="${regA[key]}" target="_blank">${regA[key]}</a>`);
                    }
                }

                return(str);
            },
            contextMenuOpen() {
                return {'open': this.contextMenuOpenStatus}
            }
        },
        methods: {
            onBluer() {
                this.editStatus = !this.editStatus
            },
            newItemFocus() {
                this.editStatus = !this.editStatus;
                if (this.editStatus) {
                    this.$nextTick(() => {
                        this.$refs.item.focus();
                    });
                }
            },
            changeClass() {
                /*Не менять при клике на textarea дважды*/
                if (!this.editStatus) {
                    this.editStatus = true;
                    this.$nextTick(() => {
                        this.$refs.item.focus();
                    });
                }

            },
            updateWithDate(field) {
               let date = new Date().getTime();
                this.$emit('update', {
                    field: 'date_complete',
                    value: date,
                    id: this.data.check_item_id,
                    timestamp_id: this.data.timestamp_id,
                    item: this.data,
                    update: false
                });
               this.update(field);
            },
            deleteItemEvent() {
                this.$emit('delete', this.data.check_item_id);
            },
            update(field) {
                this.$emit('update', {
                    field: field,
                    value: this.cache[field],
                    id: this.data.check_item_id,
                    item: this.data,
                    timestamp_id: this.data.timestamp_id,
                    update: true
                });
            },
            createNewItem(event) {
                if (!event.shiftKey) {
                    event.preventDefault();
                    if (!!this.cache.name) {
                        this.$store.dispatch('addCheckItem', this.$store.getters.checkListId);
                    }
                }
            },
            openCommentMenu() {
                this.$store.commit('toggleComment');
                this.$store.dispatch('loadComments', this.data.check_item_id);
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
        },
        created() {
            this.cache = JSON.parse(JSON.stringify(this.data));
        },
        props: ['data']
    }
</script>
