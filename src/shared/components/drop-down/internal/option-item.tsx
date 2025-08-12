import clsx from 'clsx';
import { FC } from 'react';

import IDropDownItem from '@shared/types/drop-down-item.type';

import styles from '../drop-down.module.css';


interface Props {
  item: IDropDownItem;
  id: string;
  isSelected: boolean;
  liRef: (el: HTMLLIElement | null) => void;
  onFocus: () => void;
  onClick: () => void;
  onBlur: (next: HTMLElement | null) => void;
}

const OptionItem: FC<Props> = ({
  item,
  id,
  isSelected,
  liRef,
  onFocus,
  onClick,
  onBlur
}) => {
  const { IconElement, text } = item;

  return (
    <li
      ref={liRef}
      className={clsx(styles.item, { [styles.item__selected]: isSelected })}
      id={id}
      role="option"
      aria-selected={isSelected}
      tabIndex={0}
      onFocus={onFocus}
      onClick={onClick}
      onBlur={(e) => onBlur(e.relatedTarget as HTMLElement | null)}
    >
      <div className={styles.item_content}>
        {IconElement ? <IconElement className={styles.icon} /> : null}
        <span className={styles.label}>{isSelected ? `${text} (Selected)` : text}</span>
      </div>
    </li>
  );
};

export default OptionItem;
