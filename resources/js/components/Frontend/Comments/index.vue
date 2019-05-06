<template>
    <div class="comments-wrapper">
        <div class="preloader" v-if="loading">
            <span>
                <svg >
                  <use xlink:href="/images/sprites.svg#sprite-circle"></use>
                </svg>
            </span>
        </div>
        <ul class="comments__list">
            <!--<transition-group name="list" >-->
            <!--</transition-group>-->
                <Comment v-for="comment of comments" :comment="comment" :key="comment.comment_id"></Comment>

        </ul>
        <CommentForm></CommentForm>
    </div>
</template>

<script>
    import Comment from '../CheckItemCommentsItem'
    import CommentForm from  '../Comments/CommentForm'
    export default {
        name: "index",
        computed: {
          comments() {
              return this.$store.getters.activeComments;
          },
          loading() {
              return this.$store.state.comments.loadStatus;
          }
        },
        components: {
            Comment,
            CommentForm
        }
    }
</script>
>