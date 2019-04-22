
function updateToken(payload) {
    if (payload.token) {
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = payload.token;
    }else {
        console.log('Warning token not found')
    }
}

const user = {
    state: {
        user: {
            user_id: null,
            name: ' '
        },
        URI: {
            pref: '/frontend/user/',
            POST: {
                create: 'create'
            },
            GET: {
                'iam': 'iam',
            },
            PUT: {
                edit: 'edit'
            },
            DELETE: {}
        }
    },
    getters: {
        userName(state) {
            return state.user.name;
        },
        userLoginStatus(state) {
            // return false ;
            return state.user.user_id !== null && state.user.user_id !== undefined;
        },
        userInitials(state) {
            if (state.user.name) {
                let userWord = state.user.name.split(' ');
                let userInitials = [];
                userInitials.push(userWord[0].split('')[0]);
                if (userWord.length > 1) {
                    userInitials.push(userWord[1].split('')[0]);
                }
                return userInitials.join('');
            }
            return '';
        }

    },
    mutations: {
        updateUser(state, payload) {
            if (payload) {
                state.user = payload;
                updateToken(payload);
            }
        },
    },
    actions: {
        getUser(context) {
            axios.get(`${context.state.URI.pref}${context.state.URI.GET.iam}`)
                .then((responce) => {
                    context.commit('updateUser',responce.data.user)
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }
};

export default user
