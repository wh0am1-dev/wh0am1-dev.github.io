<script lang="ts">
  import Zdog from 'zdog'
  import { mount } from './zdog'
  interface $$Props extends Zdog.GroupOptions {}
  mount(Zdog.Group, $$props)
</script>

<slot />
