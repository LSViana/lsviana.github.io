<template>
    <div
        class="root-container resume-container d-flex flex-flow flex-nowrap">
        <OverviewBar class="overview-container" />
        <!-- Container for all sessions -->
        <div class="sessions-container">
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../styles/Variables.scss';

.resume-container {
    .overview-container {
        max-width: 360px;
        border-right: nth($sizes, 2) solid $primaryColor;
    }
    .sessions-container {
        flex: 1;
    }
}
</style>
