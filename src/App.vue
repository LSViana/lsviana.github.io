<template>
  <div id="app">
    <div
      id="app-root-container"
      class="d-flex flex-flow flex-nowrap">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#app-root-container {
  min-width: 100vw;
  min-height: 100vh;
}
</style>