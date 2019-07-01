import { ActionTree, GetterTree, MutationTree } from 'vuex';

export interface State {
	locales: string[];
	locale: string;
}

export const types = {
	SET_LOCALE: 'SET_LOCALE'
};

export const namespaced = true;

export const state = (): State => ({
	locales: ['nl'],
	locale: 'nl'
});

export const getters: GetterTree<State, State> = {
	getLocale: (state: State) => state.locale
};

export const actions: ActionTree<State, State> = {
	setLocale({ commit }, locale) {
		commit(types.SET_LOCALE, locale);
	}
};

export const mutations: MutationTree<State> = {
	[types.SET_LOCALE](state: State, locale: string) {
		state.locale = locale;
	}
};
