<template>
    <div class="selected-list-wrapper" :class="isOpen">
        <span @click="openList">{{item.name}}
            <span class="arrow"></span>
        </span>
        <ul class="selected-list" :class="isOpen">
            <li v-for="item in list" @click="change(item)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
          return {
             item: {
                 name: 'Select value',
                 value: null
             },
              open: false
          }
        },
        computed: {
          isOpen() {
              return {
                  open: this.open
              }
          }
        },
        methods: {
          change(item) {
              this.open = false;
              if (item !== this.item) {
                  this.item = item;
                  this.$emit('change', {
                      nameSetting: this.name_setting,
                      value: this.item.value,
                      name: this.item.name
                  });
              }
          },
          openList() {
              this.open = !this.open
          }
        },
        props: {
            list: {
                type: Array,
                required: true
            },
            name_setting: {
                type: String,
                required: true
            },
            default_value: {
                type: Object,
                required: false,
                default: () => {
                    return {
                        name: 'Select value',
                        value: null
                    }
                }
            }
        },
        created() {
            this.item = this.default_value;
        }
    }
</script>

