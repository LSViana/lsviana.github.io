<template>
  <div class="project-dialog-root pa-6">
    <div class="d-flex flex-column align-stretch">
      <h2 class="bold font-weight-light dark-gray--text">
        Project Information
      </h2>
    </div>
    <div class="my-5 project-info-container">
      <component v-if="projectName" :is="'project-' + projectName" />
    </div>
    <div class="d-flex flex-row justify-end">
      <a href="" class="close-button text-uppercase bold font-weight-light white--text primary py-3 px-5 pointer size-6" @click.prevent="$emit('close')">
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
  border: 4px $primaryColor dashed;
  border-radius: nth($sizes, 4);
  max-width: 90vw;
  width: 900px;
  background-color: white;

  .close-button:hover {
    color: $accentColor;
  }
  .project-info-container {
    max-height: 80vh;
    overflow-y: auto;
  }
}
</style>