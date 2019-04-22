import router from '../../../router/Frontend'
import store from "../index";

function runLoader(context) {
    let status = context.rootGetters.isLoad;
    if (!status) {
        context.commit('updateLoadStatus', true);
    }
    window.countLoad = window.countLoad + 1;
}


function stopLoader(context) {
    window.countLoad = window.countLoad - 1;
    if (window.countLoad < 1) {
        context.commit('updateLoadStatus', false);
    }
}

const checkList = {
    state: {
        list: {
            name: 'CheckList name',
            check_list_id: null,
            complete: false,
            description: 'description',
            created_at: null,
            updated_at: null,
            user_id: null
        },
        URI: {
            pref: '/frontend/checklist/',
            POST: {
                create: 'create'
            },
            GET: {
                'all': 'all',
            },
            PUT: {
                edit: 'edit'
            },
            DELETE: {}
        }
    },
    getters: {
        checkListName(state) {
            return state.name;
        },
        checkListId(state) {
            return state.list.check_list_id;
        }
    },
    mutations: {
        initStateCheckList(state, data) {
            delete data.check_items;
            state.list = {...data};
        },
        updateCheckList(state, data) {
            state.list = {...data};
        },
        updateCheckListField(state, data) {
            let field = data.field;
            state.list[field] = data.value;
        }
    },
    actions: {
        createCheckList(context) {
            return new Promise((resolve, reject) => {
                axios
                    .post(`${context.state.URI.pref}${context.state.URI.POST.create}`, context.state.list)
                    .then(response => {
                        context.commit('updateCheckList', response.data);
                        this._vm.$notify({
                            duration: 3000,
                            type: 'success',
                            text: 'CheckList created',
                        });
                        router.push({name: 'CheckList', params: { list_id: context.state.list.check_list_id }});
                        resolve(context.state.list.check_list_id);
                    }).catch((err) => {
                        this._vm.$notify({
                            duration: 3000,
                            type: 'error',
                            text: 'CheckList is not created',
                        });
                        reject(err);
                    });
            });
        },
        checkCheckListOnComplete(context, payload) {
            let value = (payload === 100);
            //Если статус не изменился то ничего не делаем
            if (context.state.list.complete != value)  {
                context.commit('updateCheckListField', {
                    field: 'complete',
                    value: value
                });
                context.dispatch('updateCheckListField');
            }
        },
        updateCheckListField(context) {
            runLoader(context);
            axios
                .put(`${context.state.URI.pref}${context.state.URI.PUT.edit}`, context.state.list)
                .then(response => {
                    // console.log(response.data);
                }).catch((err) => {
                    console.log(err);
                }).finally(() => {
                    stopLoader(context);
                });
        },

    }
};



export default checkList
