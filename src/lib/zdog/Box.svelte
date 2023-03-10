<script lang="ts">
  import { onMount } from 'svelte'
  import Zdog from 'zdog'
  import { mountNode } from './zdog'
  interface $$Props extends Zdog.BoxOptions {}
  onMount(mountNode(Zdog.Box, $$props))
</script>

<slot />
