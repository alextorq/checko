const availabilities = {
    state: {
        availabilitiesList: [],
        URI: {
            pref: '/admin_api/v1/permissions/availability/',
            POST: {},
            GET: {
                'all': 'all',
            },
            DELETE: {}
        }
    },
    getters: {
        availabilities(state) {
            return state.availabilitiesList;
        }
    },
    mutations: {
        addAvailabilities(state, payload) {
            state.availabilitiesList = payload.ability;
        }
    },
    actions: {
        getavailabilities(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get(context.state.URI.pref + context.state.URI.GET.all)
                    .then(response => {
                        context.commit('addAvailabilities', response.data);
                        resolve();
                    }).catch((err) => {
                    reject(err)
                });
            });
        }
    }
}

export default availabilities
