<template>
    <nav class="navbar">
        <div class="content">
            <div class="left-col">
                <div @click="goToHome" class="navbar__logo">
                    <img src="/images/logo.svg" alt="checko logo">
                </div>
            </div>
            <div class="right_col">
                <span class="navbar__autosave-icon tooltip-wrapper" :class="{'loading': isLoading}">
                    <span class="tooltip">Loading</span>
                    <span class="loading-icon">
                        <span></span>
                    </span>
                    <span class="bg"></span>
                </span>
                <a  href="/" target="_blank" aria-label="Add new checklist" class="navbar__add-new tooltip-wrapper" type="button">
                    <span class="tooltip">New list</span>
                    <span class="wrapper">
                        <span class="line"></span>
                    </span>
                </a>

                <div class="button-wrapper" :class="isShareOpenStatus" >
                    <button class="navbar__share tooltip-wrapper" ref="openShareMenu" @click="openShareMenu"
                            type="button" aria-label="share checklist in soc network">
                        <span class="tooltip">Share</span>
                        <span class="wrapper">
                            <span class="line"></span>
                            <span class="line"></span>
                        </span>
                        <!--<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
                             <!--viewBox="0 0 30.8 23.9" style="enable-background:new 0 0 30.8 23.9;" xml:space="preserve">-->
                            <!--<line class="st1" x1="22.5" y1="20.4" x2="6.9" y2="12.3"/>-->
                            <!--<line class="st1" x1="21.5" y1="3.4" x2="7.1" y2="12.2"/>-->
                            <!--<circle id="circle_x5F_1_4_" class="st2" cx="20.1" cy="4" r="2.9"/>-->
                            <!--<circle id="circle_x5F_1_5_" class="st2" cx="20.1" cy="19.9" r="2.9"/>-->
                            <!--<circle id="circle_x5F_1_6_" class="st2" cx="8.8" cy="11.9" r="2.9"/>-->
                        <!--</svg>-->

                    </button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-menu__item" @click="copyLink">
                            <span class="icon">
                                <img src="/images/copy.svg" alt="copy">
                            </span>
                            copy link
                        </li>
                        <template v-if="isShareApi">
                            <li class="dropdown-menu__item">
                                <a :href="'tg://msg?url=' + this.href + '&text=' + checkListName" rel="noopener">
                                <span class="icon">
                                     <img src="/images/telegram.svg" alt="telegram">
                                </span>
                                    telegram
                                </a>
                            </li>
                            <li class="dropdown-menu__item">
                                <a target="_blank" :href="'https://www.facebook.com/sharer.php?u=' + this.href" rel="noopener">
                                <span class="icon">
                                     <img src="/images/facebook.svg" alt="facebook">
                                </span>
                                    facebook
                                </a>
                            </li>
                            <li class="dropdown-menu__item">
                                <a target="_blank" :href="'https://wa.me/?text=' + this.href" rel="noopener">
                               <span class="icon">
                                     <img src="/images/whatsapp.svg" alt="whatsapp">
                                </span>
                                    whatsapp
                                </a>
                            </li>
                        </template>
                        <template v-else>
                            <li @click="shareApi">share</li>
                        </template>

                    </ul>
                </div>

                <div class="navbar__settings-wrapper">
                    <button class="navbar__settings tooltip-wrapper" @click="goToSettings" :class="isSettingOpenStatus">
                        <span class="tooltip">Settings</span>
                        <span class="wrapper">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </span>

                        <!--<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" -->
                             <!--xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
                        <!--viewBox="0 0 52 56.1" style="enable-background:new 0 0 52 56.1;" xml:space="preserve">-->
                            <!--<path id="line_x5F_3" class="st0" d="M50.5,45.2H27h-2.7H1.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h22.8H27h23.5-->
                            <!--c0.8,0,1.5-0.7,1.5-1.5S51.3,45.2,50.5,45.2z"/>-->
                            <!--<path id="line_x5F_2" class="st0" d="M50.5,26.3H47h-2.5h-43C0.7,26.3,0,27,0,27.8s0.7,1.5,1.5,1.5h43H47h3.5c0.9,0,1.5-0.7,1.5-1.5-->
                            <!--S51.3,26.3,50.5,26.3z"/>-->
                            <!--<path id="line_x5F_1" class="st0" d="M50.5,7.3h-24h-2.2H1.5C0.7,7.3,0,8,0,8.8s0.7,1.5,1.5,1.5h22.8h2.2h24c0.8,0,1.5-0.7,1.5-1.5-->
                            <!--S51.3,7.3,50.5,7.3z"/>-->
                            <!--<circle id="circle_x5F_3" class="st1" cx="14.8" cy="46.7" r="7.4"/>-->
                            <!--<circle id="circle_x5F_2" class="st1" cx="37.8" cy="27.8" r="7.4"/>-->
                            <!--<circle id="circle_x5F_1" class="st1" cx="14.8" cy="8.4" r="7.4"/>-->
                        <!--</svg>-->

                    </button>
                </div>

                <div class="navbar__menu-wrapper">
                    <button class="navbar__menu-button" type="button" aria-label="open menu settings"
                            :class="isMenuOpenStatus" @click="isMenuOpen = !isMenuOpen">
                        <!--<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
                             <!--viewBox="0 0 65 65" style="enable-background:new 0 0 65 65;" xml:space="preserve">-->
                             <!--<path id="line_x5F_1_1_" class="st1 line_1" d="M57,12.8H33h-2.2H8c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h22.8H33h24-->
                            <!--c0.8,0,1.5-0.7,1.5-1.5S57.8,12.8,57,12.8z"/>-->

                            <!--<path id="line_x5F_2_1_" class="st1 line_2" d="M57,30.8h-3.5H51H8c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h43h2.5H57-->
                            <!--c0.9,0,1.5-0.7,1.5-1.5S57.8,30.8,57,30.8z"/>-->

                            <!--<path id="line_x5F_3_1_" class="st1 line_3" d="M57,48.7H33.5h-2.7H8c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h22.8h2.7H57-->
                            <!--c0.8,0,1.5-0.7,1.5-1.5S57.8,48.7,57,48.7z"/>-->
                        <!--</svg>-->
                        <span></span>
                    </button>
                    <Menu :open="isMenuOpen" @close="isMenuOpen = !isMenuOpen"></Menu>
               </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import Menu from  '../Menu'
    import EventBus from 'Core/helpers/eventBus'

    function closeShareMenu(event) {
        let target = event.target;
        if (window._self.$refs['openShareMenu'] !== target) {
            if(window._self.isShareOpen) {
                window._self.isShareOpen = false
            }
        }
        window._self.deleteHandler();
    }

    export default {
        name: "Header",
        data() {
            return {
                isShareOpen: false,
                isMenuOpen: false,
                lastRoute: '',
                href: ''
            }
        },
        computed: {
            checkListName() {
                return this.$store.state.checkList.list.name;
            },
            isShareOpenStatus() {
                return {
                    open: this.isShareOpen
                }
            },
            isLoading() {
                return this.$store.getters.isLoad;
            },
            isSettingOpenStatus() {
                return {
                    open: this.$route.fullPath.includes('/settings')
                }
            },
            isMenuOpenStatus() {
                return {
                    open: this.isMenuOpen
                }
            },
            isShareApi() {
                return (window.navigator.share === undefined);
            }
        },
        watch:{
            $route (){
                this.href = window.location.href;
            }
        },
        methods: {
            goToHome() {
                this.$store.commit('clearList');
                this.$store.commit('clearItems');
                this.$router.push('/')
            },
            shareApi() {
                navigator.share({
                    title: document.title,
                    text: 'Checko',
                    url: this.href,
                });
            },
            openShareMenu() {
                if (!this.isShareOpen) {
                    window._self = this;
                    event.stopPropagation();
                    document.addEventListener('click', closeShareMenu, {passive: true});
                }else {
                    this.deleteHandler();
                }
                this.isShareOpen = !this.isShareOpen
            },
            deleteHandler() {
                document.removeEventListener('click', closeShareMenu);
                window._self = null;
            },
            /*
               * Если перешли не со страницы настроек то
               * при повторном клике возвращаемся на нее иначе на главную
           * */
            goToSettings() {
                let pathToNavigate = '/';
                let fromSettingsPage = this.$route.fullPath.includes('/settings');

                if (!fromSettingsPage) {
                    this.lastRoute = this.$route.fullPath;
                    pathToNavigate = '/settings';
                }else {
                    if(this.lastRoute) {
                        pathToNavigate = this.lastRoute;
                        this.lastRoute = null;
                    }
                }
                let eventName = (!this.$route.fullPath.includes('/settings'))  ? 'overflow_on' : 'overflow_off';
                EventBus.$emit(eventName);

                this.$router.push(pathToNavigate);
            },

            copyLink() {
                let dummy = document.createElement('input'),
                    text = window.location.href;
                document.body.appendChild(dummy);
                dummy.value = text;
                dummy.select();
                document.execCommand('copy');
                document.body.removeChild(dummy);
                this.$notify({
                    duration: 1000,
                    type: 'success',
                    text: 'Link copied to clipboard',
                });
            }
        },
        components: {
            Menu
        },
        created() {
            this.href = window.location.href;
        }
    }
</script>
