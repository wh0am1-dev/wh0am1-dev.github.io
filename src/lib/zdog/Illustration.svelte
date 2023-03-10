<script lang="ts">
  import { setContext, onMount } from 'svelte'
  import Zdog from 'zdog'
  import { rootCtx, parentCtx } from './zdog'
  import type { RootContext, ParentContext } from './zdog'

  interface $$Props extends Omit<Zdog.IllustrationOptions, 'element'> {
    /** Render to SVG or canvas */
    element: 'svg' | 'canvas'
    /** Illustration width */
    width: number
    /** Illustration height */
    height: number
  }

  export let element: 'svg' | 'canvas' = 'svg'
  export let width: number
  export let height: number

  let canvas: SVGSVGElement | HTMLCanvasElement
  const rootContext: RootContext = {
    scene: new Zdog.Anchor(),
    subscribers: [],
    subscribe: fn => {
      rootContext.subscribers.push(fn)
      return () => rootContext.subscribers.filter(sub => sub !== fn)
    },
  }

  setContext<ParentContext>(parentCtx, rootContext.scene)
  setContext<RootContext>(rootCtx, rootContext)

  onMount(() => {
    const illu = new Zdog.Illustration({
      ...$$restProps,
      element: canvas,
    })

    illu.addChild(rootContext.scene)
    illu.updateRenderGraph()
  })
</script>

<svelte:element this={element} bind:this={canvas} {width} {height} />
<slot />
