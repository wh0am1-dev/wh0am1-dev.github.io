import { writable, derived } from 'svelte/store'
import { browser } from '$app/environment'
import en from '$lib/i18n/en.json'
import es from '$lib/i18n/es.json'

const getLanguage = () => {
  if (browser) {
    const stored = localStorage.getItem('lang')
    if (stored) return stored

    const user = navigator.language.split(/-|_/)[0]
    if (user) return user
  }

  return 'en'
}

export const lang = writable(getLanguage())
lang.subscribe(l => browser && localStorage.setItem('lang', l))

export const i18n = derived(lang, $lang => ($lang === 'es' ? es : en))
