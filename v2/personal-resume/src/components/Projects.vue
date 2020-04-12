<template>
    <vue-markdown class="section projects">
        {{ projectsMd }}
    </vue-markdown>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import ProjectsMd from '@/markdown/Projects.md'

    export default {
        name: 'Projects',
        components: {
            VueMarkdown
        },
        computed: {
            projectsMd: () => ProjectsMd
        }
    }
</script>

<style lang="scss">
    @import '../styles/variables';
    @import '../styles/components';

    .projects {
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
            flex-flow: row wrap;
            justify-content: center;
            margin: nth($sizes, 4) nth($sizes, 4) * -1;

            > * {
                margin: nth($sizes, 4);
                flex-basis: 360px;
            }

            .item {
                @extend .pa-6;
                @extend .bordered-container;

                margin: nth($sizes, 2) * -1 0;
                display: flex;
                flex-flow: column nowrap;
                background-color: $darkerGray;

                > * {
                    margin: nth($sizes, 2) 0;
                }
            }
        }
    }
</style>