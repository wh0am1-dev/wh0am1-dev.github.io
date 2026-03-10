<script lang="ts">
  import { Card, Logo } from '$lib/components'

  export let workshop: {
    title: string
    img: string
    description: string
    link: string
    when: string
    where: string
  }
</script>

<Card href={workshop.link}>
  <Logo src={workshop.img} alt={workshop.title} />
  <h3 class="text-stone-800 dark:text-stone-100">
    {workshop.title}
  </h3>
  <p class="leading-none text-stone-500 dark:text-stone-400">
    {workshop.when}<br />
    {workshop.where}
  </p>
  <p class="leading-none text-stone-500 dark:text-stone-400">
    {@html workshop.description}
  </p>
</Card>
