<template>
    <div class="check-item">
        <div class="left-col">
            <label class="check-item__label">
                <input v-model="state.complete" type="checkbox" @change="updateWithDate('complete')">
                <span class="checkbox-svg-wrapper">
                    <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 15.1 8.3" style="enable-background:new 0 0 15.1 8.3;" xml:space="preserve">
                      <polyline class="st0" points="1,1 8.3,7.3 14.1,1.6 "/>
                    </svg>
                </span>
            </label>
        </div>
        <input type="text" v-model="state.name" @blur="update('name')">
        <button class="check-item__delete" @click="deleteItemEvent">
            <span class="icon"></span>
        </button>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        name: "completeItem",
        data() {
            return {
                state: {

                }
            }
        },
        computed: {

        },
        methods: {
            updateWithDate(field) {
               let date = new Date().getTime();
                this.$emit('update', {
                    field: 'date_complete',
                    value: date,
                    id: this.data.check_item_id,
                    item: this.data,
                    update: false
                });
               this.update(field);
            },
            deleteItemEvent() {
                this.$emit('delete', this.data.check_item_id);
            },
            update(field) {
                this.$emit('update', {
                    field: field,
                    value: this.state[field],
                    id: this.data.check_item_id,
                    item: this.data,
                    update: true
                });
            }
        },
        created() {
            this.state = JSON.parse(JSON.stringify(this.data));
        },
        props: ['data']
    }
</script>
