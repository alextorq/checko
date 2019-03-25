<template>
    <span class="input-button-wrapper" :class="selected">
        <input type="checkbox" v-model="status" @change="update" class="input-button">
    </span>
</template>

<script>
    export default {
        name: "index",
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
                   name: this.name,
                   value: this.status
               });
            }
        },
        props: {
            name: {
                type: String,
                required: true
            },
            defaultValue: {
                type: Boolean,
                default: false,
                required: false
            }
        },
        created() {
            this.status = this.defaultValue;
        }
    }
</script>
