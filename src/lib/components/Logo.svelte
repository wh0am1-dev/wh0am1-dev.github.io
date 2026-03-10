<script lang="ts">
  export let src: string
  export let alt: string
  export let style = ''
</script>

<img {src} {alt} {style} />

<style lang="postcss">
  img {
    @apply w-16 rounded-md md:w-24 xl:w-32;
    @apply aspect-square object-cover object-top;
    @apply bg-stone-900 ring-4 ring-stone-900;
  }
</style>
