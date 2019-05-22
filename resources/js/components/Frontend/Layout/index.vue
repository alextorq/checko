<template>
    <div id="app">
        <notifications position="top right" classes="my-style"/>
        <Header></Header>
        <CommentsLayout :open="commentIsOpen"></CommentsLayout>
        <main class="scrolled" :class="{'overlay-open': overflowStatus}">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </main>
    </div>
</template>

<script>
    import Header from '../Header'
    import  CommentsLayout from './CommentsLayout'
    import EventBus from 'Core/helpers/eventBus'

    export default {
        name: "Layout",
        data() {
          return {
                overflowStatus: false
          }
        },
        computed: {
            commentIsOpen() {
                return this.$store.state.comments.commentOpen;
            }
        },
        methods: {
            detectMobileViews(media) {
                this.$store.commit('updateMobileViews', media.matches)
            }
        },
        components: {
            Header,
            CommentsLayout
        },
        created() {
            EventBus.$on('overflow_on', () => {
               this.overflowStatus = true
            });
            EventBus.$on('overflow_off', () => {
                this.overflowStatus = false
            });

            let x = window.matchMedia("(max-width: 767px)");
            x.addListener(this.updateMobileViews);
            this.detectMobileViews(x);
        }
    }

</script>

