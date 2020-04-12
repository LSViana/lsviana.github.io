<template>
    <vue-markdown class="section welcome">
        {{ welcomeMd }}
    </vue-markdown>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import WelcomeMd from '@/markdown/Welcome.md'

    export default {
        name: 'Welcome',
        components: {
            VueMarkdown
        },
        computed: {
            welcomeMd: () => WelcomeMd
        }
    }
</script>

<style lang="scss">
    @import '../styles/variables';
    @import '../styles/components';

    .welcome {

        background-color: $darkestGray !important;
        background-image: url('/assets/svg/welcome-background.svg');
        background-size: 100%;
        background-position: top;
        background-repeat: no-repeat;

        &::after {
            display: none;
        }

        h1 {
            @extend .wavy-underline;
        }

        h2 {
            @extend .font-weight-lighter;
        }

        .author-image {
            @extend .bordered-image;

            img {
                width: calc(#{nth($sizes, 9)} + 6vw);
                height: calc(#{nth($sizes, 9)} + 6vw);
                border-radius: 50%;
            }
        }

        .information {
            display: flex;
            justify-content: space-between;
            flex-flow: row wrap;
            margin: nth($sizes, 2) * -1;
            align-self: stretch;

            @media (max-width: $md) {
                flex-flow: column;
                align-items: flex-start;
            }

            > * {
                margin: nth($sizes, 2);
            }

            .item {
                &:nth-child(1) {
                    p {
                        a {
                            @extend .text-anchor;
                        }
                    }
                }

                &:nth-child(2) {
                    h3 {
                        @extend .mb-2;
                    }

                    p {
                        display: flex;
                        margin: 0 nth($sizes, 1) * -1;

                        > * {
                            margin: 0 nth($sizes, 1);
                        }
                    }

                    a {
                        @extend .circular-button;
                        display: flex;

                        svg, img {
                            width: calc(#{nth($sizes, 5)} + .5vw);
                            height: calc(#{nth($sizes, 5)} + .5vw);
                        }
                    }

                }

                &:nth-child(3) {
                    h3 {
                        @extend .mb-2;
                    }

                    p {
                        display: grid;
                        grid-gap: nth($sizes, 1);
                        grid-template-rows: repeat(2, 1fr);
                        grid-template-columns: repeat(3, 1fr);

                        a {
                            @extend .button;
                            @extend .font-weight-normal;

                            text-align: center;

                            &:last-child {
                                grid-column-end: span 3;
                            }
                        }
                    }
                }
            }
        }
    }
</style>