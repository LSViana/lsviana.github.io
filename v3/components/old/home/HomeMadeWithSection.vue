<script lang="ts" setup>
const items = [
  'Nuxt.js',
  'Vite',
  'TailwindCSS',
  '❤️'
]
</script>

<template>
  <OldHomeSectionCard>
    <OldHomeSectionList title="Made with" :items="items" />
  </OldHomeSectionCard>
</template>
