<script lang="ts">
  import { fade } from 'svelte/transition'
  import { i18n } from '$lib/stores'
  import { Contact } from '$lib/components'

  const images = ['/img/ego.png', '/img/clippy.png']
  let current = 0

  const nextImage = () => (current = (current + 1) % images.length)
  $: image = images[current]
</script>

<svelte:head>
  <title>carlos aguilar</title>
</svelte:head>

{#key image}
  <img
    alt="ego"
    src={image}
    on:click={nextImage}
    on:keypress={nextImage}
    in:fade={{ duration: 200 }}
  />
{/key}

<h1 class="relative my-8">
  {#key $i18n.home.wave}
    {#each [...$i18n.home.wave] as character, index}
      <span class="rotate" style="animation-delay: {index * 0.2}s">
        {character}
      </span>
    {/each}
  {/key}
</h1>

<p class="max-w-2xl px-4 text-center">
  {@html $i18n.home.intro}
</p>

<hr />

<Contact />

<style lang="postcss">
  img {
    @apply aspect-square w-48 rounded-full object-cover md:w-64;
    @apply bg-amber-500 dark:bg-amber-400;
    @apply border-4 border-amber-500 dark:border-amber-400;
    @apply shadow-sm shadow-stone-400 dark:shadow-stone-950;
  }

  @media (hover: hover) {
    img {
      @apply transition-all hover:scale-105;
      @apply hover:shadow-md hover:shadow-stone-400;
      @apply active:scale-95 active:shadow-sm;
      @apply dark:hover:shadow-stone-950;
    }
  }

  .rotate {
    @apply relative inline-block;
    animation: flip 5s infinite;
  }

  @keyframes flip {
    0%,
    80% {
      transform: rotateY(360deg);
    }
  }
</style>
