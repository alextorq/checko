<template>
    <div class="settings account">

        <div class="account-info" v-if="userLoginStatus">
            <Avatar></Avatar>
            <div class="info-wrapper">
                <div class="account-info__name">
                    <nameInput :value="userName"></nameInput>
                </div>
                <span class="account-info__email">
                    {{userEmail}}
                </span>
            </div>
        </div>

        <h3>Change Password</h3>
        <form method="post" action="/frontend/user/change_password" @submit.prevent="send">
            <inputFormPassword name="oldPassword" label="Old password" @error="errorUpdate" :min="8"
                               icon="password" ref="oldPassword" :required="true" autocomplete="current-password"
                               :errors="oldPasswordError" v-model="form.oldPassword.value"></inputFormPassword>

            <inputFormPassword name="newPassword" label="New password" @error="errorUpdate" :min="8"
                               icon="password" ref="newPassword" :required="true" autocomplete="new-password"
                               :errors="newPasswordError" v-model="form.newPassword.value"></inputFormPassword>

            <inputFormPassword name="newPassword_confirmation" label="Repeat password" @error="errorUpdate" :min="8"
                               icon="password" ref="newPassword_confirmation" :required="true"
                               :repeat="form.newPassword.value" autocomplete="new-password"
                               :errors="newPassword_confirmation" v-model="form.newPassword_confirmation.value">
            </inputFormPassword>

            <input type="hidden" name="username" autocomplete="username">
            <button class="button" type="submit">Change</button>
        </form>

        <button @click="logout" class="logout">Logout</button>

    </div>
</template>

<script>
    import inputFormPassword from '../FormInput/password'
    import nameInput from  './NameInput'
    import Avatar from './Avatar'

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
                    newPassword_confirmation: {
                        value: '',
                        errors: [],
                        serverErrors: []
                    },
                }
            }
        },
        computed: {
            oldPasswordError() {
                return this.form.oldPassword.errors.concat(this.form.oldPassword.serverErrors)
            },
            newPasswordError() {
                return this.form.newPassword.errors.concat(this.form.newPassword.serverErrors)
            },
            newPassword_confirmation() {
                return this.form.newPassword_confirmation.errors.concat(this.form.newPassword_confirmation.serverErrors)
            },
            userName() {
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
                    axios.post('/frontend/user/change_password', {
                        oldPassword: this.form.oldPassword.value,
                        newPassword: this.form.newPassword.value,
                        newPassword_confirmation: this.form.newPassword_confirmation.value
                    }).then(() => {
                        this.clearForm();
                        this.$notify({
                            duration: 1000,
                            type: 'success',
                            text: 'Password is change',
                        });
                    })
                    .catch((error) => {
                        if (error.response.status === 422) {
                            this.showErrors(error.response.data.errors)
                        }else {
                            this.$notify({
                                duration: 1000,
                                type: 'error',
                                text: error.response.data.message,
                            });
                        }
                    });
                }
            },
            clearForm() {
                for (let filed in this.form) {
                    if (this.form[filed]) {
                        this.form[filed].value = '';
                    }
                }
            },
            showErrors(errors) {
                for (let error in errors) {
                    let errorMessages = errors[error];
                    this.form[error].serverErrors.push(...errorMessages);
                }
            },
            logout() {
                this.$store.dispatch('logout');
            }
        },
        components: {
            inputFormPassword,
            nameInput,
            Avatar
        }
    }
</script>
