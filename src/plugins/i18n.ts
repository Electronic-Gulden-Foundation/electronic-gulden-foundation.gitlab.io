import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  const i18nState = store.state.i18n

  app.i18n = new VueI18n({
    locale: i18nState.locale,
    fallbackLocale: 'nl',
    messages: {
      nl: require('~/locales/nl.ts').default
    }
  })

  app.i18n.path = (link: string) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
