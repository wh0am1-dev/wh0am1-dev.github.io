<script lang="ts">
  import { onMount } from 'svelte'
  import Zdog from 'zdog'
  import { mountNode } from './zdog'
  interface $$Props extends Zdog.GroupOptions {}
  onMount(mountNode(Zdog.Group, $$props))
</script>

<slot />
