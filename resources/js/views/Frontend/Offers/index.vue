<template>
    <div class="container">
        <div class="default-content offer-page">
            <preloader :active="loading"></preloader>
            <h1>Suggestions</h1>
            <p>Leave your suggestions for improving the project.
                Together we will make checko.me the most convenient and useful online checklist.
                Leave a suggestion
            </p>
            <div class="sort">
                <appSelect :list="sortOptions"
                    @change="sortHandler" name="sort" :default_value="sortOptions[1]"
                ></appSelect>

            </div>
            <div class="offers__list">
                <transition-group name="list">
                    <offer v-for="post in posts.data" :key="post.post_id" :post="post"></offer>
                </transition-group>
            </div>

            <pagination @change_page="loadPage" :current-page="posts.current_page" :all-page="posts.last_page"></pagination>
            <offerForm  @send="refresh"></offerForm>
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
    import appSelect from '../../../components/Frontend/Select'

    export default {
        name: "index",
        data() {
            return {
                posts: {},
                allPost: {},
                sortBy: 'likes.like_count',
                loading: true,
                sortOptions: [
                    {name: 'by date', value: 'created_at'},
                    {name: 'by popular', value: 'likes.like_count'}
                ]
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
                        page: page,
                        sortBy: this.sortBy
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
            },
            sortHandler(data) {
                this.sortBy = data.value;
                this.refresh();
            }
        },
        components: {
            offer,
            offerForm,
            copyright,
            pagination,
            preloader,
            appSelect
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
