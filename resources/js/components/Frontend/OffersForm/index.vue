<template>
    <div class="offer-form-wrapper">
        <h2>To offer</h2>
        <div v-if="!userAuth">
            <p>Сюда нужно написать текст, вроде того, что если вы не нашли своей проблемы среди вопросов</p>
            <button @click="singIn" class="button">Sing in</button>
        </div>

        <div v-else>
            <p>Сюда нужно написать текст, вроде того, что если вы не нашли своей проблемы среди вопросов,
                то вы можете  задать свой вопрос, и мы ответим на него в течениии стольки-то. на английскойм текст нужен
            </p>
            <form action="/frontend/offers/create" method="post" @submit.prevent="send">
                <label>
                    <div class="icon-wrapper">
                    <span class="icon">
                        <svg>
                            <use xlink:href="/images/sprites.svg#sprite-comment"></use>
                        </svg>
                    </span>
                        <span>Offer</span>
                    </div>

                    <textarea v-model="content" name="content" cols="30" rows="10"></textarea>
                </label>

                <button type="submit" class="button">TO OFFER</button>
            </form>
        </div>

    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                list: [],
                content: ''
            }
        },
        computed: {
            userAuth() {
                return this.$store.getters.userLoginStatus;
            }
        },
        methods: {
            singIn() {
              this.$router.push({name: 'Registration'});
            },
            send() {
                if (!this.content) {
                    return
                }
                axios.post('/frontend/offers/create', {content: this.content}).then((responce) => {
                    this.content = '';
                    this.$emit('send')
                }).catch(() => {
                    console.log
                })
            }
        },
        created() {

        }

    }
</script>
