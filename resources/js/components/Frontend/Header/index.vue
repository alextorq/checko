<template>
    <nav class="navbar">
        <div class="content">
            <div class="left-col">
                <router-link to="/" class="navbar__logo">
                    <img src="/images/logo.svg" alt="checko logo">
                </router-link>
            </div>
            <div class="right_col">
                <span class="navbar__autosave-icon" :class="{'loading': isLoading}">
                     <img src="/images/save.svg" alt="cloud save">
                    <span class="loading-icon">
                        <span></span>
                    </span>
                </span>
                <a  href="/" target="_blank" aria-label="Add new checklist" class="navbar__add-new" type="button"></a>

                <div class="button-wrapper" :class="isShareOpenStatus" >
                    <button class="navbar__share" ref="openShareMenu" @click="openShareMenu"
                            type="button" aria-label="share checklist in soc network">
                        <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 47.1 49.9" style="enable-background:new 0 0 47.1 49.9;" xml:space="preserve">
                            <path class="st1" d="M38.1,31.9c-2.8,0-5.3,1.2-7.1,3.4l-13.4-7.5c0.3-0.9,0.5-1.9,0.5-2.9c0-1-0.2-1.9-0.5-2.9L31,14.6
                                c1.7,2.2,4.3,3.4,7.1,3.4c5,0,9-4,9-9s-4-9-9-9s-9,4-9,9c0,1,0.2,2,0.5,2.9l-13.4,7.5c-1.7-2.2-4.3-3.4-7.1-3.4c-5,0-9,4-9,9
                                s4.1,9,9,9c2.8,0,5.4-1.3,7.1-3.4L29.5,38C29.2,39,29,39.9,29,40.9c0,5,4,9,9,9s9-4,9-9S43,31.9,38.1,31.9z M44,40.9
                                c0,3.3-2.7,5.9-5.9,5.9c-3.3,0-5.9-2.7-5.9-5.9c0-3.3,2.7-5.9,5.9-5.9C41.3,35,44,37.6,44,40.9z M32.1,9c0-3.3,2.7-5.9,5.9-5.9
                                C41.3,3.1,44,5.8,44,9S41.3,15,38.1,15C34.8,15,32.1,12.3,32.1,9z M15,25c0,3.3-2.7,5.9-5.9,5.9S3.1,28.2,3.1,25S5.8,19,9,19
                                S15,21.7,15,25z"/>
                            </svg>
                    </button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-menu__item" @click="copyLink">
                            <span class="icon">
                                <img src="/images/copy.svg" alt="">
                            </span>
                            copy link
                        </li>
                        <li class="dropdown-menu__item" @click="">
                            <a href="tg://msg?text='asd'">
                                <span class="icon">
                                     <img src="/images/telegram.svg" alt="">
                                </span>
                                telegram
                            </a>
                        </li>
                        <li class="dropdown-menu__item">
                            <span class="icon">
                                 <img src="/images/facebook.svg" alt="">
                            </span>
                            facebook
                        </li>
                        <li class="dropdown-menu__item">
                            <span class="icon">
                                 <img src="/images/whatsapp.svg" alt="">
                            </span>
                            whatsapp
                        </li>
                    </ul>
                </div>

                <div class="navbar__settings-wrapper">
                    <button class="navbar__settings" @click="goToSettings">
                        <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 52 56.1" style="enable-background:new 0 0 52 56.1;" xml:space="preserve">
                        <g>
                            <path class="st1" d="M50.5,45.3H24.7c-0.1,0-0.1,0-0.2,0C23.7,41.1,20,38,15.6,38c-4.4,0-8.1,3.1-8.9,7.3H1.5C0.7,45.3,0,46,0,46.8
                                c0,0.8,0.7,1.5,1.5,1.5h5.2c0.6,4.4,4.4,7.8,8.9,7.8c4.6,0,8.3-3.4,9-7.8c0,0,0.1,0,0.1,0h25.8c0.8,0,1.5-0.7,1.5-1.5
                                C52,46,51.3,45.3,50.5,45.3z M15.6,53.1c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S19,53.1,15.6,53.1z"/>
                            <path class="st1" d="M50.5,26.3H45c-0.8-4.1-4.5-7.3-8.9-7.3c-4.4,0-8.1,3.1-8.9,7.3H1.5C0.7,26.3,0,27,0,27.8
                                c0,0.8,0.7,1.5,1.5,1.5h25.7c0.6,4.4,4.4,7.8,8.9,7.8c4.6,0,8.3-3.4,8.9-7.8h5.4c0.8,0,1.5-0.7,1.5-1.5C52,27,51.3,26.3,50.5,26.3z
                                M36.1,34.1c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S39.5,34.1,36.1,34.1z"/>
                            <path class="st1" d="M1.5,10.3h5.2c0.6,4.4,4.4,7.8,8.9,7.8c4.6,0,8.3-3.4,8.9-7.8h25.9c0.8,0,1.5-0.7,1.5-1.5
                                c0-0.8-0.7-1.5-1.5-1.5h-26C23.7,3.1,20,0,15.6,0c-4.4,0-8.1,3.1-8.9,7.3H1.5C0.7,7.3,0,8,0,8.8C0,9.6,0.7,10.3,1.5,10.3z M15.6,3
                                c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S12.3,3,15.6,3z"/>
                            </g>
                        </svg>
                    </button>

                </div>

                <div class="navbar__menu-wrapper">
                    <button class="navbar__menu-button" type="button" aria-label="open menu settings"
                            :class="isMenuOpenStatus" @click="isMenuOpen = !isMenuOpen">
                        <div class="hamburger-box">
                            <div class="hamburger-inner"></div>
                        </div>
                    </button>
                    <Menu :open="isMenuOpen" @close="isMenuOpen = !isMenuOpen"></Menu>
               </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import CheckBoxButton from '../ChekBoxButton'
    import AppSelect from '../Select'
    import Menu from  '../Menu'

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
                lastRoute: ''
            }
        },
        computed: {
            isShareOpenStatus() {
                return {
                    open: this.isShareOpen
                }
            },
            isLoading() {
                return this.$store.getters.isLoad;
            },
            isMenuOpenStatus() {
                return {
                    open: this.isMenuOpen
                }
            }
        },
        methods: {
            shareByTelegram() {
                // tg://msg?text='+encodeURIComponent(TEXT);
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
            CheckBoxButton,
            AppSelect,
            Menu
        }
    }
</script>
