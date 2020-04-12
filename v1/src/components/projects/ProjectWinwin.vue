<template>
  <div class="project-info-body d-flex flex-column align-stretch">
    <div class="d-flex flex-column align-stretch">
      <h3 class="font-weight-light light-gray--text">Title and Date</h3>
      <div class="size-6 project-title d-flex flex-row align-center flex-wrap">
        <a target="blank">
          <h2
            class="size-7 mr-3 bold font-weight-light py-3 px-5 primary accent--text border-radius-3"
          >WinWin</h2>
        </a>
        <p>
          developed from
          <span>Jul, 2018</span>
          to
          <span>Dec, 2018</span>.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Problem solved</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          This software helps teams to improve the <span>collaboration</span> process through rewards. To earn rewards, one must score in the platform by fostering <span>kindness</span> and <span>harmony</span> in the work environment, which will help him get feedbacks from other users and, therefore, score.
        </p>
      </div>
    </div>
    <div class="d-flex technologies flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Technologies</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          <span>Xamarin.Forms</span>, <span>Vue.js</span>, <span>ASP.NET Core</span> and <span>Cosmos Db</span>.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">More information</h3>
      <div class="project-images size-6 d-flex flex-row flex-wrap align-stretch justify-center">
        <a
          href="/projects/winwin/winwinlogo.svg"
          target="blank"
        >
          <div>
            <img
              src="/projects/winwin/winwinlogo.svg"
              alt="WinWin Logo"
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