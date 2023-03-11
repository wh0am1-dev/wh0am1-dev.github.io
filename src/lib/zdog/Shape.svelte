<script lang="ts">
  import Zdog from 'zdog'
  import { mount, type PrimitiveProps } from '.'
  interface $$Props extends PrimitiveProps<Zdog.Shape> {}
  export const node = mount(Zdog.Shape, $$props)
</script>

<slot />
