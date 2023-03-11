import { getContext, setContext, onMount, onDestroy } from 'svelte'
import type Zdog from 'zdog'

// Types
// ================================

/** Zdog primitive class */
// export type PrimitiveClass =
//   | typeof Zdog.Anchor
//   | typeof Zdog.Box
//   | typeof Zdog.Cone
//   | typeof Zdog.Cylinder
//   | typeof Zdog.Ellipse
//   | typeof Zdog.Group
//   | typeof Zdog.Hemisphere
//   | typeof Zdog.Polygon
//   | typeof Zdog.Rect
//   | typeof Zdog.RoundedRect
//   | typeof Zdog.Shape

/** Zdog primitive options */
// export type Options =
//   | Zdog.AnchorOptions
//   | Zdog.BoxOptions
//   | Zdog.ConeOptions
//   | Zdog.CylinderOptions
//   | Zdog.EllipseOptions
//   | Zdog.GroupOptions
//   | Zdog.HemisphereOptions
//   | Zdog.PolygonOptions
//   | Zdog.RectOptions
//   | Zdog.RoundedRectOptions
//   | Zdog.ShapeOptions

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

/** Zdog primitive options */
export type PrimitiveOptions<P extends Primitive> = P extends Zdog.Box
  ? Zdog.BoxOptions
  : P extends Zdog.Cone
  ? Zdog.ConeOptions
  : P extends Zdog.Hemisphere
  ? Zdog.HemisphereOptions
  : P extends Zdog.Cylinder
  ? Zdog.CylinderOptions
  : P extends Zdog.Ellipse
  ? Zdog.EllipseOptions
  : P extends Zdog.RoundedRect
  ? Zdog.RoundedRectOptions
  : P extends Zdog.Rect
  ? Zdog.RectOptions
  : P extends Zdog.Polygon
  ? Zdog.PolygonOptions
  : P extends Zdog.Shape
  ? Zdog.ShapeOptions
  : P extends Zdog.Group
  ? Zdog.GroupOptions
  : P extends Zdog.Anchor
  ? Zdog.AnchorOptions
  : never

/** Zdog primitive constructor */
export type PrimitiveConstructor<P extends Primitive> = {
  new (o: PrimitiveOptions<P>): P
}

/** Zdog primitive props */
export type PrimitiveProps<P extends Primitive> = PrimitiveOptions<P> & {
  update?: Subscriber<P>
}

/** Update subscription registrant */
export type Subscriber<P extends Primitive> = (p: P) => Subscription
/** Lifecycle subscription */
export type Subscription = (ms: number) => void
/** Subscription destructor */
export type Destructor = () => void

/** Zdog context */
export interface ZdogContext {
  /** Root anchor of the scene */
  scene: Zdog.Anchor
  /** List of update subscriptions */
  subscribers: Array<Subscription>
  /** Subscribe new update function */
  subscribe: (fn: Subscription) => () => void
}

// Root context
// ================================

const zdogCtx = Symbol()
/** Returns the main scene anchor */
export const getScene = () => getContext<ZdogContext>(zdogCtx).scene
/** Zdog context setter */
export const setZdog = (ctx: ZdogContext) =>
  setContext<ZdogContext>(zdogCtx, ctx)
/** Subscribe update function */
export const subscribe = (fn: Subscription) =>
  onDestroy(getContext<ZdogContext>(zdogCtx).subscribe(fn))

// Parent context
// ================================

const parentCtx = Symbol()
/** Get parent node */
export const getParent = () => getContext<Primitive>(parentCtx)
/** Set parent node */
export const setParent = (parent: Primitive) =>
  setContext<Primitive>(parentCtx, parent)

// Mount node function
// ================================

/** Mount Zdog primitive into the tree */
export const mount = <P extends Primitive>(
  /** Zdog primitive */
  primitive: PrimitiveConstructor<P>,
  /** Primitive options */
  options: PrimitiveProps<P>
) => {
  const scene = getScene()
  const parent = getParent()
  const { update, ...rest } = options
  const node = new primitive(rest as PrimitiveProps<P>)

  setParent(node)
  if (update) subscribe(update(node))

  onMount(() => {
    parent.addChild(node)
    scene.updateGraph()

    return () => {
      parent.removeChild(node)
      parent.updateGraph()
      scene.updateGraph()
    }
  })

  return node
}

// Re-exports
// ================================
export { default as Anchor } from './Anchor.svelte'
export { default as Box } from './Box.svelte'
export { default as Cone } from './Cone.svelte'
export { default as Cylinder } from './Cylinder.svelte'
export { default as Ellipse } from './Ellipse.svelte'
export { default as Group } from './Group.svelte'
export { default as Hemisphere } from './Hemisphere.svelte'
export { default as Illustration } from './Illustration.svelte'
export { default as Polygon } from './Polygon.svelte'
export { default as Rect } from './Rect.svelte'
export { default as RoundedRect } from './RoundedRect.svelte'
export { default as Shape } from './Shape.svelte'
export {
  default as Zdog,
  TAU,
  Vector,
  easeInOut,
  extend,
  lerp,
  modulo,
} from 'zdog'
