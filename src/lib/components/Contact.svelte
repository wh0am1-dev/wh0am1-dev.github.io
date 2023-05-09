<script lang="ts">
  import { Icon } from '@steeze-ui/svelte-icon'
  import {
    AcademicCap,
    Briefcase,
    Phone,
    Envelope,
    MapPin,
  } from '@steeze-ui/heroicons'
  import { Github, Linkedin, Twitter } from '@steeze-ui/remix-icons'
  import { i18n } from '$lib/i18n'
  import contact from '$lib/data/contact.json'
  import work from '$lib/data/work.json'
</script>

<ul>
  <li>
    <i><Icon src={Briefcase} theme="solid" /></i>
    <a href={work[0].link} target="_blank" rel="noopener noreferrer">
      {work[0].company}
    </a>
  </li>
  <li>
    <i><Icon src={AcademicCap} theme="solid" /></i>
    <span>{$i18n.home.education}</span>
  </li>
</ul>

<ul>
  <li>
    <i><Icon src={Github} theme="solid" /></i>
    <a
      href={`https://github.com/${contact.github}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      @{contact.github}
    </a>
  </li>
  <li>
    <i><Icon src={Linkedin} theme="solid" /></i>
    <a
      href={`https://linkedin.com/in/${contact.linkedin}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      @{contact.linkedin}
    </a>
  </li>
  <li>
    <i><Icon src={Twitter} theme="solid" /></i>
    <a
      href={`https://twitter.com/${contact.twitter}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      @{contact.twitter}
    </a>
  </li>
</ul>

<ul>
  <li>
    <i><Icon src={Envelope} theme="solid" /></i>
    <a href={`mailto:${contact.email}`}>
      {contact.email}
    </a>
  </li>
  <li>
    <i><Icon src={Phone} theme="solid" /></i>
    <a href={`tel:${contact.phone.replaceAll(' ', '')}`}>
      {contact.phone}
    </a>
  </li>
  <li>
    <i><Icon src={MapPin} theme="solid" /></i>
    <span>{$i18n.home.location}</span>
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
    @apply float-left mr-2 w-7 text-amber-400 xl:w-8;
  }

  a {
    @apply px-1 text-stone-100 hover:text-stone-800;
  }
</style>
