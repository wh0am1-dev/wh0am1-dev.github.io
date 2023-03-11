<script lang="ts">
  import Zdog from 'zdog'
  import { mount, type PrimitiveProps } from '.'
  interface $$Props extends PrimitiveProps<Zdog.Rect> {}
  export const node = mount(Zdog.Rect, $$props)
</script>

<slot />
