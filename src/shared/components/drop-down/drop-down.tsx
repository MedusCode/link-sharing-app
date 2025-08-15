import {
  autoUpdate,
  flip,
  FloatingPortal,
  hide,
  offset,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useId, useRef, useState, } from 'react';

import AnimatedSlideContainer from '@animations/components/animated-slide-container/animated-slide-container';
import { dropDownAnimationPreset, dropDownPlaceholderPreset, } from '@shared/components/drop-down/drop-down.config';
import useDropDownKeys from '@shared/components/drop-down/hooks/use-drop-down-keys';
import IDropDownItem from '@shared/types/drop-down-item.type';
import TIconElement from '@shared/types/icon-element.type';
import getIndexByValue from '@shared/utils/get-index-by-value';

import styles from './drop-down.module.css';
import OptionsList from './internal/option-list';
import SelectionContent from './internal/selection-content';


interface IDropDownProps<T> {
  items: Array<IDropDownItem<T>>;
  value: T | null;
  onChange: (newValue: T | null) => void;
  placeholder?: string;
  IconElement?: TIconElement;
  label?: string;
}


const DropDown = <T extends string>(props: IDropDownProps<T>) => {
  const {
    items,
    value,
    onChange,
    placeholder = dropDownPlaceholderPreset.placeholder,
    IconElement = dropDownPlaceholderPreset.IconElement,
    label,
  } = props;

  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const optionsRef = useRef<(HTMLLIElement | null)[]>([]);
  const id = useId();

  const { refs, floatingStyles, placement, context, middlewareData } = useFloating({
    open: isOpened,
    onOpenChange: setIsOpened,
    placement: 'bottom-start',
    strategy: 'fixed',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip({ padding: 290 }),
      size({
        padding: 50,
        apply({ availableHeight, rects, elements }) {
          requestAnimationFrame(() => {
            if (listRef.current) {
              listRef.current.style.maxHeight = `${availableHeight}px`;
            }
            
            Object.assign(elements.floating.style, { width: `${rects.reference.width}px` });
          });
        },
      }),
      hide({ strategy: 'referenceHidden' }),
    ],
  });

  const dismiss = useDismiss(context, {
    outsidePressEvent: 'pointerdown',
  });
  const role = useRole(context, { role: 'listbox' });
  const { getFloatingProps } = useInteractions([dismiss, role]);

  const mergedButtonRef = useMergeRefs([
    buttonRef,
    refs.setReference,
  ]);

  const close = () => {
    setIsOpened(false);
    setActiveIdx(null);
    requestAnimationFrame(() => {
      lastFocusedRef.current?.focus();
    });
  };
  const open = () => {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    setActiveIdx(null);
    setIsOpened(true);
  };

  useEffect(() => {
    if (isOpened && middlewareData.hide?.referenceHidden) {
      close();
    }
  }, [isOpened, middlewareData.hide?.referenceHidden]);

  const selectedIdx = getIndexByValue(items, value, 'value');

  const { onKeyDown } = useDropDownKeys<T>({
    isOpened,
    items,
    activeIdx,
    onChange,
    optionsRef,
    buttonRef,
    close,
  });

  return (
    <div className={styles.container} onKeyDown={onKeyDown}>
      {label && (
        <label className={styles.label} htmlFor={`${id}-list`}>
          {label}
        </label>
      )}

      <div className={styles.drop_down}>
        <button
          className={clsx(styles.button, {
            [styles.button__active]: isOpened,
          })}
          aria-haspopup="listbox"
          aria-expanded={isOpened}
          aria-controls={id}
          type="button"
          onClick={() => (isOpened ? close() : open())}
          ref={mergedButtonRef}
          id={`${id}-list`}
        >
          <SelectionContent
            item={
              selectedIdx !== null ? items[selectedIdx] : null
            }
            fallbackIcon={IconElement}
            placeholder={placeholder}
          />
        </button>

        <AnimatePresence>
          {isOpened && (
            <FloatingPortal>
              <div
                {...getFloatingProps({
                  ref: refs.setFloating,
                  style: floatingStyles,
                  className: styles.floatingWrapper,
                })}
              >
                <AnimatedSlideContainer
                  animation={
                    placement.startsWith('top')
                      ? dropDownAnimationPreset.top
                      : dropDownAnimationPreset.bottom
                  }
                  className={clsx(
                    styles.list_container,
                    { [styles.list_container__top]: placement.startsWith('top') }
                  )}
                >
                  <OptionsList
                    items={items}
                    baseId={id}
                    optionRefs={optionsRef}
                    selectedIdx={selectedIdx}
                    activeIdx={activeIdx}
                    onItemFocus={(i) => setActiveIdx(i)}
                    onItemClick={(i) => {
                      onChange(items[i].value);
                      close();
                    }}
                    ref={listRef}
                  />
                </AnimatedSlideContainer>
              </div>
            </FloatingPortal>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DropDown;
