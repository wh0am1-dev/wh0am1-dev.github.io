<script lang="ts">
  import Zdog from 'zdog'
  import { mount, type PrimitiveProps } from '.'
  interface $$Props extends PrimitiveProps<Zdog.Ellipse> {}
  export const node = mount(Zdog.Ellipse, $$props)
</script>

<slot />
