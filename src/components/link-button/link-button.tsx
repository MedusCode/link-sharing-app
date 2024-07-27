import { FC } from 'react';
import styles from './link-button.module.css';
import TIconElement from '../../types/icon-element';
import TLinkTarget from '../../types/link-target';
import { ReactComponent as ArrowIcon } from "../../assets/images/icon-arrow-right.svg";
import THexColor from '../../types/hex-color';

interface ILinkButtonProps {
  href: string;
  IconElement?: TIconElement | null;
  color?: THexColor;
  isLight?: boolean;
  target?: TLinkTarget;
  children: string;
}

const LinkButton: FC<ILinkButtonProps> = ({
  href,
  IconElement,
  color,
  isLight = false,
  target,
  children
}) => {

  return (
    <a
      className={`${styles.button} ${isLight ? styles.button_light : ''}`}
      target={target ? target : '_self'}
      href={href}
      style={color ? {backgroundColor: color} : undefined}
    >
      <div className={styles.container}>
        {IconElement && <IconElement className={styles.icon} />}
        <span>{children}</span>
      </div>
      <ArrowIcon className={styles.arrow} />
    </a>
  );
}

export default LinkButton;
