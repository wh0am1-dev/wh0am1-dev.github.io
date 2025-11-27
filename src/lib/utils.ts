import { dev, browser } from '$app/environment'

/**
 * Checks if a given URL belongs to the same domain as the current site.
 * @param url The URL to check.
 * @returns True if the URL is on the same domain, false otherwise.
 */
export const ownLink = (url: string): boolean => {
  if (dev) {
    return 'carlos-aguilar.com' === new URL(url).hostname
  }

  if (browser) {
    return location.hostname === new URL(url).hostname
  }

  return true
}

/**
 * Deeply merges two objects.
 * @param target The target object to merge into.
 * @param source The source object to merge from.
 * @returns The merged object.
 */
export const deepMerge = <T>(target: T, source: Partial<T>): T => {
  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      if (!target[key] || typeof target[key] !== 'object') {
        target[key] = {} as any // eslint-disable-line @typescript-eslint/no-explicit-any
      }

      deepMerge(
        target[key],
        source[key] as Partial<(typeof target)[typeof key]>
      )
    } else {
      target[key] = source[key] as (typeof target)[typeof key]
    }
  }

  return target
}
