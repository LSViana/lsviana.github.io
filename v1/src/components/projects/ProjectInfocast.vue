<template>
  <div class="project-info-body d-flex flex-column align-stretch">
    <div class="d-flex flex-column align-stretch">
      <h3 class="font-weight-light light-gray--text">Title and Date</h3>
      <div class="size-6 project-title d-flex flex-row align-center flex-wrap">
        <a target="blank">
          <h2
            class="size-7 mr-3 bold font-weight-light py-3 px-5 primary accent--text border-radius-3"
          >SENAI InfoCast</h2>
        </a>
        <p>
          developed from
          <span>Mar, 2018</span> to
          <span>Apr, 2018</span>.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Place</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          <span>SENAI São Paulo</span> as
          <span>Software Development Intern</span>.
        </p>
      </div>
    </div>
    <div class="d-flex technologies flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Technologies</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          <span>Vue.js</span>,
          <span>ASP.NET Core</span>,
          <span>EF Core</span> and
          <span>SQL Server</span>.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Problem solved</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          Created an automated solution for sharing
          <span>podcasts</span> produced by ourselves (<span>SENAI São Paulo</span>) with the community.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">More information</h3>
      <div class="project-images size-6 d-flex flex-row flex-wrap align-stretch justify-center">
        <a
          href="https://is4-ssl.mzstatic.com/image/thumb/Podcasts128/v4/93/f7/51/93f75190-ce41-498c-84c0-9e91ea967719/mza_1677776487352999457.jpg/600x600bb.jpg"
          target="blank"
        >
          <div>
            <img
              src="https://is4-ssl.mzstatic.com/image/thumb/Podcasts128/v4/93/f7/51/93f75190-ce41-498c-84c0-9e91ea967719/mza_1677776487352999457.jpg/600x600bb.jpg"
              alt="InfoCast's Logo"
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