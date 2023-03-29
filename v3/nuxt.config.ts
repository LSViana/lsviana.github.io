import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge'
  ],
  css: [
    '~/assets/styles/app.scss'
  ],
  app: {
    head: {
      title: 'Lucas Viana\'s Résumé',
      meta: [
        {
          name: 'description',
          content: 'Software Developer efficient with Vue.js, TypeScript, C#, and ASP.NET Core. Curious about software development since 12 y/o.'
        }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
})
