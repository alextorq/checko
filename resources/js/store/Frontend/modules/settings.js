const userSettings = {
    state: {
        /*false: localstorage
        * true: server (если пользователь авторизован)
        * */
        locationStore: false,
        settings: {
            sortIncomplete: {
                value: 'ASC',
                options: ['ASC', 'DESC']
            },
            dateFormat: {
                value: 'DD-MM-YYYY',
                name: '31.12.2019',
                options: [
                    {
                        name: '31.12.2019',
                        value: 'DD-MM-YYYY'
                    },
                    {
                        name: '12.31.2019',
                        value: 'MM-DD-YYYY'
                    }
                ]
            },
            moveCompleteToList: {
                value: false,
                options: [false, true]
            },
            progressDisplay: {
                value:  '/',
                name: 'percent (5/7)',
                options: [
                    {
                        name: 'percent (10%)',
                        value: '%'
                    },
                    {
                        name: 'percent (5/7)',
                        value: '/'
                    }
                ]
            }
        },
        user: {

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
        settingProgressViewType(state) {
            return state.settings.progressDisplay.value;
        },
        getProgressDisplay(store) {
            return store.settings.progressDisplay.options;
        },
        getDateFormat(store) {
            return store.settings.dateFormat.options;
        },
        getDateFormatDefault(store) {
            return {
                name: store.settings.dateFormat.name,
                value: store.settings.dateFormat.value
            }
        },
        getProgressDisplayDefault(store) {
            return {
                name: store.settings.progressDisplay.name,
                value: store.settings.progressDisplay.value
            }
        }
    },
    mutations: {
        updateSettings(state, payload) {
            state.settings[payload.nameSetting].value = payload.value;
            state.settings[payload.nameSetting].name = payload.name
        }
    },
    actions: {

    }
};

export default userSettings
