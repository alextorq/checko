<template>
    <div class="check-item">
        <div class="handle"></div>
        <div class="left-col">
            <label class="check-item__label">
                <input v-model="cache.complete" type="checkbox" @change="updateWithDate('complete')">
                <span class="checkbox-svg-wrapper">
                    <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 15.1 8.3" style="enable-background:new 0 0 15.1 8.3;" xml:space="preserve">
                      <polyline class="st0" points="1,1 8.3,7.3 14.1,1.6 "/>
                    </svg>
                </span>
            </label>
        </div>
        <div class="check-item__name-wrapper" :class="editClass"
             @click="changeClass">
            <div class="check-item__name-parse" v-html="parse"></div>
            <textarea wrap="hard" v-autosize="cache.name" class="check-item__name" rows="1" v-model.trim="cache.name"
                      cols="20" @change="update('name')" ref="item" @blur="editStatus = !editStatus"
                   ></textarea>
        </div>
        <!--@keyup.delete="rowHeight"-->
        <button class="check-item__delete" @click="deleteItemEvent">
            <span class="icon"></span>
        </button>
    </div>
</template>

<script>

    export default {
        name: "completeItem",
        data() {
            return {
                cache: {
                    name: null
                },
                editStatus: false,
                height: 10
            }
        },
        computed: {
            editClass() {
                return {
                    edit: this.editStatus
                }
            },
          parse() {
                let str = this.cache.name;
                let refBr = str.match(/\r\n|\r|\n/g);
                for (let key in refBr) {
                  str = str.replace(refBr[key],'<br/>')
                }
                let regA = str.match(/http\:\/\/[\w\-\.\/]+/);
                for (let key in regA) {
                    str = str.replace(regA[key],'<a href=\"'+regA[key]+'\" target=\"_blank\">'+regA[key]+'</a>')
                }
                return(str);
            }

        },
        methods: {
            onBluer() {
                this.rowHeight({target: this.$refs.item});
                this.editStatus = !this.editStatus
            },
            changeClass(event) {
                if (event.target.closest('.check-item__name-parse')) {
                    this.editStatus = !this.editStatus;
                    if (this.editStatus) {
                        setTimeout(() => {
                            this.$refs.item.focus();

                        }, 100)
                    }
                }
            },
            updateWithDate(field) {
               let date = new Date().getTime();
                this.$emit('update', {
                    field: 'date_complete',
                    value: date,
                    id: this.data.check_item_id,
                    item: this.data,
                    update: false
                });
               this.update(field);
            },
            rowHeight(event) {
                let rowLength = event.target.value.split(/\r\n|\r|\n/g);
                let height = (rowLength.length * 25);
                if (event.target.scrollHeight) {
                    height = Math.min(height, event.target.scrollHeight)
                }
                this.height = height;
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
                    update: true
                });
            }
        },
        created() {
            this.cache = JSON.parse(JSON.stringify(this.data));
            this.rowHeight({target: {value: this.cache.name}});
        },
        props: ['data']
    }
</script>
