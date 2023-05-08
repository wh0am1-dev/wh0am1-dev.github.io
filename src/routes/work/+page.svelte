<script lang="ts">
  import { i18n } from '$lib/i18n'
  import Job from '$lib/components/Job.svelte'
  import Atom from '$lib/components/Atom.svelte'
  import work from '$lib/data/work.json'
</script>

<h1>{$i18n.work.title}</h1>

<section class="mt-16 flex flex-wrap items-stretch">
  {#each work as job}
    <div class="basis-full p-2 md:basis-1/2 xl:p-4">
      <Job {job} />
    </div>
  {/each}
</section>

<hr />
<Atom />
