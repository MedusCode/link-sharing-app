import { createSelector } from '@reduxjs/toolkit';

import { socialNetworksPreset } from '@entities/links';
import { SocialEntry, SocialId } from '@entities/links/model/types';

import { linksEditAdapter } from './slice';


export type LinksEditSliceShape = ReturnType<typeof linksEditAdapter.getInitialState>;

type Options = {
  preset?: Record<SocialId, SocialEntry>;
};

export const createLinksEditSelectors = <Root>(
  selectSlice: (state: Root) => LinksEditSliceShape,
  { preset = socialNetworksPreset }: Options = {}
) => {
  const base = linksEditAdapter.getSelectors(selectSlice);

  const selectAll = base.selectAll;
  const selectById = base.selectById;
  const selectIds = (state: Root) => base.selectIds(state) as SocialId[];
  const selectTotal = base.selectTotal;

  const selectUsedSocialIds = createSelector(
    selectIds,
    (ids) => new Set<SocialId>(ids)
  );

  const selectAvailableSocialIds = createSelector(
    selectUsedSocialIds,
    (used) =>
      Object.keys(preset)
        .filter((id) => !used.has(id as SocialId)) as SocialId[]
  );

  const selectOrderedIds = createSelector(selectAll, (items) => items.map((i) => i.id));

  const selectHrefById = (id: SocialId) =>
    createSelector(
      (state: Root) => selectById(state, id)?.href,
      (href) => href ?? ''
    );

  return {
    selectAll,
    selectById,
    selectIds,
    selectTotal,
    selectAvailableSocialIds,
    selectUsedSocialIds,
    selectOrderedIds,
    selectHrefById,
  };
};
