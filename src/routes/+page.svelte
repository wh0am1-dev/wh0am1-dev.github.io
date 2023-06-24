<script lang="ts">
  import { i18n } from '$lib/i18n'
  import { Contact } from '$lib/components'
</script>

<img
  alt="ego"
  src="/img/ego.png"
  class="
    aspect-square w-64 rounded-md
    border-4 border-amber-500 bg-amber-500 object-cover shadow-md
    dark:border-amber-400 dark:bg-amber-400 dark:shadow-stone-900
    xl:w-80
  "
/>

<h1 class="my-8">
  {$i18n.home.wave}
</h1>

<p class="max-w-2xl px-4 text-center">
  {@html $i18n.home.intro}
</p>

<hr />

<Contact />
