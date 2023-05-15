<script lang="ts">
  import { page } from '$app/stores'
  import { i18n } from '$lib/i18n'
  import { theme } from '$lib/stores'
  import contact from '$lib/data/contact.json'
</script>

<nav>
  <a href="/" class="font-bold" class:selected={$page.route.id === '/'}>
    {contact.name}
  </a>
  <ul>
    <li>
      <a href="/work" class:selected={$page.route.id === '/work'}>
        {$i18n.nav.work}
      </a>
    </li>
    <li>
      <a href="/lab" class:selected={$page.route.id === '/lab'}>
        {$i18n.nav.lab}
      </a>
    </li>
    <li>
      <button on:click={() => ($theme = $theme === 'dark' ? 'light' : 'dark')}>
        {#if $theme === 'light'}⚫{:else}⚪{/if}
      </button>
    </li>
  </ul>
</nav>

<style lang="postcss">
  nav {
    @apply sticky top-0 z-50 w-full shadow-md;
    @apply flex items-center justify-between;
    @apply bg-stone-100 bg-opacity-50 backdrop-blur-md;
    @apply border-b border-stone-300;
    @apply dark:border-stone-700 dark:bg-stone-800 dark:bg-opacity-50;
  }

  li {
    @apply float-left flex h-full items-center justify-between;
  }

  a,
  button {
    @apply table-cell;
    @apply p-3 text-2xl;
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
