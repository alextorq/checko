<template>
    <div class="name-wrapper" :class="focus">

        <input type="text" name="name" v-autosize="value" ref="name"  @keyup="validate" v-model.trim="name" @blur="changeName"></input>

        <span class="icon" @click="focusInput">
            <svg >
                <use xlink:href="/images/sprites.svg#sprite-edit"></use>
            </svg>
        </span>

        <ul class="error-message">
            <li v-for="error in errors">
                <span>{{error}}</span>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "NameInput",
        data() {
            return {
                name: '',
                rules: {
                    min: {
                        required: true,
                        value: 4
                    }
                },
                errors: []
            }
        },
        computed: {
            focus() {
                return {
                    focus: !!this.value,
                    error: !!this.errors.length,
                }
            }
        },
        methods: {
             focusInput() {
                this.$refs.name.focus();
            },
            validate() {
                if (!this.name) {
                    if (!this.errors.includes('the name is required')) {
                        this.errors.push('the name is required')
                    }
                }else {
                    if (this.errors.includes('the name is required')) {
                        this.errors.splice(this.errors.indexOf('the name is required'), 1)
                    }
                }
                if (this.rules.min.required) {
                    this.minValidate();
                }
            },
            minValidate() {
                if (this.name.length < this.rules.min.value) {
                    if (!!this.name) {
                        if (!this.errors.includes(`min chars is ${this.rules.min.value}`)) {
                            this.errors.push(`min chars is ${this.rules.min.value}`)
                        }
                    }
                } else {
                    if (this.errors.includes(`min chars is ${this.rules.min.value}`)) {
                        this.errors.splice(this.errors.indexOf(`min chars is ${this.rules.min.value}`), 1)
                    }
                }
            },
            changeName() {
                if (this.errors.length < 1 && this.value !== this.name) {
                    axios.post('/frontend/user/change_name', {
                        name: this.name
                    }).then(() => {
                        this.$notify({
                            duration: 1000,
                            type: 'success',
                            text: 'Name is change',
                        });
                        this.$store.commit('updateUserField', {field: 'name', value: this.name})
                    }).catch((error) => {
                        this.$notify({
                            duration: 1000,
                            type: 'error',
                            text: error.response.data.message,
                        });
                    });
                }
            }
        },
        created() {
            this.name = this.value;
        },
        props: {
            value: {
                type: String,
                required: true
            },
        }
    }
</script>
