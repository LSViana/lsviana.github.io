<script setup lang="ts">
import Header from '~/components/home/Header.vue'
import Identification from '~/components/home/Identification.vue'
</script>

<template>
  <NuxtLayout>
    <div class="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 min-h-screen flex justify-center">
      <div class="container flex flex-col space-y-4 py-8 px-4">
        <Header />
        <main class="grid md:grid-cols-6 md:gap-x-4 gap-y-4 flex-grow">
          <Identification class="col-span-2" />
          <div class="col-span-4 mt-4">
            <NuxtPage />
          </div>
        </main>
      </div>
    </div>
  </NuxtLayout>
</template>
