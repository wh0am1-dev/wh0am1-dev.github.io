<script lang="ts">
  import { onMount } from 'svelte'
  import Zdog from 'zdog'
  import { mountNode } from './zdog'
  interface $$Props extends Zdog.ShapeOptions {}
  onMount(mountNode(Zdog.Shape, $$props))
</script>

<slot />
