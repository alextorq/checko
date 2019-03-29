<template>
    <div class="checklist__name-wrapper" :class="{'complete': completeDone}">
        <div class="left-col">
          <span class="icon">
                <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 15.1 8.3" style="enable-background:new 0 0 15.1 8.3;" xml:space="preserve">
                <polyline class="st0" points="1,1 8.3,7.3 14.1,1.6 "/>
                </svg>
           </span>
        </div>
        <input class="checklist__name" type="text" v-model="name"
               @blur=""  @change="endEditName">
    </div>
</template>

<script>
    export default {
        name: "CheckList Name",
        computed: {
            name: {
                get() {
                    return this.$store.state.checkList.list.name;
                },
                set(value) {
                    this.$store.commit('updateCheckListField', {
                        field: 'name',
                        value: value
                    });
                }
            },
            completeDone() {
                return this.$store.getters.completeDone;
            },
        },
        methods: {
            endEditName() {
                this.$store.dispatch('updateCheckListField')
            },
            changeWidthForName() {
                /*
                * Изменение длинны инпута для имени
                * */
            }
        },
    }
</script>
