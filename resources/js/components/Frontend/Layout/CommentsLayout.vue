<template>
    <div>
        <div  class="overlay" :class="isMenuOpenStatus" @click="closeMenu"></div>
        <div class="comments-layout" :class="isMenuOpenStatus">
            <preload :active="loading"></preload>
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
    import EventBus from 'Core/helpers/eventBus'
    import preload from '../Preloader'

    export default {
        name: "CommentLayout",
        data() {
            return {
                openStatus: false
            }
        },
        methods: {
            closeMenu() {
                this.openStatus = false;
            },
        },
        computed: {
            isMenuOpenStatus() {
                return {
                    open: this.openStatus
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
        created() {
            EventBus.$on('comments:open_layout', () => {
                this.openStatus = true
            })
        },
        components: {
            Comments,
            preload
        }
    }
</script>
