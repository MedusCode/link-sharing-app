import clsx from 'clsx';

import styles from '../drop-down.module.css';
import { DropDownItem } from '../drop-down.types';


interface OptionItemProps<T> {
  item: DropDownItem<T>;
  id: string;
  isSelected: boolean;
  liRef: (el: HTMLLIElement | null) => void;
  onFocus: () => void;
  onClick: () => void;
}

export const OptionItem = <T,>({
  item,
  id,
  isSelected,
  liRef,
  onFocus,
  onClick,
}: OptionItemProps<T>) => {
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
    >
      <div className={styles.item_content}>
        {IconElement ? <IconElement className={styles.icon} /> : null}
        <span className={styles.text}>{isSelected ? `${text} (Selected)` : text}</span>
      </div>
    </li>
  );
};
