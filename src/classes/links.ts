import Link from './link';
import ISocialNetwork from '../types/social-networks.type';

interface ILinks {
  links: Link[],
}

export default class Links implements ILinks {
  links: Link[] = [];

  constructor(socialNetworks: ISocialNetwork[]) {
    socialNetworks.forEach(socialNetwork => {
      this.links.push(new Link(
        socialNetwork.value,
        socialNetwork.name,
        socialNetwork.color,
        socialNetwork.icon,
        socialNetwork.isColorLight
      ))
    })
  }

  get dropDownItems() {
    return this.links.map((link) => link.dropDownItems)
  }
}
