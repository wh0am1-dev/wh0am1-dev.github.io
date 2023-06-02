<script lang="ts">
  import { i18n } from '$lib/i18n'
  import { Ego, Contact } from '$lib/components'
</script>

<Ego />

<h1 class="my-8">
  {$i18n.home.wave}
</h1>

<p class="max-w-2xl px-4 text-center">
  {@html $i18n.home.intro}
</p>

<hr />

<Contact />
