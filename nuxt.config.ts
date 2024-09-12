// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: './dd/',
    head: {
      htmlAttrs: { dir: 'rtl', lang: 'fa' },
      link: [{ rel: 'icon', type: 'image/png', href: "/logo.png" }]
    },
  },
  features: {
    noScripts:true,
    inlineStyles:false,

  },
  router: {
    base: '/ata/'
  },
  build: {
    extractCSS: {
      allChunks: true
    }

  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss","@nuxtjs/color-mode"],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  tailwindcss: { exposeConfig: true },
  css: [
    '~/assets/css/main.scss'
  ]
})