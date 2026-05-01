<script lang="ts">
  import { Card, Logo } from '$lib/components'

  export let service: {
    img: string
    link: string
    title: string
    description: string
  }
</script>

<div>
  <Card href={service.link} newTab>
    <Logo src={service.img} alt={service.title} />
    <h3 class="text-stone-800 dark:text-stone-100">
      {service.title}
    </h3>
    <p class="leading-none text-stone-500 dark:text-stone-400">
      {@html service.description}
    </p>
  </Card>
</div>
