<template>
  <div class="dialog-root d-flex justify-center align-center" :class="[value ? 'open' : '']" @click="$emit('input', false)">
    <div @click.stop="onClickContentDialog">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickContentDialog() {
      // Something may be done in here
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-root {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;
}

.dialog-root.open {
  animation: .3s dialogFadeIn ease-in-out forwards;
  z-index: 6;
  display: flex;
}

@keyframes dialogFadeIn {
  0% {
    background-color: rgba(0, 0, 0, .0);
  }
  100% {
    background-color: rgba(0, 0, 0, .25);
  }
}
</style>