<script lang="ts">
  export let project: Project

  interface Project {
    title: string
    link: string
    img: string
    description: string
    from: string
    to: string
    tech: string[]
  }
</script>

<a href={project.link} target="_blank" rel="noopener noreferrer">
  <section
    class="h-full rounded-md border border-stone-300 p-4 shadow-md dark:border-stone-700 md:p-8"
  >
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
  </section>
</a>

<style lang="postcss">
  @media (hover: hover) {
    section {
      @apply transition-transform hover:scale-105 hover:shadow-lg;
      @apply hover:ring-2 hover:ring-amber-500 dark:hover:ring-amber-400;
    }
  }
</style>
