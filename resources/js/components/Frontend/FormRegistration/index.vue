<template>
    <div class="form-registration-wrapper">

        <form action="/" method="post" @submit.prevent="send">
            <h2>Sign up and start your <span>7 day free trial</span></h2>

            <inputForm name="name" label="Username" @error="errorUpdate" icon="user" ref="name"
                       :required="true" :errors="nameError" :min="4" v-model="form.name.value"></inputForm>

            <inputForm name="email" label="Е-mail" @error="errorUpdate" icon="mail" ref="email"
                   :required="true" :errors="emailError" :email="true" v-model="form.email.value"></inputForm>


            <inputFormPassword name="password" label="Password" @error="errorUpdate" :min="8"
                               icon="password" ref="password" :required="true"
                               :errors="passwordError" v-model="form.password.value"></inputFormPassword>

            <inputFormPassword name="password_confirmation" label="Repeat password" @error="errorUpdate" :min="8"
                               icon="password" ref="password_confirmation" :required="true" :repeat="form.password.value"
                               :errors="password_confirmationError" v-model="form.password_confirmation.value">
            </inputFormPassword>


            <div class="flex-row jcb aic">
                <button>SING UP</button>
                <router-link to="/login">I have an account</router-link>
            </div>

        </form>
    </div>
</template>

<script>
    import inputForm from '../FormInput'
    import inputFormPassword from '../FormInput/password'

    export default {
        name: "FormRegistration",
        data() {
            return {
                form: {
                    name: {
                        value: '',
                        errors: [],
                        serverErrors: []
                    },
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
                    password_confirmation: {
                        value: '',
                        errors: [],
                        serverErrors: []
                    }
                }
            }
        },
        computed: {
            nameError() {
                return this.form.name.errors.concat(this.form.name.serverErrors)
            },
            emailError() {
                return this.form.email.errors.concat(this.form.email.serverErrors)
            },
            passwordError() {
                return this.form.password.errors.concat(this.form.password.serverErrors)
            },
            password_confirmationError() {
                return this.form.password_confirmation.errors.concat(this.form.password_confirmation.serverErrors)
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
                   axios.post('/register', {
                       name: this.form.name.value,
                       email: this.form.email.value,
                       password: this.form.password.value,
                       password_confirmation: this.form.password_confirmation.value,
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

