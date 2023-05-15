<script lang="ts">
  import { lang } from '$lib/i18n'
</script>

<ul>
  <li>
    <button on:click={() => ($lang = 'en')}>🇬🇧</button>
  </li>
  <li>
    <button on:click={() => ($lang = 'es')}>🇪🇸</button>
  </li>
</ul>

<style lang="postcss">
  ul {
    @apply fixed bottom-2 right-2;
  }

  li:not(:first-of-type) {
    @apply mt-1;
  }

  button {
    @apply rounded-md px-2 py-1 font-emoji text-lg;
    @apply hover:bg-stone-300;
    @apply dark:hover:bg-stone-700;
  }
</style>
