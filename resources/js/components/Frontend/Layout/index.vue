<template>
    <div id="app">
        <LogoWelcome v-if="logoAnimation"></LogoWelcome>
        <notifications position="top right" classes="my-style"/>
        <Header></Header>
        <CommentsLayout></CommentsLayout>
        <main class="scrolled" :class="overflow">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </main>
    </div>
</template>

<script>
    function firstEnter() {
        let status = localStorage.getItem('firstEnter');
        if (status) {
            return false
        }
        localStorage.setItem('firstEnter', 'true');
        return true;
    }

    import Header from '../Header'
    import CommentsLayout from './CommentsLayout'
    import EventBus from 'Core/helpers/eventBus'
    import LogoWelcome from '../LogoWelcome';

    export default {
        name: "Layout",
        data() {
          return {
                overflowStatus: false,
                logoAnimation: true
          }
        },
        computed: {
          overflow() {
              return {
                 'overlay-open': this.overflowStatus
              }
          }
        },
        methods: {
            detectMobileViews(media) {
                this.$store.commit('updateMobileViews', media.matches)
            }
        },
        components: {
            Header,
            CommentsLayout,
            LogoWelcome
        },
        created() {
            this.logoAnimation = firstEnter();
            if (this.logoAnimation)  {
                setTimeout(() => {
                    this.logoAnimation = false
                }, 2000)
            }
            EventBus.$on('overflow_on', () => {
               this.overflowStatus = true
            });
            EventBus.$on('overflow_off', () => {
                this.overflowStatus = false
            });
            // let x = window.matchMedia("(max-width: 767px)");
            // x.addListener(this.updateMobileViews);
            // this.detectMobileViews(x);
        }
    }

</script>

