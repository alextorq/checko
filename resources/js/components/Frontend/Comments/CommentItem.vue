<template>
    <li class="comments__item">
        <button class="close-delete" v-if="canDelete" @click="deleteComment"></button>
        <div class="comment-content" v-if="canEdit" @click="changeClass" :class="editClass">
            <div class="comment__name-parse" v-html="parse"></div>
             <textarea  wrap="hard" v-autosize="cache.content"
                   class="comment__name" rows="1" v-model.trim="cache.content" cols="20" autofocus
                       @change="update" @blur="onBluer" ref="comment" @keyup.esc="onBluer(); update();"
             ></textarea>
        </div>
        <div class="comment-content" v-else>
            <div class="comment__name-parse" v-html="parse"></div>
        </div>

        <div class="comment-info">
            <div class="comment-user">
                {{comment.owner.name}}
            </div>
            <div class="comment-date date">
                {{dateFormat}}
            </div>
        </div>
    </li>
</template>

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

            canDelete() {
                return this.comment.owner.user_id === this.$store.getters.userID
                    || this.comment.check_list_owner === this.$store.getters.userID;
            },
            canEdit() {
                return this.comment.owner.user_id === this.$store.getters.userID;
            },

            dateFormat() {
                let formatDate = this.$store.getters.getDateFormatDefault.value;
                return moment(this.comment.updated_at).format(formatDate)
            },
            parse() {
                let str = this.cache.content;
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
        },
        methods: {
            deleteComment() {
                this.$store.dispatch('deleteComment', this.comment.comment_id)
            },
            onBluer() {
                this.editStatus = !this.editStatus
            },
            changeClass() {
                /*Не менять при клике на textarea дважды*/
                if (!this.editStatus) {
                    this.editStatus = true;
                    this.$nextTick(() => {
                        this.$refs.comment.focus();
                    });
                }
            },
            update() {
                this.$store.dispatch('editComment', {id: this.cache.comment_id, comment: this.cache});
            },
        },
        created() {
            this.cache = this.comment;

        },
        props: ['comment']
    }
</script>

