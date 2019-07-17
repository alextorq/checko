<template>
    <div class="not-found-wrapper">
        <div class="not-found">
            <img src="/images/404/404.svg" alt="not found">
            <h1>Page not found</h1>
            <p>Maecenas dignissim laoreet lectus id pulvinar.
                Nunc facilisis suscipit arcu in efficitur.
                Sed vitae eros quis lorem auctor pellentesque.
                Nunc sollicitudin pellentesque sem eget viverra.
            </p>
            <button class="button">
                <router-link to="/">Go to main</router-link>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>
