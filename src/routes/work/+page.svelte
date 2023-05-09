<script lang="ts">
  import { i18n } from '$lib/i18n'
  import Job from '$lib/components/Job.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import work from '$lib/data/work.json'
</script>

<h1>{$i18n.work.title}</h1>
<h5 class="text-center">
  {$i18n.work.description}
</h5>

<div class="mt-16 flex flex-wrap items-stretch">
  {#each work as job}
    <div class="basis-full p-2 xl:basis-1/2 xl:p-4">
      <Job {job} />
    </div>
  {/each}
</div>

<hr />
<Footer />
