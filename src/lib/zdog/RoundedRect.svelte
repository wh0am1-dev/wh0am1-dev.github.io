<script lang="ts">
  import Zdog from 'zdog'
  import { mount, type PrimitiveProps } from '.'
  interface $$Props extends PrimitiveProps<Zdog.RoundedRect> {}
  export const node = mount(Zdog.RoundedRect, $$props)
</script>

<slot />
