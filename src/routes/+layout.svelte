<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte'
  import Language from '$lib/components/Language.svelte'
  import '../app.css'
</script>

<Navbar />
<main>
  <slot />
</main>
<Language />

<style lang="postcss">
  main {
    @apply flex w-full flex-col items-center;
    @apply py-16 md:py-20 lg:py-32;
    @apply px-8 md:px-10 lg:px-16;
  }
</style>
