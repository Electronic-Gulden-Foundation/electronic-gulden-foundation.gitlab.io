import { Configuration } from '@nuxt/types'
import DynamicRoutes from './data/DynamicRoutes'

const config: Configuration = {
  mode: 'universal',

  buildModules: ['@nuxt/typescript-build'],

  /**
   *  Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /**
   * Customize the generated output folder
   */
  generate: {
    dir: 'public',
    routes: DynamicRoutes
  },

  /**
   *  Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',

    '@nuxtjs/pwa',

    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',

    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/markdownit
    '@nuxtjs/markdownit',

    'vue-scrollto/nuxt'
  ],

  /**
   * Router configuration
   */
  router: {
    middleware: 'i18n'
  },

  /**
   *  Global CSS
   */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/scss/common.scss'
  ],

  /**
   * Include resources in all styles, for global variables
   */
  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
      '~/assets/scss/_mixins.scss',
      'bootstrap/scss/_functions.scss',
      'bootstrap/scss/_variables.scss',
      'bootstrap/scss/_mixins.scss'
    ]
  },

  /**
   *  Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/fontawesome.ts',
    '~/plugins/i18n.ts',
    { src: '~/plugins/framebuster.ts', ssr: false },
    { src: '~/plugins/vue-matomo.ts', ssr: false }
  ],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  /**
   * Headers of the page
   */
  head: {
    title: 'De Nederlandse Cryptocurrency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'De Nederlandse Cryptocurrency'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    credentials: false,
    proxyHeaders: false,
    debug: true
  },

  markdownit: {
    injected: true
  },

  build: {
    extractCSS: true
  }
}

export default config
