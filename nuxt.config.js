const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /**
   * Root directory of the app
   */
  srcDir: 'src/',

  /**
   *  Customize the progress-bar color
   */
  loading: { color: '#fff' },

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
    '@nuxtjs/style-resources'
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
    'bootstrap/scss/bootstrap.scss'
  ],

  /**
   * Include resources in all styles, for global variables
   */
  styleResources: {
    scss: [
      'bootstrap/scss/_functions.scss',
      'bootstrap/scss/_variables.scss',
      '~/assets/scss/*.scss'
    ]
  },

  /**
   *  Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/i18n.ts'
  ],

  /**
   * Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
