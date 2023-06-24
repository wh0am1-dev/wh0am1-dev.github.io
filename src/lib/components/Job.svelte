<script lang="ts">
  import { Card } from '$lib/components'

  export let job: {
    logo: string
    link: string
    company: string
    position: string
    description: string
    from: string
    to: string
    tech: string[]
  }
</script>

<Card href={job.link}>
  <img
    src={job.logo}
    alt={job.company}
    class="aspect-square w-16 rounded-md object-cover xl:w-32"
  />
  <h3 class="mt-4 text-stone-800 dark:text-stone-100 xl:mt-8">
    {job.company}
  </h3>

  <h5 class="mt-4 text-stone-800 dark:text-stone-100 xl:mt-8">
    {job.position}
  </h5>
  <p class="mt-1 text-stone-500 dark:text-stone-400 xl:mt-2">
    {@html job.description}
  </p>

  <p class="mt-4 text-stone-500 dark:text-stone-400 xl:mt-8">
    {job.from} - {job.to}
  </p>

  <div class="mt-4 flex flex-wrap xl:mt-8">
    {#each job.tech as tech}
      <span
        class="m-1 rounded-full border border-stone-300 px-3 py-0.5 text-stone-800 dark:border-stone-700 dark:text-stone-100"
      >
        {tech}
      </span>
    {/each}
  </div>
</Card>
