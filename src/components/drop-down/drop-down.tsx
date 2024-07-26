import { FC, useState, MouseEvent as ReactMouseEvent, useEffect, useRef, useMemo } from 'react';
import styles from './drop-down.module.css';
import { nanoid } from 'nanoid';
import { ReactComponent as ArrowIcon } from "../../assets/images/icon-chevron-down.svg";
import TIconElement from '../../types/icon-element';
import IDropDownItem from '../../types/drop-down-item';
import DropDownItem from '../drop-down-item/drop-down-item';

interface IDropDownProps {
  items: IDropDownItem[];
  name: string;
  placeholder?: string;
  Icon?: TIconElement | null;
}

const DropDown: FC<IDropDownProps> = ({
  items,
  name,
  placeholder = 'Dropdown Field Default',
  Icon
}) => {
  const id = nanoid();
  const [ selection, setSelection ] = useState<IDropDownItem | null>(null);
  const [ isOpened, setIsOpened ] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (evt: ReactMouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsOpened(!isOpened);
  }

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(evt.target as Node)) {
        setIsOpened(false);
      }
    };

    if (isOpened) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpened]);

  const renderItems = useMemo(() => items.map(item =>
    <DropDownItem
      key={nanoid()}
      inputName={name}
      item={item}
      isSelected={selection ? selection.value === item.value : false}
      setSelection={setSelection}
      setIsOpened={setIsOpened}
    />
  ), [items, name, selection])

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button
        className={`${styles.button} ${isOpened ? styles.button_active : ''}`}
        role={'combobox'}
        aria-labelledby={'drop-down button'}
        aria-haspopup={'listbox'}
        aria-expanded={isOpened}
        aria-controls={id}
        onClick={toggleDropdown}
      >
        <>
          {selection?.icon ? <selection.icon className={styles.icon} /> : Icon ? <Icon className={styles.icon} /> : ''}
          <span className={styles.buttonText}>{selection ? selection.text : placeholder}</span>
          <ArrowIcon className={styles.arrow} />
        </>
      </button>
      <ul className={styles.list} role={'listbox'} id={id}>
        {
          renderItems
        }
      </ul>
    </div>
  );
}

export default DropDown;
