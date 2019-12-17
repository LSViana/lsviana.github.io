<template>
  <div class="project-info-body coffee-app d-flex flex-column align-stretch">
    <div class="d-flex flex-column align-stretch">
      <h3 class="font-weight-light light-gray--text">Title and Date</h3>
      <div class="size-6 project-title d-flex flex-row align-center flex-wrap">
        <a target="blank">
          <h2
            class="size-7 mr-3 bold font-weight-light py-3 px-5 primary accent--text border-radius-3"
          >Coffee App</h2>
        </a>
        <p>
          developed from
          <span>Jul, 2019</span>
          to
          <span>Aug, 2019</span>.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Reason</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          When Flutter first showed up at 2017, I couldn't study it very well because I was busy with React Native. But since back there I opened this door and built this pilot project to see how it'd go out.
        </p>
        <p class="mt-4">
          It turns out that the <span>results</span> with Flutter <span>are great</span> and since it works for a wide range of purposes, I wouldn't try another framework to build mobile apps but Flutter.
        </p>
      </div>
    </div>
    <div class="d-flex technologies flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Technologies</h3>
      <div class="size-6 d-flex flex-row align-center flex-wrap">
        <p>
          <span>Flutter</span> for the mobile app and <span>Google FCM</span> and <span>ASP.NET Core</span> as the back-end.
        </p>
      </div>
    </div>
    <div class="d-flex flex-column align-stretch mt-5">
      <h3 class="font-weight-light light-gray--text">Demo in Android (but it also runs on iOS)</h3>
      <div class="project-images size-6 d-flex flex-row flex-wrap align-stretch justify-center">
        <a
          href="https://imgur.com/JJcV1Fh.png"
          target="blank"
        >
          <div>
            <img
              src="https://imgur.com/JJcV1Fh.png"
              alt="Coffee App Stores Page"
            />
          </div>
        </a>
        <a
          href="https://imgur.com/laUVTcg.png"
          target="blank"
        >
          <div>
            <img
              src="https://imgur.com/laUVTcg.png"
              alt="Coffee App Cart Page"
            />
          </div>
        </a>
        <a
          href="https://imgur.com/iGYQU6k.png"
          target="blank"
        >
          <div>
            <img
              src="https://imgur.com/iGYQU6k.png"
              alt="Coffee App Drawer"
            />
          </div>
        </a>
        <a
          href="https://imgur.com/jnL5iG3.png"
          target="blank"
        >
          <div>
            <img
              src="https://imgur.com/jnL5iG3.png"
              alt="Coffee App Sign In Page"
            />
          </div>
        </a>
        <a
          href="https://imgur.com/dXBuLzm.png"
          target="blank"
        >
          <div>
            <img
              src="https://imgur.com/dXBuLzm.png"
              alt="Coffee App Notification Inside App"
            />
          </div>
        </a>
        <a
          href="https://imgur.com/0HJSMKd.png"
          target="blank"
        >
          <div>
            <img
              src="https://imgur.com/0HJSMKd.png"
              alt="Coffee App Notification Outside App"
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

.project-info-body.coffee-app {
  .project-images {
    & > a {
      @extend .ma-2;
      @extend .border-radius-4;
      width: 15.5%;
    }
  }
}
</style>
