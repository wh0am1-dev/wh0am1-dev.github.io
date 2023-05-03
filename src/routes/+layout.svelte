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
    @apply mx-auto flex w-full max-w-screen-2xl flex-col items-center;
    @apply px-4 py-16;
    @apply md:px-10 md:py-20;
    @apply xl:px-16 xl:py-32;
  }
</style>
