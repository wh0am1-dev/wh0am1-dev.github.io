<script lang="ts">
  export let href: string
</script>

<a {href} target="_blank" rel="noopener noreferrer">
  <section
    class="
      h-full rounded-md
      border border-stone-400
      p-4 shadow-md transition-all
      dark:border-stone-700 dark:shadow-stone-900
      md:p-8
    "
  >
    <slot />
  </section>
</a>

<style lang="postcss">
  @media (hover: hover) {
    section {
      @apply hover:scale-105 hover:shadow-lg;
      @apply hover:ring-2 hover:ring-amber-500 dark:hover:ring-amber-400;
      @apply dark:hover:shadow-stone-900;
    }
  }
</style>
