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
      newsData: '',
    },
  },

  modules: ["nuxt-simple-robots", "@nuxtjs/sitemap"],

  robots: {
    allow: ['/'],
  },
})