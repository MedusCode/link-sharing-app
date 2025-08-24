import { SectionContainerContent } from '@shared/ui/section-container/section-container.types';


interface ProfilePagePreset {
  header: SectionContainerContent;
}

export const profilePagePreset = {
  header: {
    heading: 'Profile Details',
    description: 'Add your details to create a personal touch to your profile.'
  }
} as const satisfies ProfilePagePreset;
