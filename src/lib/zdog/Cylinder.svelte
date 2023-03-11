<script lang="ts">
  import Zdog from 'zdog'
  import { mount, type PrimitiveProps } from '.'
  interface $$Props extends PrimitiveProps<Zdog.Cylinder> {}
  export const node = mount(Zdog.Cylinder, $$props)
</script>

<slot />
