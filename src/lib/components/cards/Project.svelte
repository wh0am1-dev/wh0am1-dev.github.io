<script lang="ts">
  import Card from './Card.svelte'

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
  <div class="flex flex-col gap-2 xl:gap-4">
    <img
      src={project.img.src}
      alt={project.title}
      class="aspect-square w-16 rounded-md bg-stone-900 object-cover object-top md:w-24 xl:w-32"
      style={project.img.pixelated ? 'image-rendering: pixelated;' : ''}
    />
    <h3 class="text-stone-800 dark:text-stone-100">
      {project.title}
    </h3>
    <p class="text-stone-500 dark:text-stone-400">
      {project.from} - {project.to}
    </p>
    <p class="mt-1 leading-none text-stone-500 dark:text-stone-400">
      {@html project.description}
    </p>
  </div>

  <div class="mt-4 flex flex-wrap gap-2">
    {#each project.tech as tech}
      <span
        class="rounded-full border border-stone-300 px-3 py-0.5 text-stone-800 dark:border-stone-700 dark:text-stone-100"
      >
        {tech}
      </span>
    {/each}
  </div>
</Card>
