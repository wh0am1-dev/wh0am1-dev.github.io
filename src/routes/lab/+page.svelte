<script lang="ts">
  import { Service } from '$lib/components'
  import services from './services.json'

  let p = ''
  let a = false
  $: {
    p === atob('MTEyMzU4MTMyMQ==') && (a = true)
  }
</script>

<svelte:head>
  <title>carlos aguilar / laboratory</title>
</svelte:head>

<h1>laboratory</h1>
<h5 class="mb-16 text-center">private services</h5>

{#if a}
  <div class="services">
    {#each services as service}
      {#if service.public}
        <Service {service} />
      {/if}
    {/each}
  </div>
{:else}
  <!-- svelte-ignore a11y-autofocus -->
  <input bind:value={p} type="password" autofocus class="password" />
{/if}

<style lang="postcss">
  .services {
    @apply grid w-full grid-cols-2 gap-4;
    @apply md:gap-8;
    @apply lg:w-auto lg:grid-cols-3;
    @apply xl:grid-cols-4;
  }

  .password {
    @apply rounded-full bg-transparent px-4 py-2;
    @apply text-center text-lg font-medium;
    @apply border-2 border-stone-800 dark:border-stone-100;
    @apply focus:border-amber-500 focus:outline-none dark:focus:border-amber-400;
  }
</style>
