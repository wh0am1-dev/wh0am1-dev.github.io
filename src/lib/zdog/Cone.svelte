<script lang="ts">
  import Zdog from 'zdog'
  import { mount, type PrimitiveProps } from '.'
  interface $$Props extends PrimitiveProps<Zdog.Cone> {}
  export const node = mount(Zdog.Cone, $$props)
</script>

<slot />
