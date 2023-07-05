<script lang="ts">
  import { page } from '$app/stores'
  import { i18n } from '$lib/i18n'
  import { theme } from '$lib/stores'
</script>

<nav>
  <a href="/" class="font-bold" class:selected={$page.route.id === '/'}>
    {$i18n.nav.name}
  </a>
  <ul>
    <li>
      <a href="/cv" class:selected={$page.route.id === '/cv'}>
        {$i18n.nav.cv}
      </a>
    </li>
    <li>
      <a href="/oss" class:selected={$page.route.id === '/oss'}>
        {$i18n.nav.oss}
      </a>
    </li>
    <li>
      <button on:click={() => ($theme = $theme === 'dark' ? 'light' : 'dark')}>
        {#if $theme === 'light'}☀{:else}🌙{/if}
      </button>
    </li>
  </ul>
</nav>

<style lang="postcss">
  nav {
    @apply sticky top-0 z-50 w-full;
    @apply flex items-center justify-between;
    @apply bg-stone-100 dark:bg-stone-800;
    @apply bg-opacity-25 backdrop-blur-lg dark:bg-opacity-25;
    @apply border-b border-stone-400 dark:border-stone-700;
    @apply shadow-sm shadow-stone-400 dark:shadow-stone-950;
  }

  li {
    @apply float-left flex h-full items-center justify-between;
  }

  a,
  button {
    @apply table-cell p-3 text-2xl text-amber-500;
    @apply md:p-6 md:text-5xl;
  }

  a.selected {
    @apply bg-amber-500 text-stone-800;
    @apply dark:bg-amber-400;
  }

  button {
    @apply table-cell;
    @apply p-3 text-2xl;
    @apply md:p-6 md:text-5xl;
  }

  @media (hover: hover) {
    button {
      @apply hover:bg-amber-500 dark:hover:bg-amber-400;
    }
  }
</style>
