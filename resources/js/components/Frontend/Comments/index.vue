<template>
    <div class="comments__content">
        <ul class="comments__list">
            <transition-group name="list">
                <Comment  v-for="comment of comments" :comment="comment" :key="comment.comment_id"></Comment>
            </transition-group>
        </ul>
        <CommentForm></CommentForm>
    </div>
</template>

<script>
    import Comment from './CommentItem'
    import CommentForm from  '../Comments/CommentForm'
    export default {
        name: "index",
        computed: {
          comments() {
              return this.$store.getters.activeComments;
          },

        },
        components: {
            Comment,
            CommentForm
        }
    }
</script>
>