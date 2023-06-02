<script lang="ts">
  const images = [
    '/img/ego/hmmm.jpg',
    '/img/ego/elevator.jpg',
    '/img/ego/guitar.jpg',
  ]

  let idx = 0
  const next = () => (idx = ++idx % images.length)
</script>

<img
  alt="ego"
  src={images[idx]}
  on:click={next}
  on:keypress={next}
  class="
    aspect-square w-64 cursor-pointer rounded-md
    border border-stone-400 object-cover
    shadow-md dark:border-stone-700 xl:w-80
  "
/>
