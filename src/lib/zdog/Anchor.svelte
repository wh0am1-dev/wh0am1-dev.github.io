<script lang="ts">
  import Zdog from 'zdog'
  import { mount } from './zdog'
  interface $$Props extends Zdog.AnchorOptions {}
  mount(Zdog.Anchor, $$props)
</script>

<slot />
