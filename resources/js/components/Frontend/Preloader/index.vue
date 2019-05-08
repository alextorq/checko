<template>
    <div class="preloader" v-if="active">
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
        methods: {

        },
        props: {
            active: {
                type: Boolean,
                required: true
            }
        }
    }
</script>