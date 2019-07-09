<template>
    <div class="container">
        <div class="default-content offer-page">
            <preloader :active="loading"></preloader>
            <h1>Offers</h1>
            <p>Сюда нужно написать текст, предложите свои пожелания замечание,
                нам очень важно ваше мнение, чтобы сделать наш сервис лучше
            </p>
            <div class="offers__list">
                <transition-group name="list">
                    <offer v-for="post in posts.data" :key="post.post_id" :post="post"></offer>
                </transition-group>
            </div>

            <pagination @change_page="loadPage" :current-page="posts.current_page" :all-page="posts.last_page"></pagination>
            <offerForm v-if="userAuth" @send="refresh"></offerForm>
            <copyright></copyright>
        </div>
    </div>
</template>

<script>
    import offer from 'ComponentsF/OffersPost';
    import offerForm from 'ComponentsF/OffersForm';
    import copyright from '../../../components/Frontend/Copyright'
    import pagination from '../../../components/Frontend/Pagination'
    import preloader from '../../../components/Frontend/Preloader'

    export default {
        name: "index",
        data() {
            return {
                posts: {},
                allPost: {},
                loading: true
            }
        },
        computed: {
          userAuth() {
              return this.$store.getters.userLoginStatus;
          }
        },
        methods: {
            loadPage(page) {
                if (page in this.allPost) {
                    this.posts = this.allPost[page];
                    return
                }
                this.loading = true;
                axios.get('frontend/offers/all', {
                    params: {
                        page: page
                    }
                })
                .then((responce) => {
                    this.posts = Object.freeze(responce.data);
                    this.allPost[page] = Object.freeze(responce.data);
                }).catch((error) => {
                    console.log(error)
                }).finally(() => {
                    this.loading = false;
                })
            },
            refresh() {
                this.allPost = {};
                this.loadPage(this.posts.current_page || 1);
            }
        },
        components: {
            offer,
            offerForm,
            copyright,
            pagination,
            preloader
        },
        props: {
            urlPage: {
                required: false,
                type: Number,
                default: 1
            }
        },
        created() {
            this.loadPage(this.urlPage)
        }
    }
</script>
