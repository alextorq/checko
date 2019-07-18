import router from '../../../router/Frontend'
import { Base64 } from 'js-base64';
import Vue from  'vue'
import moment from 'moment'
import {runLoader, stopLoader} from 'Core/helpers/RunPreloader'


let sortList = {
    sortByComplete(a, b) {
        let aComplete = a.check_items.filter((item) => {return item.complete == true}).length;
        let bComplete = b.check_items.filter((item) => {return item.complete == true}).length;

        let aAll = a.check_items.length;
        let bAll = b.check_items.length;

        let aValue = (!aComplete) ? 0 : Math.ceil(aComplete / (aAll / 100));
        let bValue = (!bComplete) ? 0 : Math.ceil(bComplete / (bAll / 100));

        return aValue - bValue;
    },
    sortByDate(a, b) {
      return moment.utc(a.created_at).diff(moment.utc(b.created_at))
    },
    sortByModified(a, b) {
        return moment.utc(a.updated_at).diff(moment.utc(b.updated_at))
    }

};


const checkList = {
    state: {
        list: {
            name: '',
            check_list_id: null,
            complete: false,
            description: '',
            created_at: null,
            updated_at: null,
            user_id: null
        },
        allList: [],
        allListLoad: false,
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
        },
        checkListIsCreate(state) {
            return !!state.list.check_list_id;
        },
        completeLists(state) {
             return state.allList.filter((list) => {return list.complete == true})
        },
        unCompleteLists(state) {
            return state.allList.filter((list) => {return list.complete == false})
        },
    },
    mutations: {
        updateCheckList(state, data) {
            state.list = {...data};
        },
        clearList(state) {
            let  list =  {
                    name: '',
                    check_list_id: null,
                    complete: false,
                    description: '',
                    created_at: null,
                    updated_at: null,
                    user_id: null
                };
            state.list = list;
        },
        updateCheckListField(state, data) {
            let field = data.field;
            state.list[field] = data.value;
        },
        loadAllCheckList(state, lists) {
            state.allList = lists;
            state.allListLoad = true;
        },
        addNewListToLists(state, list) {
            state.allList.push(list)
        },
        sortListsBy(state, payload) {
            if (payload.direction === 'ASC') {
                state.allList.sort(sortList[payload.function_sort]);
            } else  {
                state.allList.sort(sortList[payload.function_sort]).reverse();
            }
        },
        deleteList(state, id) {
            let listForDelete = state.allList.findIndex((item) => {return item.check_list_id === id});
            state.allList.splice(listForDelete, 1);
        },
        selectCheckList(state, payload) {
            let id = payload.listID;
            let items = payload.items;
            let prevList = state.list;
            prevList.check_items = items;

            let prevListInArray = state.allList.findIndex(
                (listItem) => {return listItem.check_list_id === prevList.check_list_id}
                );

            let list = state.allList.find((listItem) => {return listItem.check_list_id === id});
            state.list = JSON.parse(JSON.stringify(list));

            Vue.set(state.allList, prevListInArray, prevList);
        }
    },
    actions: {
        createCheckList(context) {
            return new Promise((resolve, reject) => {
                axios
                    .post(`${context.state.URI.pref}${context.state.URI.POST.create}`, context.state.list)
                    .then(response => {
                        context.commit('updateCheckList', response.data);
                        context.commit('addNewListToLists', response.data);

                        this._vm.$notify({
                            duration: 3000,
                            type: 'success',
                            text: 'CheckList created',
                        });
                        let hashCodeURI = Base64.encodeURI(context.state.list.check_list_id);
                        router.push({name: 'CheckList', params: { list_id: hashCodeURI }});
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
        allCheckList(context) {
            if (context.state.allListLoad) {
                return
            }
            runLoader(context);
            axios
                .get(`${context.state.URI.pref}${context.state.URI.GET.all}`)
                .then(response => {
                    context.commit('loadAllCheckList', response.data)
                }).catch((err) => {
                console.log(err);
            }).finally(() => {
                stopLoader(context);
            });
        },
        cloneCheckList(context, id) {
            return new Promise((resolve, reject) => {
                axios.post(`/frontend/checklist/clone/${id}`).then((response) => {
                    context.commit('addNewListToLists', response.data);
                    this._vm.$notify({
                        duration: 3000,
                        type: 'success',
                        text: 'CheckList cloned',
                    });
                    resolve();
                }).catch(() => {
                    reject();
                })
            });
        },
        loadCheckList(context, encodeURI) {
            if (!context.state.list.check_list_id && encodeURI) {
                let listID;
                /*Декодируем строку и если не удалось то перекидываем на 404*/
                try {
                    listID = Base64.decode(encodeURI);
                }catch (e) {
                    router.push({name: '404'});
                    return
                }
                runLoader(context);
                axios
                    .post(`${context.state.URI.pref}${listID}`)
                    .then(response => {
                        context.commit('initStateCheckItems', response.data.check_items);
                        context.commit('updateCheckList', response.data);
                    }).catch((error) => {
                        if (error.response.status === 404) {
                            router.push({name: '404'});
                        }else {
                            console.log(error);
                        }
                }).finally(() => {
                    stopLoader(context);
                });
            }
        },
        checkCheckListOnComplete(context, payload) {
            let prevValue = context.state.list.complete;
            if(prevValue != payload) {
                context.commit('updateCheckListField', {
                    field: 'complete',
                    value: payload
                });
                context.dispatch('updateCheckListField');
            }
        },
        checkListDelete(context, id) {
            runLoader(context);
            return new Promise((resolve, reject) => {
                axios
                    .delete(`${context.state.URI.pref}${id}`)
                    .then(response => {
                        resolve()
                    }).catch((err) => {
                        console.log(err);
                        reject();
                    }).finally(() => {
                        stopLoader(context);
                    });
            });
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
