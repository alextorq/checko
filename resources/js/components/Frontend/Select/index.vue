<template>
    <div class="selected-list-wrapper" :class="isOpen" v-clickoutside="closeList">
        <span @click="openList">{{item.name}}
            <span class="svg-arrow">
                <svg class="lh-chevron" title="See audits" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <g class="lh-chevron__lines">
                        <path class="lh-chevron__line lh-chevron__line-left" d="M10 50h40" stroke="#707173"></path>
                        <path class="lh-chevron__line lh-chevron__line-right" d="M90 50H50" stroke="#707173"></path>
                    </g>
                </svg>
            </span>

        </span>
        <ul class="selected-list" :class="isOpen">
            <li v-for="item in list" @click="change(item)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>

    import Clickoutside from '../Directive/clickoutside'

    export default {
        name: "Select",
        data() {
          return {
             item: {
                 name: 'Select value',
                 value: null
             },
              open: false,
              active: false,
              arrow_open: false
          }
        },
        directives: { Clickoutside },

        computed: {
          isOpen() {
              return {
                  open: this.open,
                  active: this.active,
                  arrow_open: this.arrow_open
              }
          }
        },
        methods: {
          change(item) {
              this.closeList();
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
              if (this.open) {
                  this.closeList();
                  return
              }
              this.arrow_open = true;
              this.open = true;
              setTimeout(() => {
                 this.active = true;
              }, 200);
          },
          closeList() {
              this.arrow_open = false;
              this.active = false;
              setTimeout(() => {
                  this.open = false;
              }, 200);
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
        }
    }
</script>

