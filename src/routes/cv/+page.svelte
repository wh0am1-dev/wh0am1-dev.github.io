<script lang="ts">
  import { i18n } from '$lib/i18n'
  import { Job } from '$lib/components'
</script>

<svelte:head>
  <title>carlos aguilar / curriculum</title>
</svelte:head>

<h1>{$i18n.cv.title}</h1>
<h5 class="text-center">
  {$i18n.cv.description}
</h5>

<div class="mt-16 flex flex-wrap items-stretch">
  {#each $i18n.cv.jobs as job}
    <div class="basis-full p-4 lg:basis-1/2">
      <Job {job} />
    </div>
  {/each}
</div>
