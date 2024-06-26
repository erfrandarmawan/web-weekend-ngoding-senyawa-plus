// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['gsap'],
  },

  runtimeConfig: {
    public: {
      newsData: process.env.NUXT_PUBLIC_NEWS_DATA || '',
    },
  },

  modules: ["nuxt-simple-robots", "@nuxtjs/sitemap"],

  robots: {
    allow: ['/'],
  },
})