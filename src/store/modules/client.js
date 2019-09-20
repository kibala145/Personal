import {i18n, loadLanguageAsync} from '@/i18n'

export default {
  state: {
    lang: JSON.parse(localStorage.getItem('lang')) || 'en'
  },
  mutations: {
    SET_LANG(state, lang) {
      localStorage.setItem('lang', JSON.stringify(lang));
      i18n.locale = lang;
      state.lang = lang;
    }
  },
  actions: {
    SET_LANG({commit}, lang) {
      loadLanguageAsync(lang).then(() => {
        commit('SET_LANG', lang)
      });
    }
  }
}
