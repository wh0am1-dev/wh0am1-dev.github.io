<script lang="ts">
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
  import { theme } from '$lib/stores'

  export let size = 128
  let ticker = 0.85
  $: $theme && (ticker = 0.85)
</script>

{#key $theme}
  <Illustration
    element="canvas"
    width={size}
    height={size}
    zoom={size / 40}
    rotate={{
      x: easeInOut(ticker, 4) * TAU,
      y: easeInOut(ticker, 5) * TAU,
    }}
    update={node => delta => {
      node.rotate.x = easeInOut(ticker, 4) * TAU
      node.rotate.y = easeInOut(ticker, 5) * TAU
      ticker += delta / 6000
      ticker %= 1
    }}
  >
    <Group>
      <Shape stroke={10} color={colors.amber[$theme === 'dark' ? 400 : 500]} />
      <Anchor rotate={{ x: TAU / 10, y: TAU / 8 }}>
        <Ellipse
          diameter={32}
          color={colors.stone[$theme === 'dark' ? 100 : 800]}
        />
        <Ellipse
          diameter={32}
          color={colors.stone[$theme === 'dark' ? 100 : 800]}
          rotate={{ x: TAU / 4 }}
        />
        <Ellipse
          diameter={32}
          color={colors.stone[$theme === 'dark' ? 100 : 800]}
          rotate={{ y: TAU / 4 }}
        />
      </Anchor>
    </Group>
  </Illustration>
{/key}
