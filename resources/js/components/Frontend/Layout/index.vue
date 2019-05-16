<template>
    <div id="app">
        <notifications position="top right" classes="my-style"/>
        <Header></Header>
        <CommentsLayout :open="commentIsOpen"></CommentsLayout>
        <main class="scrolled" :class="{'overlay-open': overlayOpen}">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </main>
    </div>
</template>

<script>
    import Header from '../Header'
    import  CommentsLayout from './CommentsLayout'

    export default {
        name: "Layout",
        data() {
          return {

          }
        },
        computed: {
            commentIsOpen() {
                return this.$store.state.comments.commentOpen;
            },
            overlayOpen() {
                return this.$store.state.comments.commentOpen;
            }
        },
        components: {
            Header,
            CommentsLayout
        },

    }

</script>

