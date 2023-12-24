<script setup lang="ts">
import Header from '~/components/home/Header.vue'
import Identification from '~/components/home/Identification.vue'

onMounted(() => {
  // If this is removed, make sure to remove the `.invisible` class from the template below.
  window.location.href = `https://lsviana.framer.website${window.location.pathname}`
})
</script>

<template>
  <NuxtLayout>
    <div class="invisible bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 min-h-screen flex justify-center">
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
