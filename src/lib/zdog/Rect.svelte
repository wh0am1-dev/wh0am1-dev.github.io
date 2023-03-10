<script lang="ts">
  import { onMount } from 'svelte'
  import Zdog from 'zdog'
  import { mountNode } from './zdog'
  interface $$Props extends Zdog.RectOptions {}
  onMount(mountNode(Zdog.Rect, $$props))
</script>

<slot />
