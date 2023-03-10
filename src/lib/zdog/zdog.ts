import { getContext, setContext, onMount } from 'svelte'
import type Zdog from 'zdog'

/** Zdog primitive */
export type Primitive =
  | Zdog.Anchor
  | Zdog.Box
  | Zdog.Cone
  | Zdog.Cylinder
  | Zdog.Ellipse
  | Zdog.Group
  | Zdog.Hemisphere
  | Zdog.Polygon
  | Zdog.Rect
  | Zdog.RoundedRect
  | Zdog.Shape

/** Zdog primitive class */
export type PrimitiveClass =
  | typeof Zdog.Anchor
  | typeof Zdog.Box
  | typeof Zdog.Cone
  | typeof Zdog.Cylinder
  | typeof Zdog.Ellipse
  | typeof Zdog.Group
  | typeof Zdog.Hemisphere
  | typeof Zdog.Polygon
  | typeof Zdog.Rect
  | typeof Zdog.RoundedRect
  | typeof Zdog.Shape

/** Zdog primitive options */
export type Options =
  | Zdog.AnchorOptions
  | Zdog.BoxOptions
  | Zdog.ConeOptions
  | Zdog.CylinderOptions
  | Zdog.EllipseOptions
  | Zdog.GroupOptions
  | Zdog.HemisphereOptions
  | Zdog.PolygonOptions
  | Zdog.RectOptions
  | Zdog.RoundedRectOptions
  | Zdog.ShapeOptions

/** Lifecycle subscription */
type Subscription = (t: number) => void

/** Root node context key */
export const rootCtx = Symbol()
/** Root node context */
export interface RootContext {
  /** Root illustration */
  scene: Zdog.Anchor
  /** List of update functions */
  subscribers: Array<Subscription>
  /** Subscribe new update function */
  subscribe: (fn: Subscription) => () => void
}

/** Parent node context key */
export const parentCtx = Symbol()
/** Parent node context */
export type ParentContext = Primitive

/** Mount Zdog primitive into the tree */
export const mount = (primitive: PrimitiveClass, options: Options) => {
  const { scene } = getContext<RootContext>(rootCtx)
  const parent = getContext<ParentContext>(parentCtx)
  const node = new primitive({ ...options })

  setContext<ParentContext>(parentCtx, node)

  onMount(() => {
    parent.addChild(node)
    scene.updateGraph()

    return () => {
      parent.removeChild(node)
      parent.updateGraph()
      scene.updateGraph()
    }
  })
}
