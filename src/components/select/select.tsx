import { FC, useState, ChangeEvent, SVGProps, MouseEvent } from 'react';
import styles from './select.module.css';
import { nanoid } from 'nanoid';
import { IDropdownValue, TDropdownValues } from '../../types/dropdown-values';
import { ReactComponent as ArrowIcon } from "../../assets/images/icon-chevron-down.svg";

interface ISelectProps {
  values: TDropdownValues;
  name: string;
  placeholder?: string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
}

const Select: FC<ISelectProps> = ({
  values,
  name,
  placeholder = 'Dropdown Field Default',
  Icon
}) => {
  const listId = nanoid();
  const [ selection, setSelection ] = useState<IDropdownValue | null>(null);
  const [ isOpened, setIsOpened ] = useState<boolean>(false);

  const toggleDropdown = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setIsOpened(!isOpened);
  }

  const closeDropdown = () => {
    setIsOpened(false);
  }

  const selectItem = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target instanceof HTMLInputElement) {
      const selectedValue = evt.target.value;
      const selectedInstance = values.find((value) => value.value === selectedValue);

      if (selectedInstance) {
        setSelection(selectedInstance);
        closeDropdown();
      }
    }
  }

  const generateListItems = () => {
    return values.map((value => {
      const Icon = value.icon;
      const id = nanoid();
      const isSelected = selection?.value === value.value
      const selectedText = `${value.text} (Selected)`

      return (
        <li
          className={`${styles.dropdownItem} ${isSelected ? styles.dropdownItem_selected : ''}`}
          role={'option'}
          aria-selected={isSelected}
          key={id}
        >
          <label className={styles.dropdownLabel} htmlFor={id}>
            <input
              className={styles.dropdownRadio}
              type={'radio'}
              id={id}
              name={name}
              value={value.value}
              onChange={selectItem}
              checked={isSelected} />
            {Icon ? <Icon className={styles.icon} /> : ''}
            <span className={styles.dropdownText}>{isSelected ? selectedText : value.text}</span>
          </label>
        </li>
      )
    }));
  }

  return (
    <div className={styles.selectContainer}>
      <button
        className={`${styles.button} ${isOpened ? styles.button_active : ''}`}
        role={'combobox'}
        aria-labelledby={'select button'}
        aria-haspopup={'listbox'}
        aria-expanded={isOpened}
        aria-controls={listId}
        onClick={toggleDropdown}
      >
        <>
          {selection?.icon ? <selection.icon className={styles.icon} /> : Icon ? <Icon className={styles.icon} /> : ''}
          <span className={styles.buttonText}>{selection ? selection.text : placeholder}</span>
          <ArrowIcon className={styles.arrow} />
        </>
      </button>
      <ul className={styles.dropdownList} role={'listbox'} id={listId}>
        {generateListItems()}
      </ul>
    </div>
  );
}

export default Select;
