<script lang="ts">
  import { Icon } from '@steeze-ui/svelte-icon'
  import {
    AcademicCap,
    Briefcase,
    Envelope,
    MapPin,
  } from '@steeze-ui/heroicons'
  import { Github, Linkedin, Twitter, Telegram } from '@steeze-ui/remix-icons'
  import { i18n } from '$lib/stores'
</script>

<ul>
  <li>
    <i><Icon src={Briefcase} theme="solid" /></i>
    <a href={$i18n.cv.jobs[0].link} target="_blank" rel="noopener noreferrer">
      {$i18n.cv.jobs[0].company}
    </a>
  </li>
  <li>
    <i><Icon src={Github} theme="solid" /></i>
    <a
      href={`https://github.com/${$i18n.home.github}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      @{$i18n.home.github}
    </a>
  </li>
</ul>

<ul>
  <li>
    <i><Icon src={Twitter} theme="solid" /></i>
    <a
      href={`https://twitter.com/${$i18n.home.twitter}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      @{$i18n.home.twitter}
    </a>
  </li>
  <li>
    <i><Icon src={Telegram} theme="solid" /></i>
    <a
      href="https://t.me/{$i18n.home.telegram}"
      target="_blank"
      rel="noopener noreferrer"
    >
      @{$i18n.home.telegram}
    </a>
  </li>
</ul>

<ul>
  <li>
    <i><Icon src={Linkedin} theme="solid" /></i>
    <a
      href={`https://linkedin.com/in/${$i18n.home.linkedin}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      @{$i18n.home.linkedin}
    </a>
  </li>
  <li>
    <i><Icon src={AcademicCap} theme="solid" /></i>
    <a href={$i18n.home.academy} target="_blank" rel="noopener noreferrer">
      {$i18n.home.education}
    </a>
  </li>
</ul>

<ul>
  <li>
    <i><Icon src={Envelope} theme="solid" /></i>
    <a href={`mailto:${$i18n.home.email}`}>
      {$i18n.home.email}
    </a>
  </li>
  <li>
    <i><Icon src={MapPin} theme="solid" /></i>
    <a href={$i18n.home.map} target="_blank" rel="noopener noreferrer">
      {$i18n.home.location}
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
    @apply float-left mr-2 w-7 text-amber-500 xl:w-8;
    @apply dark:text-amber-400;
  }

  a {
    @apply px-1 text-stone-800;
    @apply dark:text-stone-100 dark:hover:text-stone-800;
  }
</style>
