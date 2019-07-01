import NuxtConfiguration from '@nuxt/config';

const config: NuxtConfiguration = {
	mode: 'universal',

	/**
	 *  Customize the progress-bar color
	 */
	loading: { color: '#fff' },

	/**
	 * Customize the generated output folder
	 */
	generate: {
		dir: 'public'
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
		'@nuxtjs/markdownit'
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
			'bootstrap/scss/_functions.scss',
			'bootstrap/scss/_variables.scss',
			'~/assets/scss/_variables.scss'
		]
	},

	/**
	 *  Plugins to load before mounting the App
	 */
	plugins: ['~/plugins/fontawesome.ts', '~/plugins/i18n.ts'],

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
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
	}
};

export default config;
