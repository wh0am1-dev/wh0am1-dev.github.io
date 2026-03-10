<script lang="ts">
  import { Card, Logo, Pill } from '$lib/components'

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
  <Logo src={job.logo} alt={job.company} />
  <div>
    <h3 class="text-stone-800 dark:text-stone-100">
      {job.company}
    </h3>
    <h5 class="text-stone-800 dark:text-stone-100">
      {job.position}
    </h5>
  </div>
  <p class="text-stone-500 dark:text-stone-400">
    {job.from} - {job.to}
  </p>
  <p class="leading-none text-stone-500 dark:text-stone-400">
    {@html job.description}
  </p>
  <div class="mt-auto flex flex-wrap gap-2">
    {#each job.tech as tech}
      <Pill>{tech}</Pill>
    {/each}
  </div>
</Card>
