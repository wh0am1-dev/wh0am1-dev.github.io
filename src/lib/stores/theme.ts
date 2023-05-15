import { writable } from 'svelte/store'
import { browser } from '$app/environment'

type Theme = 'dark' | 'light'

export const theme = writable<Theme>(
  (() => {
    if (!browser) return 'dark'

    const stored = localStorage.getItem('theme')
    if (stored) return stored as Theme

    const user = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    if (user !== undefined) return user ? 'dark' : 'light'

    return 'dark'
  })()
)

theme.subscribe(t => {
  if (browser) {
    localStorage.setItem('theme', t)
    if (t === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }
})
