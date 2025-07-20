import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import styles from './drop-down-item.module.css';
import { nanoid } from 'nanoid';
import IDropDownItem from '../../types/drop-down-item.type';

interface IDropDownListProps {
  inputName: string;
  item: IDropDownItem
  isSelected: boolean;
  setSelection: Dispatch<SetStateAction<IDropDownItem | null>>;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

const DropDownItem: FC<IDropDownListProps> = ({
  inputName,
  item,
  isSelected,
  setSelection,
  setIsOpened,
}) => {
  const Icon = item.icon;
  const id = nanoid();
  const text = isSelected ? `${item.text} (Selected)` : item.text;

  const selectItem = (evt: ChangeEvent<HTMLInputElement>) => {
    setSelection(item);
    setIsOpened(false);
  }

  return (
    <li
      className={`${styles.container} ${isSelected ? styles.container_selected : ''}`}
      role={'option'}
      aria-selected={isSelected}
    >
      <label className={styles.label} htmlFor={id}>
        <input
          className={styles.radio}
          type={'radio'}
          id={id}
          name={inputName}
          value={item.value}
          onChange={selectItem}
          checked={isSelected} />
        {Icon ? <Icon className={styles.icon} /> : ''}
        <span>{text}</span>
      </label>
    </li>
  )
}

export default DropDownItem;
