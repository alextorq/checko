const checklist = {
    state: {
        iAm: null,
        URI: {
            pref: '/admin_api/v1/checklist/',
            POST: {},
            GET: {
                'iam': 'iam',
            },
            DELETE: {}
        }
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        checkListDelete(context, id) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`${context.state.URI.pref}${id}`)
                    .then(response => {
                        resolve()
                    }).catch((err) => {
                        console.log(err);
                        reject();
                }).finally(() => {

                });
            });
        },
        checkListGetOne(context, id) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`${context.state.URI.pref}${id}`)
                    .then(response => {
                        resolve(response.data)
                    }).catch((error) => {
                        console.log(error);
                        reject();
                }).finally(() => {

                });
            });

        }
    }
};

export default checklist
