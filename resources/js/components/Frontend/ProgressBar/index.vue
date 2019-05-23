<template>
    <div class="progress-bar">
        <div class="left-col">
            <span class="percent-progress">
                {{completePercentView}}
            </span>
        </div>
        <div class="progress-bar__wrapper">
            <span :style="{width: widthPercent}" class="progress-bar__progress"></span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        computed: {
            widthPercent() {
                return this.$store.getters.completePercent + '%';
            },
            completePercentView() {
                let config = this.$store.getters.completeViewProgress;
                if (this.$store.getters.settingProgressViewType === '%') {
                    if (config.all > 0) {
                        return Math.ceil(config.complete / (config.all / 100)) + '%';
                    }
                    return 0 + '%';
                }
                else {
                    return `${config.complete}/${config.all}`
                }
            },
            allComplete() {
                return this.$store.getters.allComplete;
            }
        },
        watch : {
            allComplete(value) {
                this.$store.dispatch('checkCheckListOnComplete', value);
            }
        }
    }
</script>

