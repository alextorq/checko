<template>
    <div class="settings account">

        <div class="account-info" v-if="userLoginStatus">
            <div class="avatar-wrapper">{{userInitials}}</div>
            <div class="info-wrapper">
                <div>
                    {{userName}}
                </div>
                <span class="email">
                    {{userEmail}}
                </span>
            </div>
        </div>

        <h3>Change Password</h3>
        <form>
            <inputFormPassword name="oldPassword" label="Old password" @error="errorUpdate" :min="8"
                               icon="password" ref="oldPassword" :required="true"
                               :errors="passwordError" v-model="form.oldPassword.value"></inputFormPassword>

            <inputFormPassword name="newPassword" label="New password" @error="errorUpdate" :min="8"
                               icon="password" ref="newPassword" :required="true"
                               :errors="passwordError" v-model="form.newPassword.value"></inputFormPassword>

            <inputFormPassword name="repeatPassword" label="Repeat password" @error="errorUpdate" :min="8"
                               icon="password" ref="repeatPassword" :required="true"
                               :errors="passwordError" v-model="form.repeatPassword.value"></inputFormPassword>
        </form>

        <h4>Logout</h4>
    </div>
</template>

<script>
    import inputFormPassword from '../FormInput/password'

    export default {
        name: "Account",
        data() {
            return {
                form: {
                    oldPassword: {
                        value: '',
                        errors: [],
                        serverErrors: []
                    },
                    newPassword: {
                        value: '',
                        errors: [],
                        serverErrors: []
                    },
                    repeatPassword: {
                        value: '',
                        errors: [],
                        serverErrors: []
                    },
                }
            }
        },
        computed: {
            passwordError() {
                return this.form.oldPassword.errors.concat(this.form.oldPassword.serverErrors)
            },
            userName () {
                return this.$store.getters.userName;
            },
            userInitials() {
                return this.$store.getters.userInitials;
            },
            userLoginStatus() {
                return this.$store.getters.userLoginStatus;
            },
            userEmail() {
                return this.$store.state.user.user.email;
            }
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
                        password: this.form.password.value,
                        newPassword: this.form.newPassword.value
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
            inputFormPassword
        }
    }
</script>
