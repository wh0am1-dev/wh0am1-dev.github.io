<script lang="ts">
  import Zdog from 'zdog'
  import { mount } from './zdog'
  interface $$Props extends Zdog.HemisphereOptions {}
  mount(Zdog.Hemisphere, $$props)
</script>

<slot />
