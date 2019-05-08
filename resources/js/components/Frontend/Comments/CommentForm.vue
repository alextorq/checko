<template>
    <form action="/" method="post" class="comments-form" @submit.prevent="send">
        <textarea wrap="hard" class="check-item__name" rows="1" v-model.trim="name" :maxlength="maxLength"
                  cols="20" @change="" ref="item" @blur="" v-autosize="name" @keydown.enter="sendOrNewLine"></textarea>

        <!--<span class="max-length">{{maxLength - name.length}}</span>-->

        <div class="button-wrapper">
            <Preloader :active="load"></Preloader>
            <button v-if="!load" :disabled="disabled" title="send" type="submit" class="comments-form-send">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                     y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <g>
                    <path d="M507.6,4.4c-4.2-4.2-10.6-5.5-16.2-3.3L9.4,193.9c-5.5,2.2-9.2,7.5-9.4,13.4c-0.2,5.9,3.1,11.4,8.4,14l190.1,92.2
                    l92.2,190.1c2.5,5.2,7.8,8.5,13.5,8.5c0.2,0,0.4,0,0.5,0c5.9-0.2,11.2-3.9,13.4-9.4l192.8-482C513.2,15,511.9,8.6,507.6,4.4z
                    M52.1,209.1l382.6-153l-228,228L52.1,209.1z M302.9,459.9l-75-154.6l228-228L302.9,459.9z"/>
                </g>
            </svg>
            </button>
        </div>
    </form>
</template>

<script>
    import Preloader from '../Preloader'
    export default {
        name: "CommentForm",
        data() {
            return {
                name: '',
                maxLength: 1024,
                load: false
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
            sendOrNewLine(event) {
                if (!event.shiftKey) {
                    event.preventDefault();
                    this.send();
                }
            },
            validate() {
              return !!this.name
            },
            send() {
                if (this.$store.getters.userLoginStatus) {
                    if (this.validate()) {
                            this.load = true;
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
                            }).finally(() => {
                                this.load = false;
                            });
                        }
                    }else {
                        this.$notify({
                            duration: 3000,
                            type: 'error',
                            text: 'You must be login',
                        });
                }
            }
        },
        components: {
            Preloader
        },
    }
</script>
