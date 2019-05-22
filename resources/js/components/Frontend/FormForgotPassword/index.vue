<template>
    <div class="form-registration-wrapper form-forgot">

        <form action="/" method="post" @submit.prevent="send">

            <div class="flex-row jcb aic">
                <h2>Forgot your password?</h2>

                <div class="text-default">
                    Enter your email address that you used to register.
                    We'll send you an email with your username and a link to reset your password.
                </div>
            </div>

            <inputForm name="email" label="Е-mail" @error="errorUpdate" icon="mail" ref="email"
                       :required="true" :errors="emailError" :email="true" v-model="form.email.value"></inputForm>


            <div class="flex-row jcb aic">
                <button class="button">Send</button>

                <div class="form-links">
                    <router-link to="/registration">Create account</router-link>
                </div>

            </div>

        </form>
    </div>
</template>

<script>
    import inputForm from '../FormInput'
    import inputFormPassword from '../FormInput/password'

    export default {
        name: "ForgotPassword",
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
                        axios.post('/password/email', {
                            email: this.form.email.value
                        })
                        .then((responce) => {
                            this.$notify({
                                duration: -1,
                                type: 'success',
                                text: 'A message has been sent to you by email with instructions on how to reset your password.'
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
