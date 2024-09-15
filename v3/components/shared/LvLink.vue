<script lang="ts" setup>
const props = withDefaults(defineProps<{
  to?: string,
  href?: string,
  target?: '_blank' | '_self' | '_parent' | '_top',
  activeClass?: string
}>(), {
  activeClass: 'font-bold bg-blue-200 dark:bg-blue-900',
  target: '_self',
  to: undefined,
  href: undefined,
})
</script>

<template>
  <NuxtLink
    class="underline underline-offset-4 text-blue-700
      hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
    :to="props.to"
    :href="props.href"
    :target="props.target"
    :active-class="props.activeClass"
  >
    <slot />
  </NuxtLink>
</template>
