import { forwardRef, MutableRefObject, Ref } from 'react';

import IDropDownItem from '@shared/types/drop-down-item.type';

import styles from '../drop-down.module.css';
import OptionItem from './option-item';

export const getOptionId = (baseId: string, idx: number) => `${baseId}-opt-${idx}`;

export const getActiveDescendant = (baseId: string, idx: number | null) =>
  idx === null ? undefined : getOptionId(baseId, idx);

interface IOptionListProps<T> {
  items: Array<IDropDownItem<T>>;
  baseId: string;
  optionRefs: MutableRefObject<(HTMLLIElement | null)[]>;
  selectedIdx: number | null;
  activeIdx: number | null;
  onItemFocus: (idx: number) => void;
  onItemClick: (idx: number) => void;
}

const OptionsList = forwardRef(
  <T,>(
    {
      items,
      baseId,
      optionRefs,
      selectedIdx,
      activeIdx,
      onItemFocus,
      onItemClick,
    }: IOptionListProps<T>,
    ref: Ref<HTMLUListElement>
  ) => {
    return (
      <ul
        ref={ref}
        className={styles.list}
        id={baseId}
        role="listbox"
        aria-activedescendant={getActiveDescendant(baseId, activeIdx)}
        tabIndex={-1}
      >
        {items.map((item, i) => (
          <OptionItem
            key={item.text}
            item={item}
            id={getOptionId(baseId, i)}
            isSelected={i === selectedIdx}
            liRef={(el) => (optionRefs.current[i] = el)}
            onFocus={() => onItemFocus(i)}
            onClick={() => onItemClick(i)}
          />
        ))}
      </ul>
    );
  }
);

export default OptionsList;
