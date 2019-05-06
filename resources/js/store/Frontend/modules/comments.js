import Vue from  'vue'

const comments = {
    state: {
        comment_id: null,
        comments: {},
        commentOpen: false,
        loadStatus: false,
        URI: {
            pref: '/frontend/checkitemcomment/',
            POST: {
                create: 'comments',
            },

            GET: {
                'all': 'comments/',
            },
            PUT: {
                edit: 'edit'
            },
            DELETE: {
                delete: 'comments/'
            }
        }
    },
    getters: {
        activeComments(state) {
            if (state.comments[state.comment_id])  {
                return state.comments[state.comment_id];
            }

            return [];
        }
    },
    mutations: {
        toggleLoadStatus(state) {
            state.loadStatus = !state.loadStatus
        },
        selectCheckItem(state, payload) {
            if (payload)  {
                state.comment_id = payload;
            }
        },
        toggleComment(state) {
            state.commentOpen = !state.commentOpen;
        },
        loadComments(state, payload) {
            let commentId = payload.id;

            if (!state.comments.hasOwnProperty(commentId)) {
                Vue.set(state.comments, commentId, new Array(0));
                state.comments[commentId].push(...payload.comments);
            }
        },
        addComment(state, payload) {
            let commentId = payload.check_item_id;

            if (!state.comments.hasOwnProperty(commentId)) {
                Vue.set(state.comments, commentId, new Array(0));
            }

            state.comments[commentId].push(payload);
        },
        deleteComment(state, {check_item_id, comment_id}) {
            if (state.comments.hasOwnProperty(check_item_id)) {
                let commentForDeleteIndex = state.comments[check_item_id].findIndex((comment) => {
                    return comment.comment_id === comment_id;
                });
                state.comments[check_item_id].splice(commentForDeleteIndex, 1);
            }
        },
    },
    actions: {
        loadComments(context, id) {
            context.commit('selectCheckItem', id);
            if (!context.state.comments.hasOwnProperty(id)) {
                context.commit('toggleLoadStatus');
                axios
                    .get(`${context.state.URI.pref}${context.state.URI.GET.all}${id}`)
                    .then(response => {
                        context.commit('loadComments', {comments: response.data, id});
                    }).catch((err) => {
                        console.log(err);
                        this._vm.$notify({
                            duration: -3000,
                            type: 'error',
                            text: err,
                        });
                }).finally(() => {
                    context.commit('toggleLoadStatus');
                });
            }
        },
        addComment(context, comment) {
            return new Promise(function (resolve, reject) {
                axios
                    .post(`${context.state.URI.pref}${context.state.URI.POST.create}`, comment)
                    .then(response => {
                        context.commit('addComment', response.data);
                        resolve()
                    }).catch((err) => {
                        console.log(err);
                        reject();
                })
            });
        },
        deleteComment(context, id) {
            axios
                .delete(`${context.state.URI.pref}${context.state.URI.DELETE.delete}${id}`)
                .then(response => {
                    context.commit('deleteComment', response.data);
                }).catch((error) => {
                    let errorText = 'Something was wrong';
                    if (error.response.status === 422) {
                        errorText = error.response.data.error
                    }
                    this._vm.$notify({
                        duration: 3000,
                        type: 'error',
                        text: errorText,
                    });
            }).finally(() => {

            });
        }
    }
};

export default comments
