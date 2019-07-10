<template>
    <div class="offer__item">
        <div class="meta">
            <Avatar :avatar="post.avatar" :name="post.name"></Avatar>
            <div>
                <div class="user_name">
                    {{post.name}}
                </div>
                <div class="date">
                    {{dateFormat}}
                </div>
            </div>
            <button class="like_button" :class="userAlreadyLike" @click="like">
                <span class="icon">
                    <svg>
                        <use xlink:href="/images/sprites.svg#sprite-like"></use>
                    </svg>
                </span>
                <span class="like_count">{{likeCount}}</span>
                </button>
        </div>
        <p>{{post.content}}</p>
    </div>
</template>

<script>
    import moment from 'moment';
    import Avatar from 'ComponentsF/Avatar';

    export default {
        name: "offer_post",
        data() {
            return {
                likes: [],
                userLiked: false
            }
        },
        computed: {
            dateFormat() {
                let formatDate = this.$store.getters.getDateFormatDefault.value;
                return moment(this.post.created_at).format(formatDate)
            },
            likeCount() {
                return this.likes.length || '';
            },
            userAlreadyLike() {
                this.userLiked = this.likes.includes(this.$store.getters.userID);
                return {
                    liked: this.userLiked
                };
            }
        },
        methods: {
          like() {
              if (!this.$store.getters.userLoginStatus) {
                  this.$notify({
                      duration: 3000,
                      type: 'warning',
                      text: 'Only auth user can like',
                  });
                  return
              }

              if (!this.likes.includes(this.$store.getters.userID)) {
                  this.likes.push(this.$store.getters.userID);
              }else {
                  let index = this.likes.findIndex((id) => {
                      return id === this.$store.getters.userID;
                  });
                  this.likes.splice(index, 1);
              }

              axios.post(`/frontend/offers/like/${this.post.post_id}`)
              .then(() => {
              }).catch((err) => {
                  console.log(err)
              })

          }
        },
        components: {
            Avatar
        },
        created() {
            this.likes = JSON.parse(this.post.users_id);
        },
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    }
</script>
