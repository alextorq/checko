<template>
    <div class="checklist__name-wrapper" :class="{'complete': completeDone}">
        <div class="left-col">
          <span class="icon">
            <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 16.6 15.4" style="enable-background:new 0 0 16.6 15.4;" xml:space="preserve">
                <circle id="circle_x5F_1" class="st0" cx="8.9" cy="7.5" r="6.8"/>
                <polyline class="st1" points="1.6,3.8 8.9,10.1 14.7,4.4 "/>
            </svg>
           </span>
        </div>
        <textarea class="checklist__name" type="text" ref="item" v-autosize="name"   :placeholder="placeholder"
               v-model="name" @keydown.enter="preventEnter" placeholder="CheckList name"
                  @change="endEditName" @keyup.esc="$refs.item.blur()">
        </textarea>
    </div>
</template>

<script>
    import {checkList} from 'Core/helpers/defaultValue'

    export default {
        name: "CheckListName",
        data() {
          return {
              placeholder: checkList.name
          }
        },
        computed: {
            name: {
                get() {
                    return this.$store.state.checkList.list.name;
                },
                set(value) {
                    this.$store.commit('updateCheckListField', {
                        field: 'name',
                        value: value || this.$store.state.checkList.list.name
                    });
                }
            },
            completeDone() {
                return this.$store.getters.completeDone;
            },
            checkListCreated() {
                return this.$store.getters.checkListIsCreate
            },
            inputSize() {
                let nameLength = (!!this.$store.state.checkList.list.name)
                    ?  this.$store.state.checkList.list.name.length : 15;

                return Math.max(nameLength, this.placeholder.length);
            }
        },
        methods: {
            endEditName() {
                if (this.checkListCreated) {
                    this.$store.dispatch('updateCheckListField');
                }
            },
            preventEnter(event) {
                event.preventDefault();
            }
        }
    }
</script>
