const checkItems = {
    state: {
        checkItems: [],
        URI: {
            pref: '/frontend/checkitem/',
            POST: {
                create: 'create'
            },
            GET: {
                'all': 'all',
            },
            DELETE: {
                delete: 'delete'
            },
            PUT:{
                edit: 'edit'
            }
        }
    },
    getters: {
        completeItems(state) {
            return state.checkItems.filter((item) => item.complete);
        },
        inCompleteItems(state) {
            return state.checkItems.filter((item) => !item.complete);
        },
        completeDone(state) {
            let complete = state.checkItems.filter((item) => item.complete);
            return Math.ceil(complete.length / (state.checkItems.length / 100)) === 100;
        },
        completeViewProgress(state) {
            if (state.checkItems.length > 0) {
                let complete = state.checkItems.filter((item) => item.complete).length;
                let all = state.checkItems.length;
                return {
                    all,
                    complete
                }
            }
            return {all: 0, complete: 0};
        },
        completePercent(state) {
            if (state.checkItems.length > 0) {
                let complete = state.checkItems.filter((item) => item.complete);
                return Math.ceil(complete.length / (state.checkItems.length / 100));
            }
            return 0;
        }
    },
    mutations: {
        initStateCheckItems(state, data) {
            state.checkItems.push(...data);
        },
        deleteCheckItem(state, id) {
            let index = state.checkItems.findIndex((item) => {return item.check_item_id === id});
            state.checkItems.splice(index, 1);
        },
        updateCheckItem(state, data) {
            let id = data.id;
            let field = data.field;
            let item = state.checkItems.find((item) => {return item.check_item_id === id});
            item[field] = data.value;
        },
        updateId(state, data) {
            let item = state.checkItems.find((item) => {return item.check_item_id === data.idBefore});
            item.check_item_id = data.item.check_item_id;
            item.check_list_id = data.item.check_list_id;
        },
        addNewItem(state) {
            //TODO переделать order в зависимости от нстроек пользователя
            let allItems = state.checkItems.length;

            let item = {
                name: 'Enter name task',
                description: "description",
                complete: false,
                timestamp_id: new Date().getTime(),
                check_item_id: null,
                check_list_id: null,
                order: allItems,
                date_complete: null,
                created_at: null,
                updated_at: null
            };
            state.checkItems.push(item);
        }
    },
    actions: {
        editCheckItem(context, payload) {
            context.commit('updateCheckItem', payload);
            if (payload.update) {
                axios
                    .put(`${context.state.URI.pref}${context.state.URI.PUT.edit}/${payload.id}`, {item: payload.item})
                    .then(response => {
                        console.log(response.data)
                    }).catch((err) => {
                        console.log(err);
                        this._vm.$notify({
                            duration: 3000,
                            type: 'error',
                            text: 'Task is not change',
                        });
                })
            }
        },
        deleteCheckItem(context, id) {
            context.commit('deleteCheckItem', id);
            axios
                .delete(`${context.state.URI.pref}${context.state.URI.DELETE.delete}/${id}`)
                .then(response => {
                    console.log(response.data)
                }).catch((err) => {
                    console.log(err);
                    this._vm.$notify({
                        duration: 3000,
                        type: 'error',
                        text: 'Task is not deleted',
                    });
            })
        },
        addNewItem(context, id) {
            /*
            * Создаем item без ожидания запроса и потом подменяем id
            * */
            context.commit('addNewItem');
            let item = context.state.checkItems[context.state.checkItems.length - 1];
            let itemToSend = Object.assign({}, item, {check_list_id: id});
            axios.post(`${context.state.URI.pref}${context.state.URI.POST.create}`, itemToSend)
                .then(response => {
                    /*Подмена*/
                    context.commit('updateId', {idBefore: item.check_item_id, item: response.data});
                }).catch((err) => {
                    this._vm.$notify({
                        duration: 3000,
                        type: 'error',
                        text: 'Task is not created',
                    });
                    console.log(err)
            });
        },
    }
};

export default checkItems
