<template>
    <div
            class="root-container resume-container d-flex flex-row flex-nowrap">
        <overview-bar class="overview-container"/>
        <!-- Container for all sessions -->
        <div class="sessions-container d-flex flex-column">
            <!-- My personal skills -->
            <personal-skills/>
            <hard-skills/>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    @import '../styles/Variables.scss';

    .resume-container {
        .overview-container {
            max-width: 100vw;
            width: 360px;
            border-right: nth($sizes, 3) solid $primaryColor;
        }

        .sessions-container {
            flex: 1;
            max-height: 100vh;
            overflow-y: scroll;

            > * {
                max-width: 100vw;
            }
        }
    }

    @media screen and (max-width: $mdToSm) {
        .resume-container {
            flex-direction: column !important;

            .overview-container {
                width: 100vw;
                border-right: unset;
            }

            .sessions-container {
                flex: unset;
                max-height: unset;
                overflow-y: visible;

                .development-areas {

                    .development-purpose {
                        padding-left: 0;
                        padding-right: 0;
                    }

                    .development-technologies {

                        .technologies-container {
                            grid-template-columns: repeat(auto-fit, minmax(50vw, 1fr));
                        }
                    }
                }
            }
        }
    }

</style>
