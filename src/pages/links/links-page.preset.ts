import { SectionContainerContent } from '@shared/ui/section-container/section-container.types';


interface LinksPagePreset {
  header: SectionContainerContent;
}

export const linksPagePreset = {
  header: {
    heading: 'Customize your links',
    description: 'Add/edit/remove links below and then share all your profiles with the world!'
  }
} as const satisfies LinksPagePreset;
