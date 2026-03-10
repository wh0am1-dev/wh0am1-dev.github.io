<script lang="ts">
  import { Card, Logo, Pill } from '$lib/components'

  export let project: {
    img: {
      src: string
      pixelated: boolean
    }
    title: string
    link: string
    from: string
    to: string
    description: string
    tech: string[]
  }
</script>

<Card href={project.link} newTab>
  <Logo
    src={project.img.src}
    alt={project.title}
    style={project.img.pixelated ? 'image-rendering: pixelated;' : ''}
  />
  <h3 class="text-stone-800 dark:text-stone-100">
    {project.title}
  </h3>
  <p class="leading-none text-stone-500 dark:text-stone-400">
    {project.from} - {project.to}
  </p>
  <p class="leading-none text-stone-500 dark:text-stone-400">
    {@html project.description}
  </p>
  <div class="mt-auto flex flex-wrap gap-2">
    {#each project.tech as tech}
      <Pill>{tech}</Pill>
    {/each}
  </div>
</Card>
