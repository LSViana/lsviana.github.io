<template>
    <div class="root-container overview-container d-flex flex-column primary">
        <div
            class="profile-container d-flex flex-column align-center pa-5">
            <div class="picture-container">
                <img
                    src="../assets/png/profile.png"
                    alt="Profile picture">
            </div>
            <div class="text-container d-flex flex-column align-center">
                <h2 class="author-name white--text cursive">
                    Lucas Viana
                </h2>
                <h4 class="role-names bold">
                    <span>Software Developer</span> and <span>Game Enthusiast</span>
                </h4>
            </div>
        </div>
        <div class="contact-container">
            <div class="oblique-divider"></div>
            
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
    overflow: hidden;
    .profile-container {
        margin-bottom: nth($sizes, 7);
        .picture-container {
            border-radius: 1e6px;
            border: nth($sizes, 2) solid $accentColor;
            overflow: hidden;
            width: 60%;
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
                span {
                    border-bottom: nth($sizes, 1) dashed white;
                }
            }
        }
    }

    .contact-container {
        background-color: white;
        flex: 1;
        position: relative;
        padding-top: nth($sizes, 7);
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        .oblique-divider {
            background-color: white;
            height: nth($sizes, 7);
            width: 150%;
            top: -1 * nth($sizes, 5);
            position: absolute;
            transform: rotate(-4deg);
        }
    }
}
</style>
