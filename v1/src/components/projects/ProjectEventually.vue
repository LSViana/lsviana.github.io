<template>
  <div class="project-info-body d-flex flex-column align-stretch">
    <div class="d-flex flex-column align-stretch">
      <h3 class="font-weight-light light-gray--text">Title and Date</h3>
      <div class="size-6 project-title d-flex flex-row align-center flex-wrap">
        <a href="https://trial-eventually-front.herokuapp.com" target="blank">
          <h2
            class="size-7 mr-3 bold font-weight-light py-3 px-5 primary accent--text border-radius-3"
          >Eventually</h2>
        </a>
        <p>
          developed from
          <span>Feb, 2019</span> to
          <span>Dec, 2019</span>.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Place</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          <span>Instituto Federal de São Paulo</span> while studying
          <span>Software Development Technical</span>.
        </p>
      </div>
    </div>
    <div class="d-flex technologies flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Technologies</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          <span>Vue.js</span>,
          <span>ASP.NET Core</span>,
          <span>SignalR</span>,
          <span>EF Core</span> and
          <span>PostgreSQL</span>.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Problem solved</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          Event management with
          <span>custom PDF certificates</span>, which are signed and may be validated, attendance and vacancies control and lots of customization to make the task easier.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Demo</h3>
      <div class="project-images size-6 d-flex flex-row flex-wrap align-center justify-center">
        <a href="https://i.imgur.com/5paD99V.png" target="blank">
          <div>
            <img src="https://i.imgur.com/5paD99V.png" alt="Eventually's Home Page" />
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
@import "../../styles/Projects.scss";
</style>