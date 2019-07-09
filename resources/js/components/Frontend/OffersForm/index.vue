<template>
    <div class="offer-form-wrapper">
        <h2>To offer</h2>
        <p>Сюда нужно написать текст, вроде того, что если вы не нашли своей проблемы среди вопросов,
            то вы можете  задать свой вопрос, и мы ответим на него в течениии стольки-то. на английскойм текст нужен
        </p>

        <form action="/frontend/offers/create" method="post" @submit.prevent="send">
            <label>
                <span class="icon">

                </span>
                <span>Offer</span>
              <textarea v-model="content" name="content" cols="30" rows="10"></textarea>
            </label>

            <button type="submit" class="button">TO OFFER</button>
        </form>
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
        methods: {
            send() {
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
