<script setup lang="ts">
import LvLink from '~/components/shared/LvLink.vue'
</script>

<template>
  <nav class="flex justify-between items-center border-b-slate-600 border-b-2 pb-6 mb-4">
    <h3 class="text-xl">
      <NuxtLink to="/">
        @lsviana
      </NuxtLink>
    </h3>
    <ul class="flex gap-4">
      <li>
        <LvLink to="/">
          Work & Awards
        </LvLink>
      </li>
      <li>
        <LvLink to="/skills">
          Skills
        </LvLink>
      </li>
    </ul>
  </nav>
</template>
