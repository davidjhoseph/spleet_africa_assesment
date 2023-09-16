// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
  ],
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt',],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      google_api_key: process.env.GOOGLE_API_KEY || "default_api_url"
    }
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
    ],
  },
})
