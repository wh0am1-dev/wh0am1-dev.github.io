<script lang="ts">
  import { Icon } from '@steeze-ui/svelte-icon'
  import { AcademicCap, Briefcase, Phone, Envelope } from '@steeze-ui/heroicons'
  import { Github, Linkedin, Twitter } from '@steeze-ui/remix-icons'
  import { i18n } from '$lib/i18n'
</script>

<ul>
  <li>
    <i><Icon src={Briefcase} theme="solid" /></i>
    <a href="https://accedo.tv" target="_blank" rel="noopener noreferrer">
      {@html $i18n.home.job}
    </a>
  </li>
  <li>
    <i><Icon src={AcademicCap} theme="solid" /></i>
    {@html $i18n.home.edu}
  </li>
</ul>

<ul>
  <li>
    <i><Icon src={Phone} theme="solid" /></i>
    <a href="tel:+34605271060">+34 605 271 060</a>
  </li>
  <li>
    <i><Icon src={Envelope} theme="solid" /></i>
    <a href="mailto:hey@carlos-aguilar.com">hey@carlos-aguilar.com</a>
  </li>
</ul>

<ul>
  <li>
    <i><Icon src={Github} theme="solid" /></i>
    <a
      href="https://github.com/wh0am1-dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      @wh0am1-dev
    </a>
  </li>
  <li>
    <i><Icon src={Linkedin} theme="solid" /></i>
    <a
      href="https://linkedin.com/in/carlosaguilardev"
      target="_blank"
      rel="noopener noreferrer"
    >
      @carlosaguilardev
    </a>
  </li>
  <li>
    <i><Icon src={Twitter} theme="solid" /></i>
    <a
      href="https://twitter.com/wh0am1_dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      @wh0am1_dev
    </a>
  </li>
</ul>

<style lang="postcss">
  ul {
    @apply flex w-80 flex-col flex-wrap items-start justify-center;
    @apply md:w-auto md:flex-row md:items-center md:justify-start;
  }

  li {
    @apply m-2 grow text-lg;
  }

  i {
    @apply float-left mr-2 w-6 text-amber-400;
  }

  a {
    @apply text-stone-100 hover:text-stone-800;
  }
</style>
