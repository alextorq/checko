<template>
    <div class="form-item password" :class="focus">

        <span class="icon" v-if="icon">
            <svg v-html="pathToIcon"></svg>
        </span>

        <input :type="type" :name="name" :id="name"  @keyup="validate"
               :value="value" :autocomplete="autocomplete"
               @input="$emit('input', $event.target.value)"></input>

        <label :for="name">
            {{label}}
        </label>

        <span class="show-password" @mousedown="type = 'text'" @mouseup="type = 'password'">
              <svg >
                  <use  xlink:href="/images/sprites.svg#sprite-view"></use>
              </svg>
        </span>

        <ul class="error-message">
            <li v-for="error in errors">
                <span v-if="error.message">{{error.message}}</span>
                <span v-else> {{error}}</span>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                type: 'password'
            }
        },
        computed: {
            pathToIcon() {
                return `<use  xlink:href="/images/sprites.svg#sprite-${this.icon}"></use>`
            },
            focus() {
                return {
                    focus: !!this.value,
                    error: !!this.errors.length
                }
            }
        },
        methods: {
            validate() {
                if (this.required) {
                    if (!this.value) {
                        this.$emit('error', {
                            action: true,
                            filed: 'empty',
                            name: this.name,
                            message: `The ${this.label} field is required.`
                        })
                    }else {
                        this.$emit('error', {
                            action: false,
                            filed: 'empty',
                            name: this.name,
                            message: ''
                        })
                    }
                }
                if (this.repeat) {
                    this.repeatValidate();
                }
                if (this.min) {
                    this.minValidate(this.min);
                }
            },
            repeatValidate() {
                if (this.repeat !== this.value && this.value) {
                    this.$emit('error', {
                        action: true,
                        filed: 'repeat',
                        name: this.name,
                        message: `the password not equal`
                    })
                } else {
                    this.$emit('error', {
                        action: false,
                        filed: 'repeat',
                        name: this.name,
                        message: ''
                    })
                }
            },
            minValidate(min) {
                if (this.value.length < min && this.value) {
                    this.$emit('error', {
                        action: true,
                        filed: 'length',
                        name: this.name,
                        message: `min chars is ${min}`
                    })
                } else {
                    this.$emit('error', {
                        action: false,
                        filed: 'length',
                        name: this.name,
                        message: ''
                    })
                }
            },
        },
        props: {
            name:  {
                type: String,
                required: true
            },
            label:  {
                type: String,
                required: true
            },
            min: {
                type: Number,
                required: false
            },
            value: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: false
            },
            repeat: {
                type: String,
                required: false
            },
            required: {
                type: Boolean,
                required: false
            },
            errors: {
                type: Array,
                default() {
                    return []
                },
                required: false,
            },
            autocomplete: {
                type: String,
                required: false
            }
        }
    }
</script>
