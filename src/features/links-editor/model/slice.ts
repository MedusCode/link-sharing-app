import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { TSocialId } from '@shared/types/social-id.type';

import type { ILinkItem } from '@shared/types/link-item.type';

const adapter = createEntityAdapter<ILinkItem, string>({
  selectId: (link) => link.id,
  sortComparer: (a, b) => a.order - b.order,
});

const initialState = adapter.getInitialState();

export const linksEditorSlice = createSlice({
  name: 'linksEditor',
  initialState,
  reducers: {
    linkAdded(state, { payload }: PayloadAction<{ id: TSocialId; href?: string }>) {
      if (state.entities[payload.id]) return;

      (state.ids as TSocialId[]).forEach((id) => {
        state.entities[id]!.order += 1;
      });

      adapter.addOne(state, {
        ...payload,
        href: payload.href ?? '',
        order: 0
      });
    },


    linkHrefUpdated(state, { payload }: PayloadAction<{ id: TSocialId; href: string }>) {
      if (!state.entities[payload.id]) return;

      adapter.updateOne(state, { id: payload.id, changes: { href: payload.href } });
    },

    linkPlatformUpdated(state, { payload }: PayloadAction<{ id: TSocialId; newId: TSocialId }>) {
      const { id, newId } = payload;
      const current = state.entities[id];
      if (!current || state.entities[newId]) return;

      const { href, order } = current;
      adapter.removeOne(state, id);
      adapter.addOne(state, { id: newId, href, order });
    },

    linkRemoved(state, { payload }: PayloadAction<{ id: TSocialId }>) {
      adapter.removeOne(state, payload.id);
      (state.ids as TSocialId[]).forEach((id, idx) => {
        state.entities[id]!.order = idx;
      });
    },

    linksReordered(state, { payload }: PayloadAction<{ orderedIds: TSocialId[] }>) {
      payload.orderedIds.forEach((id, idx) => {
        const item = state.entities[id];
        if (item) item.order = idx;
      });
    },

    linksSet(state, { payload }: PayloadAction<ILinkItem[]>) {
      adapter.setAll(state, payload);
    },
  },
});

export const linksEditorReducer = linksEditorSlice.reducer;
export const linksEditorActions = linksEditorSlice.actions;
export const linksEditorAdapter = adapter;
