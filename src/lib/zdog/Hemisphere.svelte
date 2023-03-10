<script lang="ts">
  import { onMount } from 'svelte'
  import Zdog from 'zdog'
  import { mountNode } from './zdog'
  interface $$Props extends Zdog.HemisphereOptions {}
  onMount(mountNode(Zdog.Hemisphere, $$props))
</script>

<slot />
