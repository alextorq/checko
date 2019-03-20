const user = {
    state: {
        iAm: null,
        URI: {
            pref: '/admin_api/v1/users/',
            POST: {},
            GET: {
                'iam': 'iam',
            },
            DELETE: {}
        }
    },
    getters: {
        iAm(state) {
            return state.iAm;
        }
    },
    mutations: {
        addIAm(state, payload) {
            state.iAm = payload;
        }
    },
    actions: {
        getIam(context) {
            axios
                .get(context.state.URI.pref + context.state.URI.GET.iAm)
                .then(response => {
                    context.commit('addIAm', response.data.user);
                });
        }
    }
}

export default user
