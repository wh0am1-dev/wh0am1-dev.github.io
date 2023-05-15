<script lang="ts">
  import { blur } from 'svelte/transition'
  import { page } from '$app/stores'
  import { Navbar, Footer, Language } from '$lib/components'
  import '../app.css'
</script>

<Navbar />

{#key $page.route.id}
  <main in:blur={{ amount: 1, opacity: 0, duration: 400 }}>
    <slot />
    <hr />
    <Footer />
  </main>
{/key}

<Language />

<style lang="postcss">
  main {
    @apply flex flex-col items-center;
    @apply mx-auto w-full max-w-screen-2xl;
    @apply px-4 py-16 md:px-10 xl:px-16;
  }
</style>
