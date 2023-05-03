<script lang="ts">
  import { onMount } from 'svelte'
  import colors from 'tailwindcss/colors'
  import {
    Illustration,
    Group,
    Anchor,
    Ellipse,
    Shape,
    TAU,
    easeInOut,
  } from 'svelte-zdog'

  let ticker = 0
  let rotate = false

  onMount(() => {
    const timeout = setTimeout(() => (rotate = true), 1000)
    return () => clearTimeout(timeout)
  })
</script>

<Illustration
  element="canvas"
  width={128}
  height={128}
  zoom={3}
  update={node => delta => {
    if (rotate) {
      node.rotate.x = easeInOut(ticker % 1, 4) * TAU
      node.rotate.y = easeInOut(ticker % 1, 5) * TAU
      ticker += delta / 6000
    }
  }}
>
  <Group>
    <Shape stroke={10} color={colors.amber[400]} />
    <Anchor rotate={{ x: TAU / 10, y: TAU / 8 }}>
      <Ellipse diameter={32} color={colors.stone[100]} />
      <Ellipse
        diameter={32}
        color={colors.stone[100]}
        rotate={{ x: TAU / 4 }}
      />
      <Ellipse
        diameter={32}
        color={colors.stone[100]}
        rotate={{ y: TAU / 4 }}
      />
    </Anchor>
  </Group>
</Illustration>
