import { FC } from 'react';

import { ReactComponent as ArrowIcon } from "@shared/assets/images/icon-chevron-down.svg";
import IDropDownItem from '@shared/types/drop-down-item.type';
import TIconElement from '@shared/types/icon-element.type';

import styles from '../drop-down.module.css';

interface Props {
  item: IDropDownItem | null;
  fallbackIcon?: TIconElement;
  placeholder: string;
}

const SelectionContent: FC<Props> = ({
  item,
  fallbackIcon: FallbackIcon,
  placeholder
}) => {
  const Icon = item?.IconElement ?? FallbackIcon;

  return (
    <>
      {Icon && <Icon className={styles.icon} />}
      <span className={styles.button_text}>{item?.text ?? placeholder}</span>
      <ArrowIcon className={styles.arrow} />
    </>
  );
};

export default SelectionContent;
