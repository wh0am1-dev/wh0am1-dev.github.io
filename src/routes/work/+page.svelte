<script lang="ts">
  import { i18n } from '$lib/i18n'
  import Atom from '$lib/components/Atom.svelte'
  import work from '$lib/data/work.json'
</script>

<h1>{$i18n.work.title}</h1>

<section class="mt-16 flex flex-wrap items-stretch">
  {#each work as item}
    <div class="basis-full p-2 md:basis-1/2 xl:p-4">
      <div
        class="h-full rounded-md border border-stone-900 p-4 shadow-md md:p-8"
      >
        <img
          src={item.logo}
          alt={item.company}
          class="aspect-square w-16 rounded-md object-cover xl:w-32"
        />
        <h3 class="mt-4 text-amber-400 xl:mt-8">{item.company}</h3>

        <h5 class="mt-4 xl:mt-8">{item.position}</h5>
        <p class="mt-1 text-stone-400 xl:mt-2">{@html item.description}</p>

        <p class="mt-4 text-stone-400 xl:mt-8">{item.from} - {item.to}</p>

        <div class="mt-4 flex flex-wrap xl:mt-8">
          {#each item.tech as tech}
            <span
              class="m-1 cursor-pointer rounded-full border border-stone-700 px-3 py-0.5 hover:bg-amber-400 hover:text-stone-800"
            >
              {tech}
            </span>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</section>

<hr />
<Atom />
