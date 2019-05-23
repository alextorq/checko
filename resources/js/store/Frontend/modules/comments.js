import Vue from  'vue'
import {runLoader, stopLoader} from 'Core/helpers/RunPreloader'

const comments = {
    state: {
        comment_id: null,
        comments: {},
        loadStatus: false,
        URI: {
            pref: '/frontend/checkitem_comment/',
            POST: {
                create: 'comments',
            },

            GET: {
                'all': 'comments/',
            },
            PUT: {
                edit: 'comments/'
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
        editComment(state, {check_item_id, comment}) {
            let commentID = comment.comment_id;
            let allComment = state.comments[check_item_id];
            let oldComment = allComment.find((item) => {
               return commentID === item.comment_id;
            });
            oldComment = comment;
        }
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
                            duration: -1,
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
                runLoader(context);
                axios
                    .post(`${context.state.URI.pref}${context.state.URI.POST.create}`, comment)
                    .then(response => {
                        context.commit('addComment', response.data);
                        resolve()
                    }).catch((err) => {
                        console.log(err);
                        reject();
                }).finally(() => {
                    stopLoader(context);
                })
            });
        },
        deleteComment(context, id) {
            runLoader(context);
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
                stopLoader(context);
            });
        },
        editComment(context, {id, comment}) {
            runLoader(context);
            axios
                .put(`${context.state.URI.pref}${context.state.URI.PUT.edit}${id}`, comment)
                .then(response => {
                    context.commit('editComment', response.data)
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
                    stopLoader(context);
                })
        }
    }
};

export default comments
