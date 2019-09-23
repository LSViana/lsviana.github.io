<template>
    <div class="root-container overview-container d-flex flex-column primary">
        <div
            class="profile-container d-flex flex-column align-center pa-6">
            <div class="picture-container">
                <img
                    style="filter: hue-rotate(5deg)"
                    src="../assets/png/profile.png"
                    alt="Profile picture">
            </div>
            <div class="text-container d-flex flex-column align-center">
                <h2 class="author-name white--text cursive">
                    Lucas Viana
                </h2>
                <h4 class="role-names bold">
                    <a href="https://en.wikipedia.org/wiki/Software_developer" target="blank">Software Developer</a> and <a href="https://en.wikipedia.org/wiki/Gamer" target="blank">Game Enthusiast</a>
                </h4>
            </div>
        </div>
        <div class="contact-container d-flex flex-column justify-center align-center">
            <div class="oblique-divider"></div>
            <div class="get-in-touch-container">
                <div class="oblique-divider" />
                <div class="oblique-divider" />
                <h3 class="contact-title bold white--text">
                    Get in touch
                </h3>
            </div>
            <div class="social-media d-flex flex-column align-center mt-5">
                <!-- TODO Fix this link -->
                <a href="mailto:lv201122@gmail.com" target="blank">
                    <div class="facebook-media d-flex flex-row justify-center align-center">
                        <div class="icon-container">
                            <fa-icon :icon="['fas', 'at']" class="white--text" />
                        </div>
                        <div class="link-container ml-4">
                            <!-- TODO Fix this text -->
                            <p>lv201122@gmail.com</p>
                        </div>
                    </div>
                </a>
                <!-- TODO Fix this link -->
                <a href="https://www.linkedin.com/in/lsviana/" target="blank">
                    <div class="linkedin-media d-flex flex-row justify-center align-center">
                        <div class="icon-container">
                            <fa-icon :icon="['fab', 'linkedin-in']" class="white--text" />
                        </div>
                        <div class="link-container ml-4">
                            <!-- TODO Fix this text -->
                            <p>linkedin.com/in/lsviana/</p>
                        </div>
                    </div>
                </a>
                <!-- TODO Fix this link -->
                <a href="https://github.com/LSViana" target="blank">
                    <div class="github-media d-flex flex-row justify-center align-center">
                        <div class="icon-container">
                            <fa-icon :icon="['fab', 'github']" class="white--text" />
                        </div>
                        <div class="link-container ml-4">
                            <!-- TODO Fix this text -->
                            <p>github.com/LSViana</p>
                        </div>
                    </div>
                </a>
                <a href="https://wa.me/5511959521889?text=Hello, I came from your résumé!" target="blank">
                    <div class="github-media d-flex flex-row justify-center align-center">
                        <div class="icon-container">
                            <fa-icon :icon="['fab', 'whatsapp']" class="white--text" />
                        </div>
                        <div class="link-container ml-4">
                            <!-- TODO Fix this text -->
                            <p>+55 (11) 95952-1889</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../styles/Variables.scss';

.overview-container {
    overflow-x: hidden;
    overflow-y: auto;
    .profile-container {
        margin-bottom: nth($sizes, 8);
        .picture-container {
            border-radius: 1e6px;
            border: nth($sizes, 3) solid $accentColor;
            overflow: hidden;
            width: nth($sizes, 9) * 5;
            height: nth($sizes, 9) * 5;
            display: flex;
            img {
                width: 100%;
                filter: hue-rotate(18deg) brightness(1.1);
            }
        }
        .text-container {
            .author-name {
                font-size: 2em;
                font-weight: 100;
            }
            .role-names {
                font-weight: 100;
                color: $accentColor;
                a {
                    border-bottom: nth($sizes, 2) dashed white;
                }
            }
        }
    }

    .contact-container {
        background-color: white;
        flex: 1;
        position: relative;
        .oblique-divider {
            transform: rotate(-2.5deg) translateY(nth($sizes, 6) * -1);
        }
        .get-in-touch-container {
            position: relative;
            align-self: stretch;
            margin: nth($sizes, 5) 0px;
            .contact-title {
                z-index: 2;
                font-weight: 100;
                text-align: center;
                font-size: 1.5em;
            }
            .oblique-divider:nth-child(1) {
                z-index: -1;
                transform: rotate(1deg) translateY(nth($sizes, 3) * -1);
                background-color: $primaryColor;
            }
            .oblique-divider:nth-child(2) {
                z-index: -1;
                transform: rotate(-1deg) translateY(nth($sizes, 6));
                bottom: 0px;
                background-color: $primaryColor;
            }
        }
        & > div {
            z-index: 2;
        }
        .social-media {
            a {
                & > div {
                    cursor: pointer;
                    padding: nth($sizes, 4);
                    margin: nth($sizes, 2) 0px;
                    border-radius: 1e6px;
                    border: nth($sizes, 2) dashed;
                    border-color: transparent;
                    .icon-container {
                        background-color: $primaryColor;
                        width: nth($sizes, 7);
                        height: nth($sizes, 7);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 1e6px;
                    }
                    .link-container {
                        p {
                            color: $primaryDarkColor;
                        }
                    }
                }
                & > div:hover {
                    border-color: $primaryColor;
                }
            }
        }
    }
}
</style>
