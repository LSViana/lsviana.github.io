<template>
  <div class="project-dialog-root pa-6">
    <div class="d-flex flex-column align-stretch">
      <h3 class="bold font-weight-light light-gray--text">
        Project's Information
      </h3>
    </div>
    <div class="my-3 project-info-container">
      <component v-if="projectName" :is="'project-' + projectName" />
    </div>
    <div class="d-flex flex-row justify-end">
      <a href="" class="close-button text-uppercase bold font-weight-light white--text primary py-3 px-5 pointer" @click.prevent="$emit('close')">
        Close
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/Variables.scss';

.project-dialog-root {
  max-width: 90vw;
  width: 720px;
  background-color: white;

  .close-button {
    font-size: 1.25em;
  }
  .close-button:hover {
    color: $accentColor;
  }
  .project-info-container {
    max-height: 80vh;
    overflow-y: auto;
  }
}
</style>