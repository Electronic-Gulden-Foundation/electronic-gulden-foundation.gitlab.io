
import Vue from 'vue'
import VueMatomo from 'vue-matomo'

export default ({ app }) => {
  Vue.use(VueMatomo, {
    router: app.router,

    // Configure your matomo server and site by providing
    host: 'https://matomo.amazingsystems.nl',
    siteId: 2,

    // Enables link tracking on regular links. Note that this won't
    // work for routing links (ie. internal Vue router links)
    // Default: true
    enableLinkTracking: true,

    // Require consent before sending tracking information to matomo
    // Default: false
    requireConsent: true,

    // Whether to track the initial page view
    // Default: true
    trackInitialView: true,

    // Whether or not to log debug information
    // Default: false
    debug: false,
  })
}
