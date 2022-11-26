<script lang="ts" setup>
import HomeSectionCard from '~/components/home/HomeSectionCard.vue'
import HomeSectionList from '~/components/home/HomeSectionList.vue'

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
  <HomeSectionCard>
    <HomeSectionList title="Front-end" :items="knowledge.frontEnd" />
    <HomeSectionList title="Front-end" :items="knowledge.backEnd" />
    <HomeSectionList title="Front-end" :items="knowledge.designQa" />
  </HomeSectionCard>
</template>
