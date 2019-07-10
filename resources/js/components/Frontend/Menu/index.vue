<template>
    <div @click="closeMenu">
        <div  class="overlay" :class="isMenuOpenStatus"></div>
        <ul class="navbar__menu" :class="isMenuOpenStatus">
            <li class="navbar__menu__item sing-in" >
                <div v-if="!userLoginStatus">
                    <router-link to="/registration">
                    <span class="avatar-wrapper">
                        <svg>
                          <use xlink:href="/images/sprites.svg#sprite-user"></use>
                        </svg>
                    </span>
                        Sign in or Sign up
                    </router-link>
                </div>
                <router-link v-else :to="{ name: 'SettingsAccount'}">
                    <span v-if="avatarStatus" class="avatar-wrapper image"
                        :style="{ backgroundImage: 'url(' + avatar + ')' }">
                    </span>
                    <span v-else class="avatar-wrapper">
                        {{userInitials}}
                    </span>
                    {{userName}}
                </router-link>
            </li>

            <li class="navbar__menu__item phone-only-b">
                <router-link :to="{ name: 'SettingsList'}">
                    Settings
                </router-link>
            </li>

            <li class="navbar__menu__item">
                <router-link :to="{ name: 'about'}">
                    about
                </router-link>
            </li>

            <li class="navbar__menu__item">
                <router-link :to="{ name: 'Offers'}">
                    offers
                </router-link>
            </li>

            <!--<li class="navbar__menu__item">-->
                <!--<router-link :to="{ name: 'SettingsList'}">-->
                    <!--help-->
                <!--</router-link>-->
            <!--</li>-->
            <!--<li class="navbar__menu__item">-->
                <!--<router-link :to="{ name: 'SettingsList'}">-->
                    <!--contacts-->
                <!--</router-link>-->
            <!--</li>-->
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        methods: {
            closeMenu() {
                this.$emit('close');
            }
        },
        computed: {
            isMenuOpenStatus() {
                return {
                    open: this.open
                }
            },
            avatar() {
                return this.$store.state.user.user.avatar;
            },
            avatarStatus() {
                return !!this.$store.state.user.user.avatar;
            },
            userInitials() {
                return this.$store.getters.userInitials;
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
        }
    }
</script>
