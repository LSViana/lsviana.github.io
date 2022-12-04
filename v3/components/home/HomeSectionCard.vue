<script setup lang="ts">
const props = withDefaults(defineProps<{
  dense: boolean
}>(), {
  dense: false
})

</script>

<template>
  <div
    class="text-center p-3 md:p-8 flex flex-col bg-slate-300 dark:bg-slate-700 rounded-lg border border-slate-600"
    :class="[props.dense ? 'space-y-3 md:space-y-5' : 'space-y-5']"
  >
    <slot />
  </div>
</template>
