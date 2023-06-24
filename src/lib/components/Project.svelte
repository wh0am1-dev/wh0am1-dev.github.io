<script lang="ts">
  import { Card } from '$lib/components'

  export let project: {
    title: string
    link: string
    img: string
    description: string
    from: string
    to: string
    tech: string[]
  }
</script>

<Card href={project.link}>
  <img
    src={project.img}
    alt={project.title}
    class="aspect-square w-16 rounded-md bg-stone-900 object-cover xl:w-32"
  />
  <h3 class="mt-4 text-stone-800 dark:text-stone-100 xl:mt-8">
    {project.title}
  </h3>

  <p class="mt-1 text-stone-500 dark:text-stone-400 xl:mt-2">
    {@html project.description}
  </p>

  <p class="mt-4 text-stone-500 dark:text-stone-400 xl:mt-8">
    {project.from} - {project.to}
  </p>

  <div class="mt-4 flex flex-wrap xl:mt-8">
    {#each project.tech as tech}
      <span
        class="m-1 rounded-full border border-stone-300 px-3 py-0.5 text-stone-800 dark:border-stone-700 dark:text-stone-100"
      >
        {tech}
      </span>
    {/each}
  </div>
</Card>
