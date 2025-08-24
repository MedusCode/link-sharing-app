import { SocialId } from '@entities/links/model/types';


export interface LinkItem {
  id: SocialId;
  href: string;
  order: number;
}
