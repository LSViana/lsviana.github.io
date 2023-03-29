<script setup lang="ts">
import LvLink from '~/components/shared/LvLink.vue'
</script>

<template>
  <aside class="flex flex-col">
    <img src="/img/lucas.webp" alt="Lucas' profile picture" class="rounded-full" width="192" height="192">
    <div class="mt-8">
      <p>
        Web developer and designer.
        <br>
        <small class="opacity-75">
          Make humans do only what humans should do.
        </small>
      </p>
      <p class="mt-4">
        Currently <LvLink href="https://www.testdome.com/" target="_blank">@TestDome</LvLink>.
      </p>
    </div>
    <ul class="mt-4 flex flex-col gap-2 text-sm">
      <li>
        <LvLink href="https://www.linkedin.com/in/lsviana/" target="_blank">LinkedIn</LvLink>
      </li>
      <li>
        <LvLink href="https://github.com/LSViana" target="_blank">GitHub</LvLink>
      </li>
      <li>
        <LvLink href="mailto:lv201122@gmail.com">Email</LvLink>
      </li>
    </ul>
  </aside>
</template>
