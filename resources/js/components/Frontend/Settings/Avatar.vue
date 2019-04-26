<template>
    <div class="avatar-container" :class="loadingStyle">
        <span class="loading-icon">
            <span>
                <svg >
                  <use xlink:href="/images/sprites.svg#sprite-circle"></use>
                </svg>
            </span>
        </span>

        <div v-if="avatarStatus" class="avatar-wrapper" :style="{ backgroundImage: 'url(' + avatar + ')' }">
            <input type="file" class="custom-file-input" name="avatar" @change="onFileChanged"
                   accept=".jpg, .jpeg, .png, .gif, .svg">

            <span class="icon">
            <svg >
                <use xlink:href="/images/sprites.svg#sprite-edit"></use>
            </svg>
        </span>
        </div>
        <div v-else class="avatar-wrapper">
            {{userInitials}}
            <input type="file" class="custom-file-input" name="avatar" @change="onFileChanged">
            <span class="icon">
            <svg >
                <use xlink:href="/images/sprites.svg#sprite-edit"></use>
            </svg>
        </span>
        </div>

        <ul class="errors-list">
            <li v-for="error in errors">{{error}}</li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "Avatar",
        data() {
            return {
                selectedFile: null,
                errors: [],
                loading: false
            }
        },
        computed: {
            avatar() {
                return this.$store.state.user.user.avatar;
            },
            avatarStatus() {
                return !!this.$store.state.user.user.avatar;
            },
            userInitials() {
                return this.$store.getters.userInitials;
            },
            loadingStyle() {
                return {
                    loading: this.loading
                }
            }

        },
        methods: {
            onFileChanged(event) {
                this.selectedFile = event.target.files[0];
                this.onUpload();
                this.clearError();
            },
            onUpload() {
                const formData = new FormData();
                formData.append('avatar', this.selectedFile, this.selectedFile.name);
                this.loading = true;

                axios.post('/frontend/user/change_avatar', formData)
                    .then((response) => {this.updateUser(response.data)})
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
                })
                .finally(() => {
                    this.loading = false
                })
            },
            showErrors(errors) {
                this.errors.push(...errors.avatar);
            },
            clearError() {
                this.errors = [];
            },
            updateUser(avatar) {
              this.$store.commit('updateUserField',   {field: 'avatar', value: avatar});
            }
        }
    }
</script>

