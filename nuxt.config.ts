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
    '@pinia/nuxt'
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
