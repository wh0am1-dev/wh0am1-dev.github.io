<script lang="ts">
  import Zdog from 'zdog'
  import { mount } from './zdog'
  interface $$Props extends Zdog.PolygonOptions {}
  mount(Zdog.Polygon, $$props)
</script>

<slot />
