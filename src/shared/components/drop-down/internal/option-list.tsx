import { CSSProperties, FC, MutableRefObject } from 'react';

import IDropDownItem from '@shared/types/drop-down-item.type';

import styles from '../drop-down.module.css';
import OptionItem from './option-item';

export const getOptionId = (baseId: string, idx: number) => `${baseId}-opt-${idx}`;

export const getActiveDescendant = (baseId: string, idx: number | null) =>
  idx === null ? undefined : getOptionId(baseId, idx);

interface Props {
  items: IDropDownItem[];
  baseId: string;
  optionRefs: MutableRefObject<(HTMLLIElement | null)[]>;
  selectedIdx: number | null;
  activeIdx: number | null;
  onItemFocus: (idx: number) => void;
  onItemClick: (idx: number) => void;
  onItemBlur: (next: HTMLElement | null) => void;
  maxHeight: number;
}

const OptionsList: FC<Props> = ({
  items,
  baseId,
  optionRefs,
  selectedIdx,
  activeIdx,
  onItemFocus,
  onItemClick,
  onItemBlur,
  maxHeight
}) => {

  return (
    <ul
      className={styles.list}
      id={baseId}
      role="listbox"
      aria-activedescendant={getActiveDescendant(baseId, activeIdx)}
      style={{ '--max-height': `${maxHeight}px` } as CSSProperties}
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
          onBlur={onItemBlur}
        />
      ))}
    </ul>
  );
};

export default OptionsList;
