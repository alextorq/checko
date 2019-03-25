function pushPathToNavigate(title, id) {
    document.title = title;
    window.history.pushState({
        "pageTitle": title
    },
        title, `/frontend/checklist/${id}`);
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
                        pushPathToNavigate(context.state.list.name, context.state.list.check_list_id);
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
        saveCheckList(context) {
            axios
                .put(`${context.state.URI.pref}${context.state.URI.PUT.edit}`, this.checkList)
                .then(response => {
                    console.log(response.data);
                }).catch((err) => {
                    console.log(err);
            });
        }
    }
};

export default checkList
