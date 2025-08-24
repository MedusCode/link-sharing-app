import { KeyboardEvent, MutableRefObject, useCallback } from 'react';

import { DropDownItem } from './drop-down.types';


export interface UseDropDownKeysArgs<T> {
  isOpened: boolean;
  items: Array<DropDownItem<T>>;
  activeIdx: number | null;
  onChange: (newValue: T | null) => void;
  buttonRef: MutableRefObject<HTMLButtonElement | null>;
  optionsRef: MutableRefObject<(HTMLLIElement | null)[]>;
  close: () => void;
}

type ListKey =
  | 'ArrowDown'
  | 'ArrowUp'
  | 'Home'
  | 'End'
  | 'Enter'
  | 'Escape'
  | 'Tab';

type Focusable = HTMLElement | null;

const createFocus = (refs: MutableRefObject<Focusable[]>) => ({
  first: () => refs.current[0]?.focus(),
  last: () => refs.current.at(-1)?.focus(),
  at: (i: number) => refs.current[i]?.focus(),
});

const useDropDownKeysUtil = <T>({
  isOpened,
  items,
  activeIdx,
  onChange,
  optionsRef,
  buttonRef,
  close,
}: UseDropDownKeysArgs<T>) => {


  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpened) return;

    const focus = createFocus(optionsRef);

    const actions: Partial<Record<ListKey, () => void>> = {
      ArrowDown: () => {
        if (activeIdx === null) focus.first();
        else focus.at(Math.min(activeIdx + 1, items.length - 1));
      },
      ArrowUp: () => {
        if (activeIdx === null) focus.first();
        else focus.at(Math.max(activeIdx - 1, 0));
      },
      Home: () => focus.first(),
      End: () => focus.last(),
      Enter: () => {
        if (activeIdx !== null) onChange(items[activeIdx].value);
        close();
      },
      Escape: () => {
        close();
        buttonRef.current?.focus();
      },
      Tab: () => {
        // Примечание: вы перехватываете Tab — это ок для "ловушки" фокуса внутри списка.
        if (e.shiftKey) {
          if (activeIdx === null) {
            focus.last();
          } else if (activeIdx === 0) {
            buttonRef.current?.focus();
            close();
          } else {
            focus.at(activeIdx - 1);
          }
        } else {
          if (activeIdx === null) {
            focus.first();
          } else if (activeIdx === items.length - 1) {
            buttonRef.current?.focus();
            close();
          } else {
            focus.at(activeIdx + 1);
          }
        }
      },
    };

    const action = actions[e.key as ListKey];
    if (action) {
      e.preventDefault();
      action();
    }
  }, [isOpened, activeIdx, items, onChange, focus, buttonRef, close]);

  return { onKeyDown };
}

export default useDropDownKeysUtil;
