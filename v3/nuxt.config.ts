import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/styles/app.scss'
  ],
  app: {
    head: {
      title: 'Lucas Viana\'s Résumé',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        }
      ]
    }
  }
})
