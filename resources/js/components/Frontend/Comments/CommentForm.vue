<template>
    <form action="/" method="post" class="comments-form" @submit.prevent="send">
        <textarea wrap="hard" class="check-item__name" rows="1" v-model.trim="name" :maxlength="maxLength"
                  cols="20" @change="" ref="item" @blur="" v-autosize="name"></textarea>
        <span class="max-length">{{maxLength - name.length}}</span>
        <button :disabled="disabled" type="submit" class="comments-form-send button">send</button>
    </form>
</template>

<script>
    export default {
        name: "CommentForm",
        data() {
            return {
                name: '',
                maxLength: 1024
            }
        },
        computed: {
            disabled() {
                return !this.$store.getters.checkListId;
            },
            checkItemId() {
                return this.$store.state.comments.comment_id;
            },
            checkListId() {
                return this.$store.getters.checkListId;
            }
        },
        methods: {
            updateComments() {

            },
            validate() {
              return !!this.name
            },
            send() {
                if (this.$store.getters.checkListId) {
                    if (this.validate()) {
                            this.$store.dispatch('addComment', {
                                content: this.name,
                                check_item_id: this.checkItemId,
                                check_list_id: this.checkListId
                            }).then(() => {
                                this.name = ''
                            }).catch(() => {
                                this.$notify({
                                    duration: 3000,
                                    type: 'error',
                                    text: 'Something was wrong',
                                });
                            });
                        }
                    }
            }
        },
        created() {


        },

    }
</script>
