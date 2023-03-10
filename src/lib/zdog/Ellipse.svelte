<script lang="ts">
  import { onMount } from 'svelte'
  import Zdog from 'zdog'
  import { mountNode } from './zdog'
  interface $$Props extends Zdog.EllipseOptions {}
  onMount(mountNode(Zdog.Ellipse, $$props))
</script>

<slot />
