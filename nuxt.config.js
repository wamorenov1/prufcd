export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Crédito Digital Compensar',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/gtm', 'bootstrap-vue/nuxt'
  ],
  // Config Google Tag Manager Tag
  gtm: {
    id: 'GTM-WWQ69LL',
    enabled: true, 
    debug: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
