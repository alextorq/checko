<template>
    <div class="check-item">
        <div class="handle"></div>
        <div class="left-col">
            <label class="check-item__label">
                <input v-model="cache.complete" type="checkbox" @change="updateWithDate('complete')">
                <span class="checkbox-svg-wrapper">
                    <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                         viewBox="0 0 15.1 8.3" style="enable-background:new 0 0 15.1 8.3;" xml:space="preserve">
                      <polyline class="st0" points="1,1 8.3,7.3 14.1,1.6 "/>
                    </svg>
                </span>
            </label>
        </div>
        <div class="check-item__name-wrapper" :class="editClass" @click="changeClass">
            <div class="check-item__name-parse" v-html="parse"></div>
            <textarea wrap="hard" class="check-item__name" rows="1" v-model.trim="cache.name"
                      cols="20" @change="update('name')" ref="item" @blur="onBluer"
                      v-autosize="cache.name" :placeholder="placeholder"  @keyup.esc="$refs.item.blur()">
            </textarea>
        </div>
        <div class="context-menu-wrapper" :class="contextMenuOpen">
            <button class="check-item__menu three_point" :class="contextMenuOpen" ref="contextMenuButton" @click="openContextMenu" >
                <span></span>
            </button>
            <ul class="context-menu__list">
                <!--<li class="context-menu__item">attach</li>-->
                <li class="context-menu__item" @click="openCommentMenu">comments</li>
                <li class="context-menu__item" @click="deleteItem">delete</li>
            </ul>
        </div>

        <span class="check-item__data-complete date">
            {{dateFormat}}
        </span>
    </div>
</template>


<script>
    import {checkItem} from 'Core/helpers/defaultValue'
    import moment from 'moment'
    import Throttler from 'Core/helpers/Throttle'
    import EventBus from 'Core/helpers/eventBus'

    let throttleMakeDispatch = new Throttler();

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
        name: "CheckItemComplete",
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
        computed: {
            editClass() {
                return {
                    edit: this.editStatus,
                }
            },
            contextMenuOpen() {
                return {'open': this.contextMenuOpenStatus}
            },
            dateFormat() {
                let formatDate = this.$store.getters.getDateFormatDefault.value;
                return moment(this.cache.date_complete).format(formatDate)
            },
            parse() {
                let str = this.cache.name || this.placeholder;
                let refBr = str.match(/\r\n|\r|\n/g);
                for (let key in refBr) {
                    str = str.replace(refBr[key],'<br/>')
                }
                // let regA = str.match(/http\:\/\/[\w\-\.\/]+/g);
                let regA = str.match(/(http|https|ftp):\/\/[\w\-.\/]+/gim);
                if (regA) {
                    for (let key in Array.from(regA)) {
                        str = str.replace(regA[key],`<a href="${regA[key]}" target="_blank">${regA[key]}</a>`);
                    }
                }
                return(str);
            }
        },
        methods: {
            changeClass() {
                /*Не менять при клике на textarea дважды*/
                if (!this.editStatus) {
                    this.editStatus = true;
                    this.$nextTick(() => {
                        this.$refs.item.focus();
                    });
                }
            },
            onBluer() {
                this.editStatus = !this.editStatus;
            },
            updateWithDate() {
                let date = new Date().getTime();
                this.$store.commit('updateCheckItemField', {
                    field: ['date_complete', 'complete'],
                    value: [date, this.cache.complete] ,
                    timestamp_id: this.data.timestamp_id,
                });
                throttleMakeDispatch.delay(this.save);
            },
            deleteItem() {
                this.$store.dispatch('deleteCheckItem', this.data.check_item_id);
            },
            update() {
                this.$store.commit('updateCheckItemField', {
                    timestamp_id: this.data.timestamp_id,
                    field: 'name',
                    value: this.cache.name
                });
                throttleMakeDispatch.delay(this.save);
            },
            save() {
                this.$store.dispatch('updateCheckItemField', this.data.timestamp_id);
            },
            openCommentMenu() {
                EventBus.$emit('comments:open_layout');
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
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>
