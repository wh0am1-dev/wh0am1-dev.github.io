<script lang="ts">
  export let title: string
  export let description = ''
  export let img = 'https://placehold.co/640x360'

  let className = ''
  export { className as class }
</script>

<div class={className}>
  <img src={img} alt={title} />
  <h4 class="my-2">{title}</h4>
  {#if description}
    <p>{description}</p>
  {/if}
</div>

<style lang="postcss">
  div {
    @apply cursor-pointer p-4 xl:p-8;
    @apply rounded-md border border-stone-700;
    @apply transition-all hover:-translate-y-2 hover:shadow-md;
  }

  img {
    @apply aspect-video rounded-md object-cover;
  }
</style>
