<script lang="ts">
  import { i18n } from '$lib/i18n'
  import { Contact } from '$lib/components'
</script>

<svelte:head>
  <title>carlos aguilar</title>
</svelte:head>

<img
  alt="ego"
  src="/img/ego.png"
  class="
    aspect-square w-48 rounded-full border-4
    border-amber-500 bg-amber-500 object-cover shadow-md
    dark:border-amber-400 dark:bg-amber-400 dark:shadow-stone-900
    xl:w-64
  "
/>

<h1 class="relative my-8">
  {#each [...$i18n.home.wave] as character, index}
    <span class="rotate" style="animation-delay: {index * 0.2}s">
      {character}
    </span>
  {/each}
</h1>

<p class="max-w-2xl px-4 text-center">
  {@html $i18n.home.intro}
</p>

<hr />

<Contact />

<style lang="postcss">
  @media (hover: hover) {
    img {
      @apply transition-all hover:scale-110 hover:shadow-lg active:scale-95;
      @apply dark:hover:shadow-stone-900;
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
