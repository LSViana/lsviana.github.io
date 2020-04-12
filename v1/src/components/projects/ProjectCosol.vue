<template>
  <div class="project-info-body cosol d-flex flex-column align-stretch">
    <div class="d-flex flex-column align-stretch">
      <h3 class="font-weight-light light-gray--text">Title and Date</h3>
      <div class="size-6 project-title d-flex flex-row align-center flex-wrap">
        <a target="blank" href="https://cosol.com.br/">
          <h2
            class="size-7 mr-3 bold font-weight-light py-3 px-5 primary accent--text border-radius-3"
          >COSOL</h2>
        </a>
        <p>
          developed from
          <span>Jan, 2019</span>
          to
          <span>May, 2019</span>.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Problem solved</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          Getting clean energy is not easy in Brazil because it may be expensive to buy to your home only and the laws aren't straight about sharing this energy. Then, COSOL takes care of this for you, because they have big wind farms ready to serve cheaper and clean energy with you.
        </p>
      </div>
    </div>
    <div class="d-flex technologies flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Technologies</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          <span>React.js</span>, <span>ANT Design</span>, <span>ASP.NET Core</span>, <span>SignalR</span> and <span>SQL Server</span>.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">More information</h3>
      <div class="project-images size-6 d-flex flex-row flex-wrap align-stretch justify-center">
        <a
          href="https://imgur.com/XuIEMY6.png"
          target="blank"
        >
          <div>
            <img
              src="https://imgur.com/XuIEMY6.png"
              alt="COSOL Logo"
            />
          </div>
        </a>
        <a
          href="https://imgur.com/IJidq9w.png"
          target="blank"
        >
          <div>
            <img
              src="https://imgur.com/IJidq9w.png"
              alt="COSOL Mill Worker Page"
            />
          </div>
        </a>
        <a
          href="https://imgur.com/SkyEDaZ.png"
          target="blank"
        >
          <div>
            <img
              src="https://imgur.com/SkyEDaZ.png"
              alt="COSOL Customer Page"
            />
          </div>
        </a>
        <a
          href="https://imgur.com/RPccm9l.png"
          target="blank"
        >
          <div>
            <img
              src="https://imgur.com/RPccm9l.png"
              alt="COSOL Login Page"
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

.project-info-body.cosol {
  .project-images {
    & > a {
      @extend .ma-2;
      @extend .border-radius-4;
      width: 15.5%;
    }
  }
}
</style>