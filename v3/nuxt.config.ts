import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
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
  },
  compatibilityDate: '2024-09-15',
  devServer: {
    host: '0.0.0.0',
  }
})
