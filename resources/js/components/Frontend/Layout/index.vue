<template>
    <div id="app">
        <notifications position="top right" classes="my-style"/>
        <Header></Header>
        <CommentsLayout :open="commentIsOpen"></CommentsLayout>
        <main>
            <div class="container">
                <div class="content">
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
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
            }
        },
        components: {
            Header,
            CommentsLayout
        },

    }

</script>

