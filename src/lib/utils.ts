import { dev, browser } from '$app/environment'

export const ownLink = (url: string): boolean => {
  if (dev) {
    return 'carlos-aguilar.com' === new URL(url).hostname
  }

  if (browser) {
    return location.hostname === new URL(url).hostname
  }

  return true
}
