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
        data: () => ({
            dark: true
        })
    }
</script>

<style lang="scss">
    #app-root-container {
        min-width: 100%;
        min-height: 100vh;
    }
</style>