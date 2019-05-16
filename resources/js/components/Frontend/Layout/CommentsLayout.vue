<template>
    <div>
        <div  class="overlay" :class="isMenuOpenStatus" @click="closeMenu"></div>
        <div class="comments-layout" :class="isMenuOpenStatus">

            <div class="preloader" v-if="loading">
                <span>
                    <svg >
                      <use xlink:href="/images/sprites.svg#sprite-circle"></use>
                    </svg>
                </span>
            </div>
            <h3>
                Comments
                <button  @click="closeMenu" class="close-delete"></button>
            </h3>
            <Comments></Comments>
        </div>
    </div>
</template>

<script>
    import Comments from '../Comments'

    export default {
        name: "CommentLayout",
        data() {
            return {

            }
        },
        methods: {
            closeMenu() {
                this.$store.commit('toggleComment');
            },
        },
        computed: {
            isMenuOpenStatus() {
                return {
                    open: this.open
                }
            },
            loading() {
                return this.$store.state.comments.loadStatus;
            },
            userName () {
                return this.$store.getters.userName;
            },
            userLoginStatus() {
                return this.$store.getters.userLoginStatus;
            }
        },
        props: {
            open: {
                type: Boolean,
                required: true,
                default: false
            }
        },
        components: {
            Comments,
        }
    }
</script>
