<template>
    <div class="progress-bar">
        <div class="left-col">
            <span class="percent-progress">
                {{complete_type}}
            </span>
        </div>

        <div class="progress-bar__wrapper">
            <span :style="{width: percent + '%'}" class="progress-bar__progress"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: ['percent', 'complete_type']
    }
</script>

