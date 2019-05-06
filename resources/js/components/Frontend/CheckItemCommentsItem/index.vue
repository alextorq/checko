<template>
    <li class="comments__item">
        <button class="close-delete" @click="deleteComment"></button>
        {{comment.content}}
        <div class="comment-info">
            <div class="comment-user">
                {{comment.owner.name}}
            </div>

            <div class="comment-date">
                {{dateFormat}}
            </div>
        </div>
        <!--<div class="check-item__name-wrapper" :class="editClass"-->
             <!--@click="changeClass">-->
            <!--<div class="check-item__name-parse" v-html="parse"></div>-->
            <!--<textarea wrap="hard" v-autosize="cache.name" class="check-item__name" rows="1" v-model.trim="cache.name"-->
                      <!--cols="20" @change="update('name')" ref="item" @blur="editStatus = !editStatus"-->
            <!--&gt;</textarea>-->
        <!--</div>-->
    </li>
</template>
<!--check_item_id: 2-->
<!--check_list_id: null-->
<!--comment_id: 5-->
<!--created_at: "2019-04-29 07:46:05"-->
<!--name: "szdfdxghdfgh"-->
<!--owner: {user_id: 1, name: "Alex", email: "xxxxx_07@inbox.ru", avatar: null, email_verified_at: null,…}-->
<!--avatar: null-->
<!--created_at: "2019-04-26 14:27:07"-->
<!--deleted_at: null-->
<!--email: "xxxxx_07@inbox.ru"-->
<!--email_verified_at: null-->
<!--name: "Alex"-->
<!--updated_at: "2019-04-26 14:27:07"-->
<!--user_id: 1-->
<!--updated_at: "2019-04-29 07:46:05"-->
<!--user_id: 1-->
<script>
    import moment from 'moment'

    export default {
        name: "check_item_comment",
        data() {
            return {
                cache: {
                    name: null
                },
                editStatus: false,
            }
        },
        computed: {
            editClass() {
                return {
                    edit: this.editStatus
                }
            },
            dateFormat() {
                let formatDate = this.$store.getters.getDateFormatDefault.value;
                return moment(this.comment.updated_at).format(formatDate)
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
            },
        },
        methods: {
            deleteComment() {
                this.$store.dispatch('deleteComment', this.comment.comment_id)
            },


            onBluer() {
                this.editStatus = !this.editStatus
            },
            changeClass(event) {
                if (event.target.closest('.check-item__name-parse')) {
                    this.editStatus = !this.editStatus;
                    if (this.editStatus) {
                        this.$nextTick(() => {
                            this.$refs.item.focus();
                        });
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
            },
        },

        created() {
            // console.log(this.comment);
        },
        props: ['comment']
    }
</script>

