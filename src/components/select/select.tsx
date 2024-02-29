import { FC } from 'react';
import styles from './select.module.css';
import { nanoid } from 'nanoid';
import { TDropdownValues } from '../../types/dropdown-values';
import { ReactComponent as ArrowIcon } from "../../assets/images/icon-chevron-down.svg";

interface ISelectProps {
  values: TDropdownValues;
  name: string;
  placeholder?: string;
  Icon?: FC;
}

const Select: FC<ISelectProps> = ({
  values,
  name,
  placeholder = 'Make a selection',
  Icon
}) => {
  const listId = nanoid();

  const generateListItems = () => {
    return values.map((value => {
      const id = nanoid();
      return (
        <li className={styles.dropdownItem} role={'option'} aria-selected={false} key={id}>
          <input className={styles.dropdownRadio} type={'radio'} id={id} name={name} value={value.value} />
          <label className={styles.dropdownLabel} htmlFor={id}>{value.text}</label>
        </li>
      )
    }));
  }

  return (
    <>
      <button
        className={styles.button}
        role={'combobox'}
        aria-labelledby={'select button'}
        aria-haspopup={'listbox'}
        aria-expanded={false}
        aria-controls={listId}
      >
        {Icon ? <Icon /> : ''}
        <span className={styles.buttonText}>{placeholder}</span>
        <ArrowIcon />
      </button>
      <ul className={styles.dropdownList} role={'listbox'} id={listId}>
        {generateListItems()}
      </ul>
    </>
  );
}

export default Select;
