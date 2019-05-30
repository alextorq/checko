<template>
    <div class="spoiler-wrapper">
       <div class="spoiler-title"  @click="open" >
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

