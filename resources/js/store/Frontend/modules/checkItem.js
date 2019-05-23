import {runLoader, stopLoader} from 'Core/helpers/RunPreloader'

function sortByOrder(items) {
    items.sort((a, b) => {
        let result = (a.order - b.order) !== 0 ? a.order - b.order : b.timestamp_id - a.timestamp_id;
        return result;
    });
}



const checkItems = {
    state: {
        checkItems: [],
        last: null,
        URI: {
            pref: '/frontend/checkitem/',
            POST: {
                create: 'create',
                order: 'order'
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
        /*Для отслеживания изменений на watch,
         что бы отслеживать выполенность чеклиста*/
        completeDone(state) {
            let complete = state.checkItems.filter((item) => item.complete);
            return Math.ceil(complete.length / (state.checkItems.length / 100)) === 100;
        },
        completeViewProgress(state) {
            let complete, all  = 0;
            if (state.checkItems.length > 0) {
                complete = state.checkItems.filter((item) => item.complete).length;
                all = state.checkItems.length;
            }
            return {all, complete};
        }
    },
    mutations: {
        clearItems(state) {
            state.checkItems = [];
            state.last = null;
        },
        initStateCheckItems(state, data) {
            sortByOrder(data);
            state.checkItems = [];
            state.checkItems.push(...data);
        },
        updateListOrder(state, data) {
            for (let i = 0; i < data.length; i++)  {
                let item = data[i];
                item.order = i;
            }
            sortByOrder(state.checkItems);
        },
        deleteCheckItem(state, id) {
            let index = state.checkItems.findIndex((item) => {return item.check_item_id === id});
            state.checkItems.splice(index, 1);
        },
        updateCheckItemField(state, data) {
            let id = data.timestamp_id;
            let field = data.field;
            let item = state.checkItems.find((item) => {return item.timestamp_id === id});
            if (Array.isArray(field)) {
                for (let oneField = 0; oneField < field.length; oneField++) {
                    let fieldName = field[oneField];
                    item[fieldName] = data.value[oneField];
                }
            }else {
                item[field] = data.value;
            }
        },
        updateId(state, data) {
            let item = data.itemBefore;
            item.check_item_id = data.item.check_item_id;
            item.check_list_id = data.item.check_list_id;
        },
        addCheckItem(state, checkListId) {
            // let orderToCreate = context.rootGetters.getOrderCreateSetting;
            // if (!orderToCreate) {
            //     orderNumber = 0;
            // }
            let orderNumber = state.checkItems.length;

            let item = {
                name: '',
                description: "description",
                complete: false,
                timestamp_id: new Date().getTime(),
                check_item_id: null,
                check_list_id: checkListId,
                order: orderNumber,
                date_complete: null,
                created_at: null,
                updated_at: null
            };
            state.checkItems.push(item);
            sortByOrder(state.checkItems);
            // state.last = item;
        }
    },
    actions: {
        updateListOrder(context, payload) {
            context.commit('updateListOrder', payload);
            runLoader(context);
            axios.post(`${context.state.URI.pref}${context.state.URI.POST.order}`, {items: payload})
                .then(response => {

                }).catch((err) => {
                    this._vm.$notify({
                        duration: 3000,
                        type: 'error',
                        text: 'Task is not created',
                    });
                    console.log(err)
            }).finally(() => {
                stopLoader(context);
            });
        },
        updateCheckItemField(context, timestamp_id) {
                let item = context.state.checkItems.find((checkItem) => {return checkItem.timestamp_id === timestamp_id});
                let id = item.check_item_id;
                if (!id) {
                    context.dispatch('addCheckItem', timestamp_id);
                    return
                }
                runLoader(context);
                axios
                    .post(`${context.state.URI.pref}${context.state.URI.PUT.edit}/${id}`, {item: item})
                    .then(response => {
                        // console.log(response.data);
                    }).catch((err) => {
                        console.log(err);
                        this._vm.$notify({
                            duration: 3000,
                            type: 'error',
                            text: 'Task is not change',
                        });
                    }).finally(() => {
                        stopLoader(context);
                    });
        },
        deleteCheckItem(context, id) {
            if (id) {
                context.commit('deleteCheckItem', id);
                runLoader(context);
                axios
                    .delete(`${context.state.URI.pref}${context.state.URI.DELETE.delete}/${id}`)
                    .then(response => {
                        // console.log(response.data)
                    }).catch((err) => {
                        console.log(err);
                        this._vm.$notify({
                            duration: 3000,
                            type: 'error',
                            text: 'Task is not deleted',
                        });
                    }).finally(() => {
                        stopLoader(context);
                    });
            }
        },
        addCheckItem(context, timestamp_id) {
            runLoader(context);
            let item = context.state.checkItems.find((checkItem) => {return checkItem.timestamp_id === timestamp_id});

            axios.post(`${context.state.URI.pref}${context.state.URI.POST.create}`, item)
                .then(response => {
                    /*Подмена*/
                    context.commit('updateId', {itemBefore: item, item: response.data});
                }).catch((err) => {
                    this._vm.$notify({
                        duration: 3000,
                        type: 'error',
                        text: 'Task is not created',
                    });
                    console.log(err)
            }).finally(() => {
                stopLoader(context);
            });
        },
    }
};

export default checkItems
