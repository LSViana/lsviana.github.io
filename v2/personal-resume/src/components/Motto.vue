<template>
    <vue-markdown class="section motto">
        {{ mottoMd }}
    </vue-markdown>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import MottoMd from '@/markdown/Motto.md'

    export default {
        name: 'Motto',
        components: {
            VueMarkdown
        },
        computed: {
            mottoMd: () => MottoMd
        }
    }
</script>

<style lang="scss">
    @import '../styles/variables';
    @import '../styles/components';

    .motto {
        > h3 {
            @extend .mb-6;
            @extend .header-link;
        }
    }
</style>