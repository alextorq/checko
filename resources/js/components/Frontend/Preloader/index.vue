<template functional>
    <div class="preloader" v-if="props.active">
        <span>
            <svg >
              <use xlink:href="/images/sprites.svg#sprite-circle"></use>
            </svg>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Preloader",
        props: {
            active: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    }
</script>