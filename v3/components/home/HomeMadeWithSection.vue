<script lang="ts" setup>
const items = [
  'Nuxt.js',
  'Vite',
  'TailwindCSS',
  '❤️'
]
</script>

<template>
  <HomeSectionCard>
    <HomeSectionList title="Made with" :items="items" />
  </HomeSectionCard>
</template>
