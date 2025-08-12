import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { FC, KeyboardEvent, MutableRefObject, useId, useRef, useState } from 'react';

import AnimatedSlideContainer from '@animations/components/animated-slide-container/animated-slide-container';
import {
  DROP_DOWN_SIZING_GAP,
  dropDownAnimationPreset,
  dropDownPlaceholderPreset
} from '@shared/components/drop-down/drop-down.config';
import useOutsideClick from '@shared/hooks/use-outside-click';
import usePopupSizing from '@shared/hooks/use-popup-sizing';
import IDropDownItem from '@shared/types/drop-down-item.type';
import TIconElement from '@shared/types/icon-element.type';

import styles from './drop-down.module.css';
import OptionsList from './internal/option-list';
import SelectionContent from './internal/selection-content';


interface IDropDownProps {
  items: IDropDownItem[];
  placeholder?: string;
  IconElement?: TIconElement;
}

type Focusable = HTMLElement | null;

const createFocus = (refs: MutableRefObject<Focusable[]>) => ({
  first: () => refs.current[0]?.focus(),
  last: () => refs.current.at(-1)?.focus(),
  at: (i: number) => refs.current[i]?.focus(),
  has: (node: HTMLElement | null) => !!node && refs.current.includes(node),
});

const DropDown: FC<IDropDownProps> = ({
  items,
  placeholder = dropDownPlaceholderPreset.placeholder,
  IconElement = dropDownPlaceholderPreset.IconElement
}) => {
  const [ selectedIdx, setSelectedIdx ] = useState<number | null>(null);
  const [ activeIdx, setActiveIdx ] = useState<number | null>(null);
  const [ isOpened, setIsOpened ] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);
  const focus = createFocus(optionRefs);
  const id = useId();

  const { maxHeight, placement } = usePopupSizing(buttonRef, DROP_DOWN_SIZING_GAP);

  const close = () => {
    setIsOpened(false);
    setActiveIdx(null);
  };
  const open = () => {
    setActiveIdx(null);
    setIsOpened(true);
  };
  const toggleDropdown = () => (isOpened ? close() : open());

  useOutsideClick(isOpened, dropdownRef, close);

  const onKeyList = (e: KeyboardEvent) => {
    if (!isOpened) return;

    const actions: Record<string, () => void> = {
      ArrowDown: () => activeIdx === null ? focus.first() : focus.at(activeIdx + 1),
      ArrowUp: () => activeIdx === null ? focus.first() : focus.at(activeIdx - 1),
      Home: () => focus.first(),
      End: () => focus.last(),
      Enter: () => {
        setSelectedIdx(activeIdx);
        close();
      },
      Escape: () => {
        close();
        buttonRef.current?.focus();
      },
    };

    const action = actions[e.key];
    if (action) {
      e.preventDefault();
      action();
    }
  };

  const handleElementBlur = (element: HTMLElement | null) => !focus.has(element) && close();

  return (
    <div className={styles.container} ref={dropdownRef} onKeyDown={onKeyList}>
      <button
        className={clsx(styles.button, { [styles.button__active]: isOpened })}
        aria-haspopup="listbox"
        aria-expanded={isOpened}
        aria-controls={id}
        type={'button'}
        onClick={toggleDropdown}
        ref={buttonRef}
        onBlur={(evt) => handleElementBlur(evt.relatedTarget as HTMLElement)}
      >
        <SelectionContent
          item={selectedIdx !== null ? items[selectedIdx] : null}
          fallbackIcon={IconElement}
          placeholder={placeholder}
        />
      </button>

      <AnimatePresence>
        {isOpened && (
          <AnimatedSlideContainer
            animation={placement === 'top' ? dropDownAnimationPreset.top : dropDownAnimationPreset.bottom}
            className={clsx(styles.list_container, { [styles.list_container__top]: placement === 'top' })}
          >
            <OptionsList
              items={items}
              baseId={id}
              optionRefs={optionRefs}
              selectedIdx={selectedIdx}
              activeIdx={activeIdx}
              onItemFocus={(i) => setActiveIdx(i)}
              onItemClick={(i) => {
                setSelectedIdx(i);
                close();
              }}
              onItemBlur={handleElementBlur}
              maxHeight={maxHeight}
            />
          </AnimatedSlideContainer>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
