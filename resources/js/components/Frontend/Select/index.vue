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
        name: "Select",
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
              if (item.value !== this.item.value) {
                  this.item = item;
                  this.$emit('change', {
                      nameSetting: this.name,
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
            name: {
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
        watch: {
            default_value(val) {
                this.item = val;
            }
        },
        created() {
            this.item = this.default_value;
            document.addEventListener('click', (event) => {
                let target = event.target;
                if (this.open &&!target.closest('.selected-list-wrapper')) {
                    this.openList();
                }
            })
        }
    }
</script>

