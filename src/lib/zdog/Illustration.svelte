<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import Zdog from 'zdog'
  import { rootCtx, parentCtx } from './zdog'
  import type { RootContext, ParentContext } from './zdog'

  interface $$Props extends Omit<Zdog.IllustrationOptions, 'element'> {
    /** Render to SVG or canvas */
    element: 'svg' | 'canvas'
  }

  export let element: 'svg' | 'canvas'
  let canvas: SVGSVGElement | HTMLCanvasElement
  let scene: Zdog.Illustration
  let subscribers: Array<(t: number) => void>

  onMount(() => {
    scene = new Zdog.Illustration({ ...$$restProps, element: canvas })
    setContext<ParentContext>(parentCtx, scene)
    setContext<RootContext>(rootCtx, {
      scene,
      subscribers,
      subscribe: fn => {
        subscribers.push(fn)
        return () => subscribers.filter(sub => sub !== fn)
      },
    })
  })
</script>

<svelte:element this={element} bind:this={canvas} />
<slot />
