<template>
    <div class="offer-form-wrapper">
        <h2>Help us make Checko.me better</h2>
        <p>
            Leave your feedback or suggestion for improving our service in the form below
        </p>
        <div v-if="!userAuth">
            <button @click="singIn" class="button">Sing in</button>
        </div>
        <div v-else>
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
        name: "offers_form",
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
                if (this.content.length < 10) {
                    this.$notify({
                        duration: 3000,
                        type: 'warning',
                        text: 'must have at least 10 characters'
                    });
                    return
                }
                axios.post('/frontend/offers/create', {content: this.content}).then(() => {
                    this.content = '';
                    this.$emit('send')
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>
