<template>
    <div id="app" :class="{ dark }">
        <div
                id="app-root-container"
                class="d-flex flex-flow flex-nowrap">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            dark() {
                return this.$root.$data.dark
            }
        }
    }
</script>

<style lang="scss">
    #app-root-container {
        min-width: 100%;
        min-height: 100vh;
    }
</style>