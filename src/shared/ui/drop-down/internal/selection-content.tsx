import { IconElement } from 'shared/lib';

import styles from '../drop-down.module.css';
import { DropDownItem } from '../drop-down.types';
import { ReactComponent as ArrowIcon } from "../icons/icon-chevron-down.svg";


interface SelectionContentProps<T> {
  item: DropDownItem<T> | null;
  fallbackIcon?: IconElement;
  placeholder: string;
}

export const SelectionContent = <T,>({
  item,
  fallbackIcon: FallbackIcon,
  placeholder
}: SelectionContentProps<T>) => {
  const Icon = item?.IconElement ?? FallbackIcon;

  return (
    <>
      {Icon && <Icon className={styles.icon} />}
      <span className={styles.button_text}>{item?.text ?? placeholder}</span>
      <ArrowIcon className={styles.arrow} />
    </>
  );
};
