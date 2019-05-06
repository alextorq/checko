<template>
    <div>
        <div  class="overlay" :class="isMenuOpenStatus" @click="closeMenu"></div>
        <div class="comments-layout" :class="isMenuOpenStatus">
            <button  @click="closeMenu" class="close-delete"></button>
            <h3>Comments</h3>
            <div class="comments__content">
                <keep-alive>
                    <Comments></Comments>
                </keep-alive>
            </div>
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
