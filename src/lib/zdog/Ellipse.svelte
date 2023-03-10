<script lang="ts">
  import Zdog from 'zdog'
  import { mount } from './zdog'
  interface $$Props extends Zdog.EllipseOptions {}
  mount(Zdog.Ellipse, $$props)
</script>

<slot />
