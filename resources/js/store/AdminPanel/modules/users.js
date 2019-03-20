const users = {
    state: {
        users: [],
        lastRegisteredUser: [],
        usersLoad: true,
        URI: {
            pref: '/admin_api/v1/users/',
            POST: {

            },
            GET: {
                'all': 'all',
                'last': 'last_users',
                'user': ''
            },
            PUT: {
                'restore': 'restore/'
            },
            DELETE: {
                user: ''
            }
        }
    },
    getters: {
        users(state) {
              return state.users;
        },
        getUserByID(state) {
          return function (id) {
            return state.users.find((item) => {
                return item.user_id === id;
            });
          }
        },
        userLoadStatus(state) {
            return state.usersLoad;
        },
        lastRegisteredUser(state) {
            return state.lastRegisteredUser;
        }
    },
    mutations: {
        addUsers(state, payload) {
            state.users = payload;
            state.usersLoad = false;
        },
        addLastUsers(state, payload) {
            state.lastRegisteredUser = payload;
        }
    },
    actions: {
        getAllUsers(context) {
            axios
                .get(context.state.URI.pref + context.state.URI.GET.all)
                .then(response => {
                    context.commit('addUsers', response.data.users);
                });
        },
        getLastUsers(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get(context.state.URI.pref + context.state.URI.GET.last)
                    .then(response => {
                        context.commit('addLastUsers', response.data.users);
                        resolve();
                    }).catch((err) => {
                        reject(err);
                     });
            });
        },
        restoreUser(context, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .put(context.state.URI.pref + context.state.URI.PUT.restore + payload)
                    .then(response => {
                        resolve(response.data);
                    }).catch((err) => {
                        reject(err);
                    })
            });
        },
        getUserByID(context, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get(context.state.URI.pref + payload)
                    .then(response => {
                        resolve(response.data);
                    }).catch((err) => {
                        reject(err);
                    })
            });
        },
        deleteUser(context, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`${context.state.URI.pref + context.state.URI.DELETE.user + payload.id}`,
                        {params: {force: payload.force}})
                    .then(response => {
                        resolve(response);
                        context.dispatch('getAllUsers');
                    }).catch(error => {
                         reject(error)
                    })
            });
        }
    }
}

export default users
