<script lang="ts">
  import Zdog from 'zdog'
  import { mount } from './zdog'
  interface $$Props extends Zdog.BoxOptions {}
  mount(Zdog.Box, $$props)
</script>

<slot />
