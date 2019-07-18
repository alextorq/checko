<template>
    <div class="not-found-wrapper">
        <div class="not-found">
            <img src="/images/404/404.svg" alt="not found">
            <h1>Ooops... Error 404</h1>
            <p>We are sorry, but the page you are looking for does not exist</p>
            <button class="button">
                <router-link to="/">Go back to checko.me</router-link>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>
