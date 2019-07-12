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
                let config = this.$store.getters.completeViewProgress;
                let percent = (!!config.all) ? Math.ceil(config.complete / (config.all / 100)) : 0;
                return percent  + '%'
            },
            completePercentView() {
                let config = this.$store.getters.completeViewProgress;
                let percent;
                if (this.$store.getters.settingProgressViewType === '%') {
                    percent = (!!config.all) ? Math.ceil(config.complete / (config.all / 100)) + '%' : '0%';
                }
                else {
                    percent = `${config.complete}/${config.all}`
                }
                return percent
            },
            allComplete() {
                return this.$store.getters.completeDone;
            }
        },
        watch : {
            allComplete(value) {
                this.$store.dispatch('checkCheckListOnComplete', value);
            }
        }
    }
</script>

