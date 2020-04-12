<template>
    <section class="home">
        <Welcome/>
        <Motto/>
        <Awards/>
    </section>
</template>

<script>
    import Welcome from '@/components/Welcome'
    import Motto from '@/components/Motto'
    import Awards from '@/components/Awards'

    export default {
        name: 'Home',
        components: {
            Awards,
            Motto,
            Welcome
        }
    }
</script>

<style lang="scss">
    @import '../styles/variables';

    .home {

        .section {
            color: $textColor;
        }
    }
</style>
