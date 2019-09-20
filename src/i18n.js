import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'

Vue.use(VueI18n);

// First launch language
// const initLang = JSON.parse(localStorage.getItem('lang')) || process.env.VUE_APP_I18N_LOCALE || 'en';

export const i18n = new VueI18n({
  // locale: store.state.client.lang,
  // fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
});

// Array of loaded languages
const loadedLanguages = [];

/*// Exporting state to know when lang is ready
export const state = {
  initMessagesLoaded: false
};*/

// Load init messages
// loadLanguageAsync(initLang)/*.then(() => {debugger; state.initMessagesLoaded = true})*/;

function setI18nLanguage (lang) {
  i18n.locale = lang;
  axios.defaults.headers.common['Accept-Language'] = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

export function loadLanguageAsync(lang) {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language hasn't been loaded yet
  return import(/* webpackChunkName: "lang-[request]" */ `@/locales/${lang}.json`).then(
    messages => {
      i18n.setLocaleMessage(lang, messages.default)
      loadedLanguages.push(lang)
      return setI18nLanguage(lang)
    }
  )
}
