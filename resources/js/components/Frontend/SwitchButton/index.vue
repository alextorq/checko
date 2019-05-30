<template>
    <span class="switch-button" :class="selected">
        <input type="checkbox" v-model="status" @change="update" class="input-button">
    </span>
</template>

<script>
    export default {
        name: "checkbox",
        data() {
            return {
                status: false
            }
        },
        computed: {
            selected() {
                return {
                    selected: this.status
                }
            }
        },
        methods: {
            update() {
               this.$emit('update', {
                   value: this.status,
                   nameSetting: this.name,
               });
            }
        },
        props: {
            name: {
                type: String,
                required: true
            },
            default_value: {
                type: Boolean,
                default: false,
                required: false
            }
        },
        created() {
            this.status = this.default_value;
        }
    }
</script>
