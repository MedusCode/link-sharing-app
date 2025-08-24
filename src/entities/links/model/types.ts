import { socialNetworksPreset } from './social-networks.preset';


export type SocialId = keyof typeof socialNetworksPreset;

export type SocialEntry = typeof socialNetworksPreset[SocialId];

