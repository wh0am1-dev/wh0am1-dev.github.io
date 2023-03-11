<script lang="ts">
  import Zdog from 'zdog'
  import { mount, type PrimitiveProps } from '.'
  interface $$Props extends PrimitiveProps<Zdog.Box> {}
  export const node = mount(Zdog.Box, $$props)
</script>

<slot />
