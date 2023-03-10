<script lang="ts">
  import { onMount } from 'svelte'
  import Zdog from 'zdog'
  import { mountNode } from './zdog'
  interface $$Props extends Zdog.CylinderOptions {}
  onMount(mountNode(Zdog.Cylinder, $$props))
</script>

<slot />
