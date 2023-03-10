<script lang="ts">
  import Zdog from 'zdog'
  import { mount } from './zdog'
  interface $$Props extends Zdog.ShapeOptions {}
  mount(Zdog.Shape, $$props)
</script>

<slot />
