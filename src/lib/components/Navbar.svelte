<script lang="ts">
  import { page } from '$app/stores'
  import { i18n } from '$lib/i18n'
</script>

<nav>
  <a href="/" class="font-bold" class:selected={$page.route.id === '/'}>
    {@html $i18n.nav.name}
  </a>
  <ul>
    <li>
      <a href="/work" class:selected={$page.route.id === '/work'}>
        {@html $i18n.nav.work}
      </a>
    </li>
    <li>
      <a href="/lab" class:selected={$page.route.id === '/lab'}>
        {@html $i18n.nav.lab}
      </a>
    </li>
  </ul>
</nav>

<style lang="postcss">
  nav {
    @apply sticky top-0 z-50 w-full shadow-md;
    @apply flex items-center justify-between;
    @apply bg-stone-800 bg-opacity-50 backdrop-blur-md;
    @apply border-b border-stone-900;
  }

  li {
    @apply float-left flex h-full items-center justify-between;
  }

  a {
    @apply table-cell;
    @apply p-3 text-2xl;
    @apply md:p-6 md:text-5xl;
    @apply xl:p-9 xl:text-7xl;
  }

  a.selected {
    @apply bg-amber-400 text-stone-800;
  }
</style>
