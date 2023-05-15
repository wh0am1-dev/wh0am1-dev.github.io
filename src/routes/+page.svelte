<script lang="ts">
  import { i18n } from '$lib/i18n'
  import { Contact } from '$lib/components'
</script>

<img
  alt="ego"
  src="/img/ego.jpg"
  class="
    aspect-square w-64 rounded-md
    border border-stone-400 object-cover
    shadow-md dark:border-stone-700 xl:w-80
  "
/>
<h1 class="my-8">
  {$i18n.home.wave} 👋
</h1>
<p class="max-w-2xl px-4 text-center">
  {@html $i18n.home.intro}
</p>

<hr />
<Contact />
