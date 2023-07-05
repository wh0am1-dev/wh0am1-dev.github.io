<script lang="ts">
  import { Card } from '$lib/components'

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
  <div class="flex flex-col gap-2 xl:gap-4">
    <img
      src={workshop.img}
      alt={workshop.title}
      class="aspect-square w-16 rounded-md bg-stone-900 object-cover md:w-24 xl:w-32"
    />
    <h3 class="text-stone-800 dark:text-stone-100">
      {workshop.title}
    </h3>
    <p class="text-stone-500 dark:text-stone-400">
      {workshop.when}
    </p>
    <p class="text-stone-500 dark:text-stone-400">
      {workshop.where}
    </p>
    <p class="mt-1 leading-none text-stone-500 dark:text-stone-400">
      {@html workshop.description}
    </p>
  </div>
</Card>
