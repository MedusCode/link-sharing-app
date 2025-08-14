import { ReactComponent as CodepenIcon } from '@shared/assets/images/icon-codepen.svg';
import { ReactComponent as CodewarsIcon } from '@shared/assets/images/icon-codewars.svg';
import { ReactComponent as DevToIcon } from '@shared/assets/images/icon-devto.svg';
import { ReactComponent as FacebookIcon } from '@shared/assets/images/icon-facebook.svg';
import { ReactComponent as FreeCodeCampIcon } from '@shared/assets/images/icon-freecodecamp.svg';
import { ReactComponent as FrontendMentorIcon } from '@shared/assets/images/icon-frontend-mentor.svg';
import { ReactComponent as GitHubIcon } from '@shared/assets/images/icon-github.svg';
import { ReactComponent as GitLabIcon } from '@shared/assets/images/icon-gitlab.svg';
import { ReactComponent as HashnodeIcon } from '@shared/assets/images/icon-hashnode.svg';
import { ReactComponent as LinkedInIcon } from '@shared/assets/images/icon-linkedin.svg';
import { ReactComponent as StackOverflowIcon } from '@shared/assets/images/icon-stack-overflow.svg';
import { ReactComponent as TwitchIcon } from '@shared/assets/images/icon-twitch.svg';
import { ReactComponent as TwitterIcon } from '@shared/assets/images/icon-twitter.svg';
import { ReactComponent as YouTubeIcon } from '@shared/assets/images/icon-youtube.svg';
import { ISocialNetwork } from '@shared/types/social-network.type';

export const socialNetworksPreset = {
  github: {
    name: 'GitHub',
    IconElement: GitHubIcon,
    color: '#1A1A1A',
    isColorLight: false,
    example: 'https://github.com/example',
  },
  twitter: {
    name: 'Twitter',
    IconElement: TwitterIcon,
    color: '#43B7E9',
    isColorLight: false,
    example: 'https://twitter.com/example',
  },
  linkedin: {
    name: 'LinkedIn',
    IconElement: LinkedInIcon,
    color: '#2D68FF',
    isColorLight: false,
    example: 'https://linkedin.com/in/example',
  },
  youtube: {
    name: 'YouTube',
    IconElement: YouTubeIcon,
    color: '#EE3939',
    isColorLight: false,
    example: 'https://youtube.com/example',
  },
  facebook: {
    name: 'Facebook',
    IconElement: FacebookIcon,
    color: '#2442AC',
    isColorLight: false,
    example: 'https://facebook.com/example',
  },
  twitch: {
    name: 'Twitch',
    IconElement: TwitchIcon,
    color: '#EE3FC8',
    isColorLight: false,
    example: 'https://twitter.com/example',
  },
  devto: {
    name: 'Dev.to',
    IconElement: DevToIcon,
    color: '#333333',
    isColorLight: false,
    example: 'https://dev.to/example',
  },
  codewars: {
    name: 'Codewars',
    IconElement: CodewarsIcon,
    color: '#8A1A50',
    isColorLight: false,
    example: 'https://codewars.com/example',
  },
  codepen: {
    name: 'Codepen',
    IconElement: CodepenIcon,
    color: '#302267',
    isColorLight: false,
    example: 'https://codepen.com/example',
  },
  freecodecamp: {
    name: 'freeCodeCamp',
    IconElement: FreeCodeCampIcon,
    color: '#0A0A21',
    isColorLight: false,
    example: 'https://freecodecamp.com/example',
  },
  gitlab: {
    name: 'GitLab',
    IconElement: GitLabIcon,
    color: '#EB4925',
    isColorLight: false,
    example: 'https://gitlab.com/example',
  },
  hashnode: {
    name: 'Hashnode',
    IconElement: HashnodeIcon,
    color: '#0330D1',
    isColorLight: false,
    example: 'https://hashnode.com/example',
  },
  stackoverflow: {
    name: 'Stack Overflow',
    IconElement: StackOverflowIcon,
    color: '#EC7100',
    isColorLight: false,
    example: 'https://stackoverflow.com/example',
  },
  frontendmentor: {
    name: 'Frontend Mentor',
    IconElement: FrontendMentorIcon,
    color: '#FFFFFF',
    isColorLight: true,
    example: 'https://frontendmentor.io/example',
  },
} as const satisfies Record<string, ISocialNetwork>;

export default socialNetworksPreset;
