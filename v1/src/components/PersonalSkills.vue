<template>
    <div class="personal-skills">
        <sticky-header number="I" title="Personal Overview"/>
        <div class="intro-row pa-8">
            <p class="text-underline size-7 primary--text">
                A Software Developer which has been loving this art since 2013, when he was just 12 y/o.
                Since back then, he's been discovering how to make humans do only what humans should do.
            </p>
        </div>

        <div class="square-wave-primary"/>
        <div class="awards-container primary pa-8">
            <h3 class="white--text bold size-7 font-weight-light">
                Awards:
            </h3>
            <div class="awards-items">
                <div class="award-item">
                    <div class="d-flex flex-row flex-wrap align-center">
                        <fa-icon :icon="['fas', 'award']" class="size-8 accent--text"/>
                        <h2 class="mx-4 size-8 accent--text">
                            1st
                        </h2>
                        <h3 class="award-title">
                            <span>Statewide Champion</span>
                            in
                            <span class="award-competition-name">
                                <a href="https://saopauloskills.sp.senai.br/" target="blank">
                                    São Paulo Skills 2019
                                </a>
                            </span>
                        </h3>
                    </div>
                    <div class="d-flex flex-row flex-wrap">
                        <h5 class="award-date primary--text white py-3 px-4 border-radius-4 ma-2">
                            December, 2019
                        </h5>
                        <h5 class="award-date primary--text white py-3 px-4 border-radius-4 ma-2">
                            Awarded in Escola SENAI de Informática
                        </h5>
                    </div>
                    <p>
                        Competing in another skill in this edition, I got the <span class="accent--text bold">the highest grade</span>
                        among competitors of SENAI Informática (the school I'm competing for). The next step is the
                        National Phase! 🎉
                    </p>
                </div>
                <div class="award-item">
                    <div class="d-flex flex-row flex-wrap align-center">
                        <fa-icon :icon="['fas', 'award']" class="size-8 accent--text"/>
                        <h2 class="mx-4 size-8 accent--text">
                            1st
                        </h2>
                        <h3 class="award-title">
                            <span>Statewide Champion</span>
                            in
                            <span class="award-competition-name">
                                <a href="https://saopauloskills.sp.senai.br/" target="blank">
                                    São Paulo Skills 2017
                                </a>
                            </span>
                        </h3>
                    </div>
                    <div class="d-flex flex-row flex-wrap">
                        <h5 class="award-date primary--text white py-3 px-4 border-radius-4 ma-2">
                            November, 2017
                        </h5>
                        <h5 class="award-date primary--text white py-3 px-4 border-radius-4 ma-2">
                            Awarded in Elis Regina Anhembi Auditorium
                        </h5>
                    </div>
                    <p>
                        This competition is organized by SENAI, each state (similar to province) of Brazil performs its
                        own. I won this competition in the modality of Desktop Software Development taking a score <span
                            class="accent--text bold size-6">56 points higher</span> than the 2nd place (in a range of
                        0-100)!
                    </p>
                </div>
                <div class="award-item">
                    <div class="d-flex flex-row flex-wrap align-center">
                        <fa-icon :icon="['fas', 'trophy']" class="size-8 accent--text"/>
                        <h2 class="mx-4 size-8 accent--text">
                            Finalist
                        </h2>
                        <h3 class="award-title">
                            <span>Americas Regional Finals</span>
                            in
                            <span class="award-competition-name">
                                <a href="https://imaginecup.microsoft.com/en-us/Team/1243c298-1463-460d-b7bd-3450bbb8248d"
                                   target="blank">
                                    Microsoft Imagine Cup 2019
                                </a>
                            </span>
                        </h3>
                    </div>
                    <div class="d-flex flex-row flex-wrap">
                        <h5 class="award-date primary--text white py-3 px-4 border-radius-4 ma-2">
                            May, 2019
                        </h5>
                        <h5 class="award-date primary--text white py-3 px-4 border-radius-4 ma-2">
                            Awarded in Microsoft Campus, Redmond, Washington
                        </h5>
                    </div>
                    <p>
                        As one of the members of <span class="accent--text bold">Speex Team</span>, we were part
                        of Imagine Cup 2019, organized by Microsoft to reunite competitors from the whole world to bring
                        their innovative ideas for social, business and general good. We were one of the <span
                            class="accent--text bold">12 teams</span> selected from the whole America's
                        continent.
                    </p>
                </div>
                <div class="award-item">
                    <div class="d-flex flex-row flex-wrap align-center">
                        <fa-icon :icon="['fas', 'university']" class="size-8 accent--text"/>
                        <h2 class="mx-4 size-8 accent--text">
                            Outstanding Student
                        </h2>
                        <h3 class="award-title">
                            <span>Video Advertisement</span>
                            in
                            <span class="award-competition-name">
                                <a href="https://www.youtube.com/watch?v=f5jvV2mVM08" target="blank">
                                    Instituto Federal de São Paulo
                                </a>
                            </span>
                        </h3>
                    </div>
                    <div class="d-flex flex-row flex-wrap">
                        <h5 class="award-date primary--text white py-3 px-4 border-radius-4 ma-2">
                            October, 2016
                        </h5>
                        <h5 class="award-date primary--text white py-3 px-4 border-radius-4 ma-2">
                            Presented a video advertisement for oncoming students
                        </h5>
                    </div>
                    <p>
                        Teachers from the IT area chose one student to talk about the school, based on grades and
                        overall performance. I'm proud I could do that and be the one to share the word about our
                        Federal School.
                    </p>
                </div>
            </div>
        </div>
        <div class="square-wave-white primary"/>
        <div class="education-container pa-8">
            <h3 class="primary--text bold size-7 font-weight-light">
                Education:
            </h3>
            <div class="education-timeline pl-4">
                <div class="education-border-line"/>
                <div class="education-item d-flex flex-row align-stretch flex-nowrap my-4">
                    <div class="education-left-line"/>
                    <div class="education-school-logo primary">
                        <img
                                style="filter: hue-rotate(-15deg)"
                                src="../assets/svg/univesp-purple.svg"
                                alt="Escola SENAI de Informática's logo">
                    </div>
                    <div class="education-item-description">
                        <div class="education-title">
                            <p class="size-7 font-weight-light primary--text">
                                <span>Bachelor of Computer Science</span>
                                in
                                <span class="education-school font-weight-bold">
                                    <a href="https://univesp.br/" target="blank">
                                        Universidade Virtual do Estado de São Paulo
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div class="education-date">
                            <p class="bold size-6">
                                2020-2023
                            </p>
                        </div>
                        <div class="education-description">
                            <p>
                                This course is offered by <strong>USP</strong>, <strong>UNICAMP</strong> and <strong>UNIFESP</strong>
                                teachers in a distance education modality. This allows students like me to make the most
                                out of their time while still having access to other people interested in the same
                                subjects (like software development for web and desktop, database management, <i>et
                                cetera</i>)!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="education-item d-flex flex-row align-stretch flex-nowrap my-4">
                    <div class="education-left-line"/>
                    <div class="education-school-logo primary">
                        <img src="../assets/svg/if-purple.svg" alt="Instituto Federal de São Paulo's logo">
                    </div>
                    <div class="education-item-description">
                        <div class="education-title">
                            <p class="size-7 font-weight-light primary--text">
                                <span>Software Development Technician</span>
                                in
                                <span class="education-school font-weight-bold">
                                    <a href="https://spo.ifsp.edu.br/" target="blank">
                                        Instituto Federal de São Paulo
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div class="education-date">
                            <p class="bold size-6">
                                2016-2019
                            </p>
                        </div>
                        <div class="education-description">
                            <p>
                                This course lasted 4 years because it was integrated to High School, I did like the
                                people I met here, I could evolve a lot and see new horizons. Since back there, when I
                                started here, I am used to say this course was a great choice to complement the one from
                                <span>Escola SENAI de Informática</span>.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="education-item d-flex flex-row align-stretch flex-nowrap my-4">
                    <div class="education-left-line"/>
                    <div class="education-school-logo primary">
                        <img
                                style="filter: hue-rotate(-15deg)"
                                src="../assets/jpg/senai-purple.jpeg"
                                alt="Escola SENAI de Informática's logo">
                    </div>
                    <div class="education-item-description">
                        <div class="education-title">
                            <p class="size-7 font-weight-light primary--text">
                                <span>Software Development Technician</span>
                                in
                                <span class="education-school font-weight-bold">
                                    <a href="https://informatica.sp.senai.br/" target="blank">
                                        Escola SENAI de Informática
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div class="education-date">
                            <p class="bold size-6">
                                2017-2018
                            </p>
                        </div>
                        <div class="education-description">
                            <p>
                                Here I could dive in some new technologies and improve the major concepts about
                                programming, which I started developing on my own since I was 12 y/o. At this course I
                                learned about desktop, web and mobile software development.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="education-item d-flex flex-row align-stretch flex-nowrap my-4">
                    <div class="education-left-line"/>
                    <div class="education-school-logo primary">
                        <img
                                style="filter: hue-rotate(-15deg)"
                                src="../assets/jpg/senai-purple.jpeg"
                                alt="Escola SENAI de Informática's logo">
                    </div>
                    <div class="education-item-description">
                        <div class="education-title">
                            <p class="size-7 font-weight-light primary--text">
                                <span>Software and Hardware Assistant</span>
                                in
                                <span class="education-school font-weight-bold">
                                    <a href="https://informatica.sp.senai.br/" target="blank">
                                        Escola SENAI de Informática
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div class="education-date">
                            <p class="bold size-6">
                                2016-2016
                            </p>
                        </div>
                        <div class="education-description">
                            <p>
                                I learned loving software by my own, but if I couldn't handle my hardware to support
                                such a good software I'd not survive. As a student, it was one of the best places I
                                could ever choose to study!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="education-border-line"/>
            </div>
        </div>
        <div class="wavy-primary"/>
        <div class="interests-container primary pa-6">
            <h3 class="white--text bold size-7 font-weight-light">
                Interests:
            </h3>
            <div class="interests-cards d-flex flex-row flex-wrap justify-center align-center">
                <div class="d-flex flex-column justify-center align-center">
                    <fa-icon :icon="['fas', 'bicycle']" class="accent--text size-8"/>
                    <p class="text-uppercase size-6 font-weight-bold white--text">
                        Cycling
                    </p>
                </div>
                <div class="d-flex flex-column justify-center align-center">
                    <fa-icon :icon="['fas', 'futbol']" class="accent--text size-8"/>
                    <p class="text-uppercase size-6 font-weight-bold white--text">
                        Futsal
                    </p>
                </div>
                <div class="d-flex flex-column justify-center align-center">
                    <fa-icon :icon="['fas', 'code-branch']" class="accent--text size-8"/>
                    <p class="text-uppercase size-6 font-weight-bold white--text">
                        Logic
                    </p>
                </div>
                <div class="d-flex flex-column justify-center align-center">
                    <fa-icon :icon="['fas', 'drafting-compass']" class="accent--text size-8"/>
                    <p class="text-uppercase size-6 font-weight-bold white--text">
                        Design
                    </p>
                </div>
                <div class="d-flex flex-column justify-center align-center">
                    <fa-icon :icon="['fas', 'magic']" class="accent--text size-8"/>
                    <span class="d-flex flex-column align-center text-uppercase size-6 font-weight-bold white--text">
                        <p>
                            Vanguard
                        </p>
                        <p>
                            Technologies
                        </p>
                    </span>
                </div>
                <div class="d-flex flex-column justify-center align-center">
                    <fa-icon :icon="['fas', 'gamepad']" class="accent--text size-8"/>
                    <p class="text-uppercase size-6 font-weight-bold white--text">
                        Games
                    </p>
                </div>
                <div class="d-flex flex-column justify-center align-center">
                    <fa-icon :icon="['fas', 'vr-cardboard']" class="accent--text size-8"/>
                    <p class="text-uppercase size-6 font-weight-bold white--text">
                        Virtual Reality
                    </p>
                </div>
                <div class="d-flex flex-column justify-center align-center">
                    <fa-icon :icon="['fas', 'superscript']" class="accent--text size-8"/>
                    <p class="text-uppercase size-6 font-weight-bold white--text">
                        Math
                    </p>
                </div>
                <div class="d-flex flex-column justify-center align-center">
                    <fa-icon :icon="['fas', 'dove']" class="accent--text size-8"/>
                    <p class="text-uppercase size-6 font-weight-bold white--text">
                        Natural Science
                    </p>
                </div>
            </div>
        </div>
        <div class="wavy-white primary"/>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    @import '../styles/Variables.scss';

    .intro-row {
        & > p {
            line-height: 150%;
        }
    }

    .interests-container {
        .interests-cards {
            & > div {
                margin: nth($sizes, 6);

                & > * {
                    margin: nth($sizes, 4);
                }
            }
        }
    }

    .education-container {
        .education-timeline {
            .education-border-line {
                width: nth($sizes, 4);
                height: nth($sizes, 9);
                margin-left: nth($sizes, 4);
                border-left: nth($sizes, 3) $primaryColor dashed;
            }

            .education-item {
                position: relative;

                .education-school-logo {
                    position: absolute;
                    height: nth($sizes, 9);
                    width: nth($sizes, 9);
                    left: (nth($sizes, 7) + nth($sizes, 3)) * -.5;
                    top: nth($sizes, 4);
                    border-radius: #{1e6}px;
                    border: nth($sizes, 3) $primaryColor solid;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        width: nth($sizes, 9);
                    }
                }

                .education-left-line {
                    position: relative;
                    width: nth($sizes, 3);
                    background: $primaryColor;
                    margin-right: nth($sizes, 8);
                    margin-left: nth($sizes, 4);
                    flex-shrink: 0;
                    margin-top: nth($sizes, 4) * -1;
                }

                .education-item-description {
                    padding-top: nth($sizes, 4);
                    padding-bottom: nth($sizes, 4);

                    .education-date {
                        color: $primaryColor;
                    }

                    .education-title {
                        p {
                            margin: nth($sizes, 4) 0;

                            span:nth-child(1) {
                                background-color: $primaryColor;
                                padding: nth($sizes, 3) nth($sizes, 5);
                                border-radius: nth($sizes, 4);
                                color: $accentColor;
                                font-weight: 700;
                            }

                            span.education-school {
                                a {
                                    border-bottom: nth($sizes, 2) dashed $primaryColor;
                                }
                            }
                        }
                    }

                    .education-description {
                        color: $darkGrayColor;

                        p {
                            @extend .size-6;
                            @extend .line-height-8;
                        }

                        span {
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }

    .awards-container {
        .awards-items {
            .award-item {
                margin: nth($sizes, 8) 0px;
                color: white;

                .award-title {
                    margin: nth($sizes, 3) 0px;

                    span:nth-child(1) {
                        padding: nth($sizes, 2) nth($sizes, 4);
                        border-radius: nth($sizes, 3);
                        background: $accentColor;
                        color: $primaryColor;
                    }

                    .award-competition-name {
                        a {
                            border-bottom: nth($sizes, 2) dashed white;
                        }
                    }
                }

                > p {
                    @extend .size-6;
                    @extend .line-height-8;
                }
            }
        }
    }

</style>
