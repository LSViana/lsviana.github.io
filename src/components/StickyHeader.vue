<template>
    <div class="position-sticky header-row pa-5 d-flex flex-row align-center white">
        <span
            class="header-title-marker accent--text size-7 primary d-flex flex-row justify-center align-center bold">
            {{number}}
        </span>
        <div class="pa-3" />
        <h1 class="header-title primary--text bold">
            {{title}}
        </h1>
    </div>
</template>

<script>
export default {
    props: {
        number: {
            type: String,
            default: 'I',
        },
        title: {
            type: String,
            default: 'Title',
        }
    }
}
</script>

<style lang="scss">
@import '../styles/Variables.scss';

.position-sticky {
    position: sticky;
    top: 0;
}

@media screen and (max-width: $mdToSm) {
    .position-sticky {
        position: relative;
        top: 0;
    }   
}

.header-row {
    z-index: 5;
    border-bottom: $primaryColor nth($sizes, 3) dashed;
    .header-title {
        font-weight: 100;
    }
    .header-title-marker {
        border-radius: 100%;
        width: nth($sizes, 8);
        height: nth($sizes, 8);
    }
}
</style>
