<script lang="ts">
  import { i18n } from '$lib/i18n'
  import { Project } from '$lib/components'
  import projects from '$lib/data/projects.json'
</script>

<h1>{$i18n.lab.title}</h1>
<h5 class="text-center">
  {$i18n.lab.description}
</h5>

<div class="mt-16 flex flex-wrap items-stretch">
  {#each projects as project}
    <div class="basis-full p-4 xl:basis-1/2">
      <Project {project} />
    </div>
  {/each}
</div>
