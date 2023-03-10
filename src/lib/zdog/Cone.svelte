<script lang="ts">
  import Zdog from 'zdog'
  import { mount } from './zdog'
  interface $$Props extends Zdog.ConeOptions {}
  mount(Zdog.Cone, $$props)
</script>

<slot />
