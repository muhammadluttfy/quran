// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/devtools',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    'nuxt-mdi',
    '@pinia/nuxt',
    ['@nuxtjs/algolia', {
      apiKey: '2488550c6a66047bf5a3121a764290d4',
      applicationId: 'HAAF2JBD4Q',
      // apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      // applicationId: process.env.ALGOLIA_APPLICATION_ID,
    }]
  ],

  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700]
    },
    useStylesheet: true
  },

  colorMode: {
    preference: 'light'
  },

  ui: {
    global: true,
  }
})
