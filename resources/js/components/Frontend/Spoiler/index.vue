<template>
    <div class="spoiler-wrapper">
       <div class="spoiler-title"  @click="open" >
           <div class="left-col" :class="{'open': isOpen}">
              <span class="svg-arrow">
                <svg class="lh-chevron" title="See audits" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <g class="lh-chevron__lines">
                        <path class="lh-chevron__line lh-chevron__line-left" d="M10 50h40" stroke="#707173"></path>
                        <path class="lh-chevron__line lh-chevron__line-right" d="M90 50H50" stroke="#707173"></path>
                    </g>
                </svg>
            </span>
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

