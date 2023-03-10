<script lang="ts">
  import Zdog from 'zdog'
  import { mount } from './zdog'
  interface $$Props extends Zdog.CylinderOptions {}
  mount(Zdog.Cylinder, $$props)
</script>

<slot />
