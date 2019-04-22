<template>
    <div class="form-registration-wrapper">

        <form action="/" method="post" @submit.prevent="send">

            <div class="flex-row jcb aic">
                <h2>Sign in</h2>
                <div class="sing-with-wrapper flex-row jcb aic">
                    <span>Sign in with</span>
                    <ul class="sing-with__list flex-row jcb aic">
                        <li class="sing-with__item"><a href="/provider?provider=google">
                            <img src="/images/google.png" alt="google">
                        </a></li>
                        <li class="sing-with__item"><a href="/provider?provider=facebook">
                            <img src="/images/facebook.png" alt="facebook">
                        </a></li>
                        <li class="sing-with__item"><a href="/provider?provider=twitter">
                            <img src="/images/twitter.png" alt="twitter">
                        </a></li>
                    </ul>
                </div>
            </div>
            <inputForm name="email" label="Е-mail" @error="errorUpdate" icon="mail" ref="email"
                       :required="true" :errors="emailError" :email="true" v-model="form.email.value"></inputForm>

            <inputFormPassword name="password" label="Password" @error="errorUpdate" :min="8"
                               icon="password" ref="password" :required="true"
                               :errors="passwordError" v-model="form.password.value"></inputFormPassword>

            <div class="flex-row jcb aic">
                <button>Sign in </button>

                <div class="form-links">
                    <router-link to="/registration">Create account</router-link>
                    <router-link to="/login">Forgot your password</router-link>
                </div>

            </div>

        </form>
    </div>
</template>

<script>
    import inputForm from '../FormInput'
    import inputFormPassword from '../FormInput/password'
    export default {
        name: "FormLogin",
        data() {
            return {
                form: {
                    email: {
                        value: '',
                        errors: [],
                        serverErrors: []
                    },
                    password: {
                        value: '',
                        errors: [],
                        serverErrors: []
                    },
                }
            }
        },
        computed: {
            emailError() {
                return this.form.email.errors.concat(this.form.email.serverErrors)
            },
            passwordError() {
                return this.form.password.errors.concat(this.form.password.serverErrors)
            },
        },
        methods: {
            errorUpdate(error) {
                this.clearError(error.name);

                let errors = this.form[error.name].errors;
                let fieldError = error.filed;

                let errorIndex = -1;
                errors.forEach(function (item, index) {
                    if (item.filed === fieldError) {
                        errorIndex = index
                    }
                });

                let statusSearch = !!(errorIndex + 1);

                if (error.action && !statusSearch) {
                    errors.push(error);
                }else {
                    if  (statusSearch && !error.action) {
                        errors.splice(errorIndex, 1);
                    }
                }
            },
            validate() {
                for (let filed in this.form) {
                    if (this.$refs[filed]) {
                        this.$refs[filed].validate();
                    }
                }
                for (let filed in this.form) {
                    filed = this.form[filed];
                    let errors = filed.errors;
                    if (errors.length) {
                        return false
                    }
                }
                return true
            },
            clearError(name) {
                if (!name) {
                    for (let filed in this.form) {
                        filed = this.form[filed];
                        filed.serverErrors = [];
                    }
                }else  {
                    let filed = this.form[name];
                    filed.serverErrors = [];
                }
            },
            send() {
                if (this.validate()) {
                    axios.post('/login', {
                        email: this.form.email.value,
                        password: this.form.password.value,
                    })
                    .then((responce) => {
                        this.$store.commit('updateUser', responce.data);
                        this.$router.push({
                            name: 'Blank'
                        });
                    })
                    .catch((error) => {
                        if (error.response.status === 422) {
                            this.showErrors(error.response.data.errors)
                        }
                    });
                }
            },
            showErrors(errors) {
                for (let error in errors) {
                    let errorMessages = errors[error];
                    this.form[error].serverErrors.push(...errorMessages);
                }
            },
        },
        components: {
            inputForm,
            inputFormPassword
        }
    }
</script>

