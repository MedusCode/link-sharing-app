import IDropdownProps from '../types/dropdown-props';
import { ReactComponent as GitHubIcon } from '../assets/images/icon-github.svg';
import { ReactComponent as TwitterIcon } from '../assets/images/icon-twitter.svg';
import { ReactComponent as LinkedInIcon } from '../assets/images/icon-linkedin.svg';
import { ReactComponent as YouTubeIcon } from '../assets/images/icon-youtube.svg';
import { ReactComponent as FacebookIcon } from '../assets/images/icon-facebook.svg';
import { ReactComponent as TwitchIcon } from '../assets/images/icon-twitch.svg';
import { ReactComponent as DevToIcon } from '../assets/images/icon-devto.svg';
import { ReactComponent as CodewarsIcon } from '../assets/images/icon-codewars.svg';
import { ReactComponent as CodepenIcon } from '../assets/images/icon-codepen.svg';
import { ReactComponent as FreeCodeCampIcon } from '../assets/images/icon-freecodecamp.svg';
import { ReactComponent as GitLabIcon } from '../assets/images/icon-gitlab.svg';
import { ReactComponent as HashnodeIcon } from '../assets/images/icon-hashnode.svg';
import { ReactComponent as StackOverflowIcon } from '../assets/images/icon-stack-overflow.svg';
import { ReactComponent as FrontendMentorIcon } from '../assets/images/icon-frontend-mentor.svg';


const socialNetworksDropdown: IDropdownProps[] = [
  {
    text: 'GitHub',
    value: 'github',
    icon: GitHubIcon
  },
  {
    text: 'Twitter',
    value: 'twitter',
    icon: TwitterIcon
  },
  {
    text: 'LinkedIn',
    value: 'linkedin',
    icon: LinkedInIcon
  },
  {
    text: 'YouTube',
    value: 'youtube',
    icon: YouTubeIcon
  },
  {
    text: 'Facebook',
    value: 'facebook',
    icon: FacebookIcon
  },
  {
    text: 'Twitch',
    value: 'twitch',
    icon: TwitchIcon
  },
  {
    text: 'Dev.to',
    value: 'devto',
    icon: DevToIcon
  },
  {
    text: 'Codewars',
    value: 'codewars',
    icon: CodewarsIcon
  },
  {
    text: 'Codepen',
    value: 'codepen',
    icon: CodepenIcon
  },
  {
    text: 'freeCodeCamp',
    value: 'freecodecamp',
    icon: FreeCodeCampIcon
  },
  {
    text: 'GitLab',
    value: 'gitlab',
    icon: GitLabIcon
  },
  {
    text: 'Hashnode',
    value: 'hashnode',
    icon: HashnodeIcon
  },
  {
    text: 'Stack Overflow',
    value: 'stackoverflow',
    icon: StackOverflowIcon
  },
  {
    text: 'Frontend Mentor',
    value: 'frontendmentor',
    icon: FrontendMentorIcon
  },
]

export default socialNetworksDropdown;
