<template>
    <div class="hard-skills">
        <sticky-header number="II" title="Hard Skills"/>
        <div class="development-areas pa-8">
            <h3 class="dark-gray--text">
                For you or your business
                <span class="accent--text primary px-4 py-2 border-radius-3 text-uppercase">I can build</span>:
            </h3>
            <div class="development-area my-6">
                <div class="development-header d-flex flex-row align-center ma-6">
                    <div class="development-symbol circular-border-radius pa-6 primary">
                        <fa-icon :icon="['fas', 'globe']" class="accent--text size-9"/>
                    </div>
                    <h3 class="ml-5 size-8 accent--text bold font-weight-light d-flex flex-row align-center">
                        Web Sites <span class="visible-lg-and-up ml-4 size-6 primary-light--text">// and yours will be even more beautiful than this one, yeah?</span>
                    </h3>
                </div>
                <div class="development-purpose px-7 d-flex flex-column justify-center align-center">
                    <p class="dark-gray--text size-6 ma-3">
                        Creating websites is the easiest way to <span
                            class="primary white--text px-4 py-3 border-radius-3">get closer to your customers or target audience</span>.
                        From simple ones until the complex e-commerces, I can help you making your dreams come true!
                    </p>
                </div>
                <div class="development-technologies primary pa-8 mt-8">
                    <div class="oblique-divider"/>
                    <div class="spacer mt-5"/>
                    <div class="d-flex flex-row align-center">
                        <fa-icon :icon="['fas', 'code']" class="accent--text size-7"/>
                        <h3 class="accent--text bold font-weight-light size-7 ml-4">
                            Available technologies:
                        </h3>
                    </div>
                    <div class="technologies-container">
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo primary pa-3 circular-border-radius">
                                    <img
                                            src="../assets/png/react-js.png"
                                            alt="Logo of React.js">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="https://reactjs.org/" target="blank">
                                        React.js
                                    </a>
                                </h3>
                            </div>
                            <div class="technology-projects flex-1">
                                <p>Previous projects:</p>
                                <div class="projects-container">
                                    <a target="blank">
                                        <div class="technology-project">
                                            <h3>iDrones</h3>
                                        </div>
                                    </a>
                                    <a target="blank" href="https://lsviana.github.io/digitalk-test/">
                                        <div class="technology-project">
                                            <h3>Pokedéx</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo primary pa-4 pt-5 circular-border-radius">
                                    <img
                                            src="../assets/png/vue-js.png"
                                            alt="Logo of Vue.js">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="https://vuejs.org/">
                                        Vue.js
                                    </a>
                                </h3>
                            </div>
                            <div class="technology-projects flex-1">
                                <p>Previous projects:</p>
                                <div class="projects-container">
                                    <a @click.prevent="showProjectDialog('infocast')" target="blank">
                                        <div class="technology-project">
                                            <h3>SENAI InfoCast</h3>
                                        </div>
                                    </a>
                                    <a @click.prevent="showProjectDialog('resume')" target="blank">
                                        <div class="technology-project">
                                            <h3>Personal Résumé</h3>
                                        </div>
                                    </a>
                                    <a @click.prevent="showProjectDialog('eventually')" target="blank">
                                        <div class="technology-project">
                                            <h3>Eventually</h3>
                                        </div>
                                    </a>
                                    <a @click.prevent="showProjectDialog('covida')" target="blank">
                                        <div class="technology-project">
                                            <h3>Covida</h3>
                                        </div>
                                    </a>
                                    <a href="https://www.testdome.com/" target="blank">
                                      <div class="technology-project">
                                        <h3>TestDome</h3>
                                      </div>
                                    </a>
                                    <a href="https://web.archive.org/web/20210522161312if_/https://www.circulardocs.com/" target="blank">
                                      <div class="technology-project">
                                        <h3>Circular Docs</h3>
                                      </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo primary pa-3 circular-border-radius">
                                    <fa-icon :icon="['fas', 'fingerprint']"
                                             class="white--text dark-primary--text size-8"/>
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    Vanilla
                                </h3>
                            </div>
                          <div class="technology-projects flex-1 d-flex justify-center">
                            <p class="mt-3">
                              <fa-icon :icon="['fas', 'asterisk']" class="white--text size-5 mr-4" />
                              <span>Nothing to show so far.</span>
                              <fa-icon :icon="['fas', 'asterisk']" class="white--text size-5 ml-4" />
                            </p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="development-area my-6">
                <div class="development-header d-flex flex-row align-center ma-6">
                    <div class="development-symbol circular-border-radius pa-6 primary">
                        <fa-icon :icon="['fas', 'server']" class="accent--text size-9"/>
                    </div>
                    <h3 class="ml-5 size-8 accent--text bold font-weight-light d-flex flex-row align-center">
                        Web Servers <span class="visible-lg-and-up ml-4 size-6 primary-light--text">// this will process what your customer's device can't do!</span>
                    </h3>
                </div>
                <div class="development-purpose px-7 d-flex flex-column justify-center align-center">
                    <p class="dark-gray--text size-6 ma-3">
                        Even if your web site is very well developed, creative and interactive, it may need some <span
                            class="primary white--text px-4 py-3 border-radius-3">back-end</span> processing. This is
                        useful if your project manages sensitive data which can't be processed directly in your
                        customer's device.
                    </p>
                </div>
                <div class="development-technologies primary pa-8 mt-8">
                    <div class="oblique-divider"/>
                    <div class="spacer mt-5"/>
                    <div class="d-flex flex-row align-center">
                        <fa-icon :icon="['fas', 'code']" class="accent--text size-7"/>
                        <h3 class="accent--text bold font-weight-light size-7 ml-4">
                            Available technologies:
                        </h3>
                    </div>
                    <div class="technologies-container">
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo white circular-border-radius pa-3">
                                    <img
                                            style="transform: scale(1.5)"
                                            src="../assets/png/asp-net-core.png"
                                            alt="Logo of ASP.NET Core">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="https://www.asp.net/core/overview/aspnet-vnext">
                                        ASP.NET Core
                                    </a>
                                </h3>
                            </div>
                            <div class="technology-projects">
                                <p>Previous projects:</p>
                                <div class="projects-container">
                                    <a @click.prevent="showProjectDialog('infocast')" target="blank">
                                        <div class="technology-project">
                                            <h3>SENAI InfoCast</h3>
                                        </div>
                                    </a>
                                    <a target="blank" @click.prevent="showProjectDialog('winwin')">
                                        <div class="technology-project">
                                            <h3>WinWin</h3>
                                        </div>
                                    </a>
                                    <a target="blank">
                                        <div class="technology-project">
                                            <h3>Speex</h3>
                                        </div>
                                    </a>
                                    <a @click.prevent="showProjectDialog('eventually')" target="blank">
                                        <div class="technology-project">
                                            <h3>Eventually</h3>
                                        </div>
                                    </a>
                                    <a @click.prevent="showProjectDialog('cosol')" target="blank">
                                        <div class="technology-project">
                                            <h3>COSOL</h3>
                                        </div>
                                    </a>
                                    <a href="" target="blank">
                                        <div class="technology-project">
                                            <h3>iDrones</h3>
                                        </div>
                                    </a>
                                    <a @click.prevent="showProjectDialog('covida')" target="blank">
                                        <div class="technology-project">
                                            <h3>Covida</h3>
                                        </div>
                                    </a>
                                    <a href="https://www.testdome.com/" target="blank">
                                      <div class="technology-project">
                                        <h3>TestDome</h3>
                                      </div>
                                    </a>
                                    <a href="https://web.archive.org/web/20210522161312if_/https://www.circulardocs.com/" target="blank">
                                      <div class="technology-project">
                                        <h3>Circular Docs</h3>
                                      </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="development-area my-6">
                <div class="development-header d-flex flex-row align-center ma-6">
                    <div class="development-symbol circular-border-radius pa-6 primary">
                        <fa-icon :icon="['fas', 'mobile-alt']" class="accent--text size-9"/>
                    </div>
                    <h3 class="ml-5 size-8 accent--text bold font-weight-light d-flex flex-row align-center">
                        Mobile Apps <span class="visible-lg-and-up ml-4 size-6 primary-light--text">// there's nothing like an app to spread your idea!</span>
                    </h3>
                </div>
                <div class="development-purpose px-7 d-flex flex-column justify-center align-center">
                    <p class="dark-gray--text size-6 ma-3">
                        The biggest companies around the world got a direct connection, became more visible and made
                        their
                        <span class="primary white--text px-4 py-3 border-radius-3">customers engaged</span>
                        in their business through mobile apps! If this work is well done, your audience will trust your
                        services
                        and it's likely they'll be around for longer.
                    </p>
                </div>
                <div class="development-technologies primary pa-8 mt-8">
                    <div class="oblique-divider"/>
                    <div class="spacer mt-5"/>
                    <div class="d-flex flex-row align-center">
                        <fa-icon :icon="['fas', 'code']" class="accent--text size-7"/>
                        <h3 class="accent--text bold font-weight-light size-7 ml-4">
                            Available technologies:
                        </h3>
                    </div>
                    <div class="technologies-container">
                        <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                            <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                                <div class="technology-logo white pa-3 circular-border-radius">
                                    <img
                                            src="../assets/png/flutter.png"
                                            alt="Logo of Flutter">
                                </div>
                                <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                                    <a href="https://flutter.io/">
                                        Flutter
                                    </a>
                                </h3>
                            </div>
                            <div class="technology-projects">
                                <p>Previous projects:</p>
                                <div class="projects-container">
                                    <a @click="showProjectDialog('coffee-app')" target="blank">
                                        <div class="technology-project">
                                            <h3>Coffee App</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="development-area my-6">
              <div class="development-header d-flex flex-row align-center ma-6">
                <div class="development-symbol circular-border-radius pa-6 primary">
                  <fa-icon :icon="['fas', 'mobile-alt']" class="accent--text size-9"/>
                </div>
                <h3 class="ml-5 size-8 accent--text bold font-weight-light d-flex flex-row align-center">
                  UX/UI Design <span class="visible-lg-and-up ml-4 size-6 primary-light--text">// deliver beautiful & useful apps.</span>
                </h3>
              </div>
              <div class="development-purpose px-7 d-flex flex-column justify-center align-center">
                <p class="dark-gray--text size-6 ma-3">
                  Creating apps is not hard, but creating <b>beautiful</b> and <b>useful</b> apps is something a few people
                  can do well.
                  This is the skill I am least used to, but I've been working hard to improve it and getting my hands on
                  professional & personal projects.
                </p>
              </div>
              <div class="development-technologies primary pa-8 mt-8">
                <div class="oblique-divider"/>
                <div class="spacer mt-5"/>
                <div class="d-flex flex-row align-center">
                  <fa-icon :icon="['fas', 'paint-brush']" class="accent--text size-7"/>
                  <h3 class="accent--text bold font-weight-light size-7 ml-4">
                    Available tools:
                  </h3>
                </div>
                <div class="technologies-container">
                  <div class="technology border-radius-4 d-flex flex-column align-center py-6">
                    <div class="technology-header mx-6 d-flex flex-row flex-wrap align-center justify-center">
                      <div class="technology-logo white pa-3 circular-border-radius">
                        <img
                          src="../assets/svg/figma.svg"
                          alt="Logo of Flutter">
                      </div>
                      <h3 class="ml-4 text-uppercase bold size-8 font-weight-light">
                        <a href="https://www.figma.com/">
                          Figma
                        </a>
                      </h3>
                    </div>
                    <div class="technology-projects">
                      <p>Previous projects:</p>
                      <div class="projects-container">
                        <a href="https://www.testdome.com/" target="blank">
                          <div class="technology-project">
                            <h3>TestDome</h3>
                          </div>
                        </a>
                        <a href="https://web.archive.org/web/20210522161312if_/https://www.circulardocs.com/" target="blank">
                          <div class="technology-project">
                            <h3>Circular Docs</h3>
                          </div>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <fullscreen-dialog v-model="detailsDialog">
            <project-dialog :projectName="projectName" @close="detailsDialog = false"/>
        </fullscreen-dialog>
    </div>
</template>

<script>
    export default {
        data: () => ({
            detailsDialog: false,
            projectName: ''
        }),
        methods: {
            showProjectDialog(projectName) {
                this.detailsDialog = true
                this.projectName = projectName
            }
        }
    }
</script>

<style lang="scss">
    @import '../styles/Variables.scss';

    @media screen and (max-width: $lgToMd) {
        .development-areas {
            .development-area {
                .development-technologies {
                    padding-right: nth($sizes, 4) !important;
                    padding-left: nth($sizes, 4) !important;
                }
            }
        }
    }

    .development-areas {
        .development-area {
            border-radius: nth($sizes, 3);
            border: nth($sizes, 3) $primaryColor solid;
            overflow: hidden;
            position: relative;

            .development-header {
                .development-symbol {
                    width: nth($sizes, 9) * 2;
                    height: nth($sizes, 9) * 2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .development-symbol::before {
                    content: ' ';
                    position: absolute;
                    top: nth($sizes, 9) * -1;
                    left: nth($sizes, 8) * 1.25;
                    height: nth($sizes, 9) * 2;
                    width: nth($sizes, 9) * 2;
                    background: $primaryColor;
                    transform: rotate(-10deg) translateX(nth($sizes, 7) * -1);
                    z-index: -1;
                }

                .development-symbol::after {
                    content: ' ';
                    position: absolute;
                    top: nth($sizes, 6) * -2;
                    left: nth($sizes, 9) * 1.3;
                    height: nth($sizes, 9) * 3;
                    width: 100%;
                    background: $primaryColor;
                    transform: rotate(2deg) translateX(nth($sizes, 7) * -.75);
                    z-index: -1;
                }
            }

            .development-purpose {
                @extend .py-6;
                @extend .mx-6;
                @extend .size-6;
                @extend .line-height-8;
            }

            .development-technologies {
                position: relative;

                .oblique-divider {
                    height: nth($sizes, 9) * 1.25;
                    transform: rotate(1deg) translateY(nth($sizes, 5) * -1);
                }

                .technologies-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
                    grid-gap: nth($sizes, 4);
                    margin: nth($sizes, 4) 0;

                    .technology {
                        background-color: white;

                        .technology-header {
                            color: $primaryColor;

                            & > * {
                                margin-top: nth($sizes, 4);
                            }

                            h3 {
                                a {
                                    border-bottom: nth($sizes, 3) $primaryColor dashed;
                                }
                            }

                            .technology-logo {
                                flex-shrink: 0;
                                width: nth($sizes, 9);
                                height: nth($sizes, 9);
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: center;

                                img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: contain;
                                }
                            }
                        }

                        .technology-projects {
                            align-self: stretch;
                            margin: 0px nth($sizes, 6);
                            margin-top: nth($sizes, 5);
                            padding: nth($sizes, 4);
                            border-radius: nth($sizes, 3);
                            background-color: $primaryColor;

                            & > p:nth-child(1) {
                                margin-bottom: nth($sizes, 3);
                                font-size: .8em;
                                font-weight: bold;
                                color: white;
                                text-transform: uppercase;
                            }

                            .projects-container {
                                display: flex;
                                flex-flow: row wrap;
                                justify-content: flex-start;
                                align-items: center;

                                & > a {
                                    margin: nth($sizes, 2);

                                    .technology-project {
                                        background-color: white;
                                        padding: nth($sizes, 2) nth($sizes, 4);
                                        border-radius: nth($sizes, 3);

                                        & > h3 {
                                            color: $primaryColor;
                                        }
                                    }
                                }
                            }
                        }

                        .technology-description {
                            margin: nth($sizes, 5) 0;
                            width: 100%;

                            p {
                                @extend .size-6;
                                @extend .line-height-7;
                                line-height: nth($sizes, 8);
                            }
                        }
                    }

                    .technology:nth-child(2n + 1) {
                        background: $accentColor;
                    }
                }
            }
        }
    }
</style>
