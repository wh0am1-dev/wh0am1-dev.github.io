<script lang="ts">
  import Card from './Card.svelte'

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

<Card href={job.link} newTab>
  <div class="flex flex-col gap-2 xl:gap-4">
    <img
      src={job.logo}
      alt={job.company}
      class="aspect-square w-16 rounded-md object-cover md:w-24 xl:w-32"
    />
    <h3 class="text-stone-800 dark:text-stone-100">
      {job.company}
    </h3>
    <h5 class="text-stone-800 dark:text-stone-100">
      {job.position}
    </h5>
    <p class="text-stone-500 dark:text-stone-400">
      {job.from} - {job.to}
    </p>
    <p class="mt-1 leading-none text-stone-500 dark:text-stone-400">
      {@html job.description}
    </p>
  </div>

  <div class="mt-4 flex flex-wrap gap-2">
    {#each job.tech as tech}
      <span
        class="rounded-full border border-stone-300 px-3 py-0.5 text-stone-800 dark:border-stone-700 dark:text-stone-100"
      >
        {tech}
      </span>
    {/each}
  </div>
</Card>
