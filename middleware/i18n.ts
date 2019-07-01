import { types } from '~/store/i18n';

export default function({
	isHMR,
	app,
	store,
	route,
	params,
	error,
	redirect
}: any) {
	const defaultLocale = app.i18n.fallbackLocale;

	if (isHMR) return;

	const locale = params.lang || defaultLocale;
	const i18nState = store.state.i18n;
	if (i18nState.locales.indexOf(locale) === -1) {
		return error({ message: 'This page could not be found', statusCode: 404 });
	}

	store.commit('i18n/' + types.SET_LOCALE, locale);
	app.i18n.locale = i18nState.locale;

	if (
		locale === defaultLocale &&
		route.fullPath.indexOf('/' + defaultLocale) === 0
	) {
		const toReplace = `^/${defaultLocale}${
			route.fullPath.indexOf(`/${defaultLocale}/`) === 0 ? '/' : ''
		}`;
		const re = new RegExp(toReplace);

		return redirect(route.fullPath.replace(re, '/'));
	}
}
