import { FC } from 'react';
import styles from './social-link.module.css';
import TIconElement from '../../types/icon-element.type';
import TLinkTarget from '../../types/link-target.type';
import { ReactComponent as ArrowIcon } from "../../../assets/images/icon-arrow-right.svg";
import THexColor from '../../types/hex-color.type';
import clsx from 'clsx';

interface ISocialLinkProps {
  href: string;
  IconElement?: TIconElement | null;
  color?: THexColor;
  isLight?: boolean;
  target?: TLinkTarget;
  children: string;
}

const SocialLink: FC<ISocialLinkProps> = ({
  href,
  IconElement,
  color,
  isLight = false,
  target,
  children
}) => {

  return (
    <a
      className={clsx(styles.button, { [styles.button_light]: isLight })}
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

export default SocialLink;
