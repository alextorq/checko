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
                <a  href="/" target="_blank" aria-label="Add new checklist" class="navbar__add-new" type="button">
                    <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 40.3 40.3" style="enable-background:new 0 0 40.3 40.3;" xml:space="preserve">
                        <path class="st1" d="M38.8,18.6H21.6V1.5C21.6,0.7,21,0,20.1,0c-0.8,0-1.5,0.7-1.5,1.5v17.1H1.5c-0.8,0-1.5,0.7-1.5,1.5
                        c0,0.8,0.7,1.5,1.5,1.5h17.1v17.1c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5V21.6h17.1c0.8,0,1.5-0.7,1.5-1.5
                        C40.3,19.3,39.6,18.6,38.8,18.6z"/>
                    </svg>
                </a>

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
                                <img src="/images/copy.svg" alt="copy">
                            </span>
                            copy link
                        </li>
                        <li class="dropdown-menu__item" @click="">
                            <a :href="'tg://msg?url=' + this.href">
                                <span class="icon">
                                     <img src="/images/telegram.svg" alt="telegram">
                                </span>
                                telegram
                            </a>
                        </li>
                        <li class="dropdown-menu__item">
                            <a target="_blank" :href="'https://www.facebook.com/sharer.php?u=' + this.href">
                                <span class="icon">
                                     <img src="/images/facebook.svg" alt="facebook">
                                </span>
                                facebook
                            </a>
                        </li>
                        <li class="dropdown-menu__item">
                            <a target="_blank" :href="'https://wa.me/?text=' + this.href">
                               <span class="icon">
                                     <img src="/images/whatsapp.svg" alt="whatsapp">
                                </span>
                                whatsapp
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="navbar__settings-wrapper">
                    <button class="navbar__settings" @click="goToSettings" :class="isSettingOpenStatus">
                        <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 52 56.1" style="enable-background:new 0 0 52 56.1;" xml:space="preserve">
                            <path id="line_x5F_3" class="st0" d="M50.5,45.2H27h-2.7H1.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h22.8H27h23.5
                            c0.8,0,1.5-0.7,1.5-1.5S51.3,45.2,50.5,45.2z"/>
                            <path id="line_x5F_2" class="st0" d="M50.5,26.3H47h-2.5h-43C0.7,26.3,0,27,0,27.8s0.7,1.5,1.5,1.5h43H47h3.5c0.9,0,1.5-0.7,1.5-1.5
                            S51.3,26.3,50.5,26.3z"/>
                            <path id="line_x5F_1" class="st0" d="M50.5,7.3h-24h-2.2H1.5C0.7,7.3,0,8,0,8.8s0.7,1.5,1.5,1.5h22.8h2.2h24c0.8,0,1.5-0.7,1.5-1.5
                            S51.3,7.3,50.5,7.3z"/>
                            <circle id="circle_x5F_3" class="st1" cx="14.8" cy="46.7" r="7.4"/>
                            <circle id="circle_x5F_2" class="st1" cx="37.8" cy="27.8" r="7.4"/>
                            <circle id="circle_x5F_1" class="st1" cx="14.8" cy="8.4" r="7.4"/>
                        </svg>

                    </button>
                </div>

                <div class="navbar__menu-wrapper">
                    <button class="navbar__menu-button" type="button" aria-label="open menu settings"
                            :class="isMenuOpenStatus" @click="isMenuOpen = !isMenuOpen">
                        <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 65 65" style="enable-background:new 0 0 65 65;" xml:space="preserve">
                             <path id="line_x5F_1_1_" class="st1 line_1" d="M57,12.8H33h-2.2H8c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h22.8H33h24
                            c0.8,0,1.5-0.7,1.5-1.5S57.8,12.8,57,12.8z"/>

                            <path id="line_x5F_2_1_" class="st1 line_2" d="M57,30.8h-3.5H51H8c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h43h2.5H57
                            c0.9,0,1.5-0.7,1.5-1.5S57.8,30.8,57,30.8z"/>

                            <path id="line_x5F_3_1_" class="st1 line_3" d="M57,48.7H33.5h-2.7H8c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h22.8h2.7H57
                            c0.8,0,1.5-0.7,1.5-1.5S57.8,48.7,57,48.7z"/>
                        </svg>

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
        },
        watch:{
            $route (to, from){
                this.href = window.location.href;
            }
        },
        methods: {
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
            CheckBoxButton,
            AppSelect,
            Menu
        },
        created() {
            this.href = window.location.href;
        }
    }
</script>
