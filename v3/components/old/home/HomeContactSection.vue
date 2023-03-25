<script lang="ts" setup>
const contacts = [
  { text: 'GitHub', href: 'https://github.com/LSViana' },
  { text: 'LinkedIn', href: 'https://linkedin.com/in/lsviana' },
  { text: 'Email', href: 'mailto:lv201122@gmail.com' }
]
</script>

<template>
  <OldHomeSectionCard>
    <OldHomeSectionList title="Contact" :items="contacts">
      <template #item="{ item }">
        <a :href="item.href" target="_blank" class="underline underline-offset-4 decoration-wavy text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
          {{ item.text }}
        </a>
      </template>
    </OldHomeSectionList>
  </OldHomeSectionCard>
</template>
