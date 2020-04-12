<template>
    <vue-markdown class="section awards">
        {{ awardsMd }}
    </vue-markdown>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import AwardsMd from '@/markdown/Awards.md'

    export default {
        name: 'Awards',
        components: {
            VueMarkdown
        },
        computed: {
            awardsMd: () => AwardsMd
        }
    }
</script>

<style lang="scss">
    @import '../styles/variables';
    @import '../styles/components';

    .awards {
        > h3 {
            @extend .mb-6;
            @extend .header-link;
        }

        h4 {
            a {
                @extend .header-link;
            }
        }

        .items {
            display: flex;
            flex-flow: column nowrap;
            margin: nth($sizes, 6) 0;

            > * {
                margin: nth($sizes, 4) 0;
            }

            .item {
                @extend .py-6;
                @extend .pr-6;

                display: grid;
                grid-template-columns: min-content 1fr;
                grid-template-rows: min-content min-content min-content;
                align-items: center;
                background-color: $darkerGray;
                margin-left: calc(#{nth($sizes, 6)} + 3vw);

                @media (max-width: $mdToLg) {
                    padding-left: nth($sizes, 6);
                    margin-left: 0;
                    grid-template-columns: 1fr;
                    margin-top: calc(#{nth($sizes, 6)} + 3vw);

                    .image {
                        margin-left: 0 !important;
                        margin-right: 0 !important;
                        margin-top: calc((#{nth($sizes, 6)} + 3vw) * -1);
                        margin-bottom: calc(#{nth($sizes, 3)} + 1vw);
                        width: 100%;

                        p {
                            img {
                                width: 100% !important;
                            }
                        }
                    }
                }

                p {
                    a {
                        @extend .text-anchor;
                    }
                }

                .image {
                    @extend .my-n4;

                    grid-row-end: span 3;
                    display: flex;
                    margin-left: calc((#{nth($sizes, 6)} + 3vw) * -1);
                    margin-right: calc(#{nth($sizes, 3)} + 1vw);
                    align-self: stretch;

                    p {
                        width: 100%;
                        height: 100%;

                        img {
                            width: calc(#{nth($sizes, 10)} + 10vw);
                            height: 100%;
                            object-fit: cover;
                            border-radius: nth($sizes, 1);
                        }
                    }
                }

                > *:not(.image) {
                    @extend .my-2;
                }
            }
        }
    }
</style>