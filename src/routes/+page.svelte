<script lang="ts">
  import { i18n } from '$lib/i18n'
  import Contact from '$lib/components/Contact.svelte'
  import Atom from '$lib/components/Atom.svelte'
</script>

<img
  alt="ego"
  src="/img/ego.jpg"
  class="pointer-events-none aspect-square w-64 rounded-md border border-stone-700 object-cover shadow-md lg:w-80"
/>

<h1 class="my-8">
  {@html $i18n.home.wave}
</h1>

<p class="max-w-2xl px-4 text-center">
  {@html $i18n.home.intro}
</p>

<hr />
<Contact />
<hr />
<Atom />
