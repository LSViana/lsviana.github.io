<script lang="ts" setup>
const knowledge = {
  frontEnd: [
    'Vue.js',
    'Nuxt.js',
    'TypeScript',
    'Playwright',
    'Storybook'
  ],
  backEnd: [
    'C#',
    'ASP.NET Core',
    'PostgreSQL',
    'Redis',
    'Azure'
  ],
  designQa: [
    'Figma',
    'Storybook',
    'Jest'
  ]
}
</script>

<template>
  <OldHomeSectionCard>
    <OldHomeSectionList title="Front-end" :items="knowledge.frontEnd" />
    <OldHomeSectionList title="Front-end" :items="knowledge.backEnd" />
    <OldHomeSectionList title="Front-end" :items="knowledge.designQa" />
  </OldHomeSectionCard>
</template>
