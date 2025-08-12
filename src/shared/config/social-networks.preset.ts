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
import ISocialNetwork from '@shared/types/social-networks.type';

const socialNetworksPreset: ISocialNetwork[] = [
  {
    name: 'GitHub',
    value: 'github',
    icon: GitHubIcon,
    color: '#1A1A1A',
    isColorLight: false
  },
  {
    name: 'Twitter',
    value: 'twitter',
    icon: TwitterIcon,
    color: '#43B7E9',
    isColorLight: false
  },
  {
    name: 'LinkedIn',
    value: 'linkedin',
    icon: LinkedInIcon,
    color: '#2D68FF',
    isColorLight: false
  },
  {
    name: 'YouTube',
    value: 'youtube',
    icon: YouTubeIcon,
    color: '#EE3939',
    isColorLight: false
  },
  {
    name: 'Facebook',
    value: 'facebook',
    icon: FacebookIcon,
    color: '#2442AC',
    isColorLight: false
  },
  {
    name: 'Twitch',
    value: 'twitch',
    icon: TwitchIcon,
    color: '#EE3FC8',
    isColorLight: false
  },
  {
    name: 'Dev.to',
    value: 'devto',
    icon: DevToIcon,
    color: '#333333',
    isColorLight: false
  },
  {
    name: 'Codewars',
    value: 'codewars',
    icon: CodewarsIcon,
    color: '#8A1A50',
    isColorLight: false
  },
  {
    name: 'Codepen',
    value: 'codepen',
    icon: CodepenIcon,
    color: '#302267',
    isColorLight: false
  },
  {
    name: 'freeCodeCamp',
    value: 'freecodecamp',
    icon: FreeCodeCampIcon,
    color: '#0A0A21',
    isColorLight: false
  },
  {
    name: 'GitLab',
    value: 'gitlab',
    icon: GitLabIcon,
    color: '#EB4925',
    isColorLight: false
  },
  {
    name: 'Hashnode',
    value: 'hashnode',
    icon: HashnodeIcon,
    color: '#0330D1',
    isColorLight: false
  },
  {
    name: 'Stack Overflow',
    value: 'stackoverflow',
    icon: StackOverflowIcon,
    color: '#EC7100',
    isColorLight: false
  },
  {
    name: 'Frontend Mentor',
    value: 'frontendmentor',
    icon: FrontendMentorIcon,
    color: '#FFFFFF',
    isColorLight: true
  },
]

export default socialNetworksPreset;
