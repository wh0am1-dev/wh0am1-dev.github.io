<script lang="ts">
  import { onMount } from 'svelte'
  import Zdog from 'zdog'
  import { mountNode } from './zdog'

  interface $$Props extends Zdog.AnchorOptions {}

  onMount(() => {
    const dismountNode = mountNode(Zdog.Anchor, $$props)
    return () => {
      dismountNode()
    }
  })
</script>

<slot />
