<script lang="ts">
  import { i18n } from '$lib/stores'
  import { Project } from '$lib/components'
</script>

<svelte:head>
  <title>carlos aguilar / open-source</title>
</svelte:head>

<h1>{$i18n.oss.title}</h1>
<h5 class="text-center">
  {$i18n.oss.description}
</h5>

<div class="mt-16 flex flex-wrap items-stretch">
  {#each $i18n.oss.projects as project}
    {#if project.public}
      <div class="basis-full p-4 lg:basis-1/2">
        <Project {project} />
      </div>
    {/if}
  {/each}
</div>
