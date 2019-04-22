<template>
    <div class="form-item" :class="focus">

        <span class="icon" v-if="icon">
            <svg v-html="pathToIcon"></svg>
        </span>

        <input type="text" :name="name" :id="name"  @keyup="validate"
               :value="value"
               @input="$emit('input', $event.target.value)"></input>

        <label :for="name">
            {{label}}
        </label>

        <span class="correct-icon">
            <span class="correct">
                <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 16.8 10.9" style="enable-background:new 0 0 16.8 10.9;" xml:space="preserve">

                <path class="st1" d="M14.4,0.5L9.6,6.1C9.5,6.2,9.4,6.4,9.2,6.5l-0.9,1L6.1,4.8l0,0L2.4,0.5C1.9-0.1,1-0.2,0.5,0.3
                c-0.6,0.5-0.6,1.3-0.1,1.9l7,8.2c0.4,0.4,0.9,0.6,1.4,0.4c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0
                c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0-0.1c0,0,0,0,0,0
                l7.1-8.2c0.5-0.6,0.4-1.4-0.1-1.9C15.8-0.2,14.9-0.1,14.4,0.5z"/>
                </svg>

            </span>
            <span class="incorrect">
                <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 26.5 26.5" style="enable-background:new 0 0 26.5 26.5;" xml:space="preserve">
                    <path class="st1" d="M15.4,13.2L26,2.6C26.6,2,26.6,1,26,0.4c-0.6-0.6-1.5-0.6-2.1,0L13.2,11.1L2.6,0.4C2-0.1,1-0.1,0.4,0.4
                        C-0.1,1-0.1,2,0.4,2.6l10.7,10.7L0.4,23.9c-0.6,0.6-0.6,1.5,0,2.1s1.5,0.6,2.1,0l10.7-10.7L23.9,26c0.6,0.6,1.5,0.6,2.1,0
                        c0.6-0.6,0.6-1.5,0-2.1L15.4,13.2z"/>
                    </svg>

            </span>
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
        name: "FormInput",
        data() {
          return {

          }
        },
        computed: {
            pathToIcon() {
                return `<use  xlink:href="/images/sprites.svg#sprite-${this.icon}"></use>`
            },
          focus() {
              return {
                  focus: !!this.value,
                  error: !!this.errors.length,
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
                          name: `${this.name}`,
                          message: `The ${this.label} field is required.`
                      })
                  }else {
                      this.$emit('error', {
                          action: false,
                          filed: 'empty',
                          name: `${this.name}`,
                          message: ''
                      })
                  }

              }
            if (this.min) {
                this.minValidate();
            }

            if (this.email) {
              this.emailValidate(this.min);
            }

          },
            minValidate() {
                if (this.value.length < this.min) {
                    if (!!this.value) {
                        this.$emit('error', {
                            action: true,
                            filed: 'length',
                            name: this.name,
                            message: `min chars is ${this.min}`
                        })
                    }

                } else {
                    this.$emit('error', {
                        action: false,
                        filed: 'length',
                        name: this.name,
                        message: ''
                    })
                }

            },
            emailValidate() {
                let rex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!rex.test(this.value) && this.value) {
                    this.$emit('error', {
                        action: true,
                        filed: 'email',
                        name: this.name,
                        message: 'Е-mail fail. Please type in your correct e-mail.'
                    })
                } else {
                    this.$emit('error', {
                        action: false,
                        filed: 'email',
                        name: this.name,
                        message: ''
                    })
                }

            }
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
            icon: {
                type: String,
                required: false
            },
            min: {
                type: Number,
                required: false
            },
            value: {
                type: String,
                required: true
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
            email: {
                type: Boolean,
                required: false
            }
        }
    }
</script>
