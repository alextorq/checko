<template>
    <main>
        <div class="container">
            <div class="content">
                <CheckList></CheckList>
            </div>
        </div>
    </main>
</template>

<script>
    import CheckList from '../CheckList'

    export default {
        name: "index",
        components: {
            CheckList
        }
    }
</script>

