<template>
    <ul class="pagination" v-if="allPage > 1">
        <li @click="prevPage" class="prev-arrow pagination_arrow">
            <div class="arrow"></div>
        </li>

        <li :class="{active: page === 1}"
             @click="changePage(1)">1
        </li>

        <li v-if="showMorePrev" @click="showMorePrevFun">
            ...
        </li>

        <li  v-for="i of renderPages"
              :class="{active: page === i}"
              @click="changePage(i)">{{i}}
        </li>

        <li v-if="showMoreNext" @click="showMoreNextFun">
            ...
        </li>

        <li :class="{active: page === allPage}"
            @click="changePage(allPage)">{{allPage}}
        </li>

        <li @click="nextPage" class="next-arrow pagination_arrow">
            <div class="arrow"></div>
        </li>
    </ul>
</template>

<script>

    function findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
                tmp = item.split("=");
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    }

    export default {
        name: "pagination",
        data() {
            return {
                page: '',
                max: 5,
                showMoreNext: false,
                showMorePrev: false
            }
        },
        computed: {
            renderPages() {
                const pagerCount = this.max;
                const halfPagerCount = (pagerCount - 1) / 2;

                const currentPage = Number(this.page);
                const pageCount = Number(this.allPage);

                let showPrevMore = false;
                let showNextMore = false;

                if (pageCount > pagerCount) {
                    if (currentPage > pagerCount - halfPagerCount) {
                        showPrevMore = true;
                    }

                    if (currentPage < pageCount - halfPagerCount) {
                        showNextMore = true;
                    }
                }

                const array = [];

                if (showPrevMore && !showNextMore) {
                    const startPage = pageCount - (pagerCount - 2);
                    for (let i = startPage; i < pageCount; i++) {
                        array.push(i);
                    }
                } else if (!showPrevMore && showNextMore) {
                    for (let i = 2; i < pagerCount; i++) {
                        array.push(i);
                    }
                } else if (showPrevMore && showNextMore) {
                    const offset = Math.floor(pagerCount / 2) - 1;
                    for (let i = currentPage - offset ; i <= currentPage + offset; i++) {
                        array.push(i);
                    }
                } else {
                    for (let i = 2; i < pageCount; i++) {
                        array.push(i);
                    }
                }

                this.showMorePrev = showPrevMore;
                this.showMoreNext = showNextMore;

                return array;
            }
        },
        methods: {
            changePage(page) {
                if (this.page !==  page) {
                    this.page = page;
                    this.changeURL();
                    this.$emit('change_page', this.page);
                }
            },
            nextPage() {
                if (this.page !== this.allPage) {
                    this.page = this.page + 1;
                    this.changeURL();
                    this.$emit('change_page', this.page);
                }
            },
            prevPage() {
                if (this.page !== 1) {
                    this.page = this.page - 1;
                    this.changeURL();
                    this.$emit('change_page', this.page);
                }
            },
            showMorePrevFun() {
                this.page = this.page - Math.floor((this.page) / 2);
                this.changeURL();
                this.$emit('change_page', this.page);
            },
            showMoreNextFun() {
                this.page += Math.floor((this.allPage - this.page) / 2);
                this.changeURL();
                this.$emit('change_page', this.page);
            },
            changeURL() {
                let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?urlPage=' + this.page;
                window.history.pushState({ path: newurl }, '', newurl);
            },
            historyPushDetect() {
                window.onpopstate =  (event) =>{
                    if (event.state) {
                        this.page = +findGetParameter('urlPage');
                        this.$emit('change_page', this.page);
                    }
                }
            }
        },
        watch: {
            currentPage(newVal) {
                this.page = newVal;
            }
        },
        props: {
            allPage: {
                required: true,
                type: Number,
                default: 1
            },
            currentPage: {
                required: true,
                type: Number,
                default: 1
            }
        },
        beforeDestroy() {
            window.onpopstate = null;
        },
        created() {
            this.historyPushDetect();
            this.page = this.currentPage;
        }
    }
</script>
