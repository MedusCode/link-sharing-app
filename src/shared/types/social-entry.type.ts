import type { socialNetworksPreset } from '@shared/config/social-networks.preset';
import { TSocialId } from '@shared/types/social-id.type';

export type TSocialEntry = typeof socialNetworksPreset[TSocialId];
