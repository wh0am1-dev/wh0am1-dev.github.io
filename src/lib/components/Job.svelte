<script lang="ts">
  export let job: Job

  interface Job {
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

<a href={job.link} target="_blank" rel="noopener noreferrer">
  <div
    class="h-full rounded-md border border-stone-700 p-4 shadow-md transition-all hover:scale-105 hover:border-amber-400 hover:shadow-lg md:p-8"
  >
    <img
      src={job.logo}
      alt={job.company}
      class="pointer-events-none aspect-square w-16 rounded-md object-cover xl:w-32"
    />
    <h3 class="mt-4 text-amber-400 xl:mt-8">
      {job.company}
    </h3>

    <h5 class="mt-4 text-stone-100 xl:mt-8">
      {job.position}
    </h5>
    <p class="mt-1 text-stone-400 xl:mt-2">
      {@html job.description}
    </p>

    <p class="mt-4 text-stone-400 xl:mt-8">
      {job.from} - {job.to}
    </p>

    <div class="mt-4 flex flex-wrap xl:mt-8">
      {#each job.tech as tech}
        <span
          class="m-1 rounded-full border border-stone-700 px-3 py-0.5 text-stone-100"
        >
          {tech}
        </span>
      {/each}
    </div>
  </div>
</a>
