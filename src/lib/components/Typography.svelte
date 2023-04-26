<script lang="ts">
  type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  export let element: Element = 'p'

  let className = ''
  export { className as class }
</script>

<svelte:element this={element} class={className}>
  <slot />
</svelte:element>

<style lang="postcss">
  h1 {
    @apply font-black;
    @apply text-3xl md:text-6xl lg:text-8xl;
  }

  h2 {
    @apply font-extrabold;
    @apply text-2xl md:text-5xl lg:text-7xl;
  }

  h3 {
    @apply font-bold;
    @apply text-xl md:text-4xl lg:text-6xl;
  }

  h4 {
    @apply font-semibold;
    @apply text-lg md:text-3xl lg:text-5xl;
  }

  h5 {
    @apply font-medium;
    @apply text-base md:text-2xl lg:text-4xl;
  }

  h6 {
    @apply text-base md:text-xl lg:text-3xl;
  }

  p {
    @apply text-base md:text-lg lg:text-2xl;
  }

  span {
    @apply text-base md:text-lg lg:text-2xl;
  }
</style>
