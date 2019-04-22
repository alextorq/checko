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
                <div v-else>
                    <span class="avatar-wrapper">{{userInitials}}</span>
                    {{userName }}
                </div>

            </li>

            <li class="navbar__menu__item">
                about
            </li>
            <li class="navbar__menu__item">
                help
            </li>
            <li class="navbar__menu__item">
                contacts
            </li>
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
