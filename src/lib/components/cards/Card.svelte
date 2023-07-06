<script lang="ts">
  export let href: string
  export let newTab = false
</script>

<a
  {href}
  target={newTab ? '_blank' : '_self'}
  rel={newTab ? 'noopener noreferrer' : ''}
>
  <section>
    <slot />
  </section>
</a>

<style lang="postcss">
  section {
    @apply flex flex-col items-start justify-between gap-2 xl:gap-4;
    @apply h-full rounded-md p-4 transition-all md:p-8;
    @apply shadow-sm shadow-stone-400 dark:shadow-stone-950;
    @apply border border-stone-400 dark:border-stone-700;
  }

  @media (hover: hover) {
    section {
      @apply hover:shadow-md hover:shadow-stone-400;
      @apply hover:scale-105 hover:ring-2 hover:ring-amber-500;
      @apply dark:hover:shadow-stone-950 dark:hover:ring-amber-400;
    }
  }
</style>
