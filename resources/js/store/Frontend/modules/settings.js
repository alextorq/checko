function saveSettings(payload) {
    let settings = JSON.parse(localStorage.getItem('settings'));
    if (!settings) {
        settings = {
            options: [],
        };
    }
    settings.options.push(payload);

    localStorage.setItem('settings', JSON.stringify(settings));
}

const userSettings = {
    state: {
        /*false: localstorage
        * true: server (если пользователь авторизован)
        * */
        locationStore: false,
        settings: {
            addToEndList: {
                value: true,
                options: [false, true]
            },
            newListForComplete: {
                value: false,
                options: [false, true]
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
        },
        getNewListForComplete(store) {
            return store.settings.newListForComplete.value
        },
        getOrderCreateSetting(store) {
            return store.settings.addToEndList.value
        }
    },
    mutations: {
        updateSettings(state, payload) {
            state.settings[payload.nameSetting].value = payload.value;
            if (payload.name)  {
                state.settings[payload.nameSetting].name = payload.name
            }
            saveSettings(payload);
        },
        loadSettings(state) {
            let settings = JSON.parse(localStorage.getItem('settings'));
            if (settings)  {
                let options = settings.options;
                for (let setting of options) {
                    state.settings[setting.nameSetting].value = setting.value;
                    if (setting.name)  {
                        state.settings[setting.nameSetting].name = setting.name
                    }
                }
            }
        }
    },
    actions: {

    }
};

export default userSettings
