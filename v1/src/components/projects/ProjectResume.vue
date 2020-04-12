<template>
  <div class="project-info-body d-flex flex-column align-stretch">
    <div class="d-flex flex-column align-stretch">
      <h3 class="font-weight-light light-gray--text">Title and Date</h3>
      <div class="size-6 project-title d-flex flex-row align-center flex-wrap">
        <a target="blank">
          <h2
            class="size-7 mr-3 bold font-weight-light py-3 px-5 primary accent--text border-radius-3"
          >Personal résumé</h2>
        </a>
        <p>
          developed since
          <span>Dec, 2018</span>.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Reason</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          Sharing your work isn't always an easy task, then I created this résumé to reach a wider range of people! And I'm excited to see you came all the day down here to know more about my work, thank you!
        </p>
        <p class="mt-4">
          Besides that, I'd like to share that I'm a <span>proud</span> software developer.
        </p>
      </div>
    </div>
    <div class="d-flex technologies flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Technologies</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          <span>Vue.js</span> and that's it.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">More information</h3>
      <div class="project-images size-6 d-flex flex-row flex-wrap align-stretch justify-center">
        <a
          href="/lv-icon.svg"
          target="blank"
        >
          <div>
            <img
              src="/lv-icon.svg"
              alt="Résumé's Logo"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../../styles/Projects.scss';
</style>