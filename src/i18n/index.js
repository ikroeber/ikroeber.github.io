import { ref, inject } from 'vue'
import pt from './locales/pt'
import en from './locales/en'

const messages = { pt, en }
const I18N_KEY = Symbol('i18n')

export function createI18n() {
  const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('locale') : null
  const locale = ref(saved || 'pt')

  function t(keyPath) {
    const keys = keyPath.split('.')
    // Access locale.value to register reactivity dependency
    let val = messages[locale.value]
    for (const k of keys) {
      if (val == null) return keyPath
      val = val[k]
    }
    return val ?? keyPath
  }

  function setLocale(lang) {
    locale.value = lang
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('locale', lang)
    }
  }

  return { locale, t, setLocale }
}

export function provideI18n(app) {
  const i18n = createI18n()
  app.provide(I18N_KEY, i18n)
  return i18n
}

export function useI18n() {
  const i18n = inject(I18N_KEY)
  if (!i18n) throw new Error('i18n not provided — wrap your app with provideI18n(app)')
  return i18n
}
