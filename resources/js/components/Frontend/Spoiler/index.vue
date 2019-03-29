<template>
    <div class="spoiler-wrapper">
       <div class="checklist__description"  @click="open" >
           <div class="left-col" :class="{'open': isOpen}">
                <span class="arrow"></span>
           </div>
            Completed
        </div>
        <div class="spoiler" ref="spoiler" :class="{'open': isOpen}" :style="{'max-height': heightElem + 'px'}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Spoiler",
        data() {
            return {
                maxHeight: null,
                isOpen: true
            }
        },
        computed: {
            heightElem() {
                if (this.isOpen) {
                    return this.maxHeight;
                }else {
                    return 0;
                }
            }
        },
        methods: {
            open() {
                this.maxHeight = this.$refs.spoiler.scrollHeight;
                this.isOpen = !this.isOpen;
            }
        },
        mount() {
            this.maxHeight = this.$refs.spoiler.scrollHeight;
        }
    }
</script>

<style scoped>
        .spoiler:not(.open) {
            overflow: hidden;
        }
        .spoiler {
            transition: all .2s;
        }
</style>