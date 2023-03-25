<script lang="ts" setup>
const props = defineProps<{
  title: string;
  items: unknown[];
}>()
</script>

<template>
  <div>
    <div class="uppercase opacity-50 text-sm mb-0">
      {{ props.title }}
    </div>
    <div>
      <template v-for="(item, index) in props.items" :key="index">
        <span class="knowledge-item">
          <slot name="item" v-bind="{ item, index }">
            {{ item }}
          </slot>
        </span>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.knowledge-item {
  &:not(:last-child):after {
    content: ' · ';
    user-select: none;
    opacity: 50%;
  }
}
</style>
