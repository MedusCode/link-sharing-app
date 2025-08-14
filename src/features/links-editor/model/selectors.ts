import { createSelector } from '@reduxjs/toolkit';

import socialNetworksPreset from '@shared/config/social-networks.preset';
import type { TSocialEntry } from '@shared/types/social-entry.type';
import type { TSocialId } from '@shared/types/social-id.type';

import { linksEditorAdapter } from './slice';

export type LinksEditorSliceShape = ReturnType<typeof linksEditorAdapter.getInitialState>;

type Options = {
  preset?: Record<TSocialId, TSocialEntry>;
};

export const createLinksEditorSelectors = <Root>(
  selectSlice: (state: Root) => LinksEditorSliceShape,
  { preset = socialNetworksPreset }: Options = {}
) => {
  const base = linksEditorAdapter.getSelectors(selectSlice);

  const selectAll = base.selectAll;
  const selectById = base.selectById;
  const selectIds = (state: Root) => base.selectIds(state) as TSocialId[];
  const selectTotal = base.selectTotal;

  const selectUsedSocialIds = createSelector(selectAll, (items) => {
    return new Set<TSocialId>(items.map((i) => i.id));
  });

  const selectAvailableSocialIds = createSelector(
    selectUsedSocialIds,
    (used) =>
      Object.keys(preset)
        .filter((id) => !used.has(id as TSocialId)) as TSocialId[]
  );

  const selectOrderedIds = createSelector(selectAll, (items) => items.map((i) => i.id));

  const selectHrefById = (id: TSocialId) =>
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
