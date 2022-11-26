<script lang="ts" setup>
const contacts = [
  { text: 'GitHub', href: 'https://github.com/LSViana' },
  { text: 'LinkedIn', href: 'https://linkedin.com/in/lsviana' },
  { text: 'Email', href: 'mailto:lv201122@gmail.com' }
]
</script>

<template>
  <HomeSectionCard>
    <HomeSectionList title="Contact" :items="contacts">
      <template #item="{ item }">
        <a :href="item.href" target="_blank" class="underline underline-offset-4 decoration-wavy">{{ item.text }}</a>
      </template>
    </HomeSectionList>
  </HomeSectionCard>
</template>
