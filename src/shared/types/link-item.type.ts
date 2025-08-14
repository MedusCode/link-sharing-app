import { TSocialId } from '@shared/types/social-id.type';

export interface ILinkItem {
  id: TSocialId;
  href: string;
  order: number;
}
