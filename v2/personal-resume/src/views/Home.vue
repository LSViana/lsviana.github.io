<template>
    <section class="home">
        <Welcome/>
        <Motto/>
        <Awards/>
        <Projects/>
    </section>
</template>

<script>
    import Welcome from '@/components/Welcome'
    import Motto from '@/components/Motto'
    import Awards from '@/components/Awards'
    import Projects from '@/components/Projects'

    export default {
        name: 'Home',
        components: {
            Projects,
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
