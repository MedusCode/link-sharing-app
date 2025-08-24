import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SocialId } from '@entities/links';

import { LinkItem } from './types';


const adapter = createEntityAdapter<LinkItem, string>({
  selectId: (link) => link.id,
  sortComparer: (a, b) => a.order - b.order,
});

const initialState = adapter.getInitialState();

export const linksEditSlice = createSlice({
  name: 'linksEdit',
  initialState,
  reducers: {
    linkAdded(state, { payload }: PayloadAction<{ id: SocialId; href?: string }>) {
      if (state.entities[payload.id]) return;

      (state.ids as SocialId[]).forEach((id) => {
        state.entities[id]!.order += 1;
      });

      adapter.addOne(state, {
        ...payload,
        href: payload.href ?? '',
        order: 0
      });
    },

    linkHrefUpdated(state, { payload }: PayloadAction<{ id: SocialId; href: string }>) {
      if (!state.entities[payload.id]) return;

      adapter.updateOne(state, { id: payload.id, changes: { href: payload.href } });
    },

    linkPlatformUpdated(state, { payload }: PayloadAction<{ id: SocialId; newId: SocialId }>) {
      const { id, newId } = payload;
      const current = state.entities[id];
      if (!current || state.entities[newId]) return;

      const { href, order } = current;
      adapter.removeOne(state, id);
      adapter.addOne(state, { id: newId, href, order });
    },

    linkRemoved(state, { payload }: PayloadAction<{ id: SocialId }>) {
      adapter.removeOne(state, payload.id);
      (state.ids as SocialId[]).forEach((id, idx) => {
        state.entities[id]!.order = idx;
      });
    },

    linksReordered(state, { payload }: PayloadAction<{ orderedIds: SocialId[] }>) {
      payload.orderedIds.forEach((id, idx) => {
        const item = state.entities[id];
        if (item) item.order = idx;
      });
    },

    linksSet(state, { payload }: PayloadAction<LinkItem[]>) {
      adapter.setAll(state, payload);
    },
  },
});

export const linksEditReducer = linksEditSlice.reducer;
export const linksEditActions = linksEditSlice.actions;
export const linksEditAdapter = adapter;
