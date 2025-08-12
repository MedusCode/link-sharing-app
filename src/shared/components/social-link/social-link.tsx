import clsx from 'clsx';
import { AnchorHTMLAttributes, CSSProperties, FC } from 'react';

import { ReactComponent as ArrowIcon } from "@shared/assets/images/icon-arrow-right.svg";
import THexColor from '@shared/types/hex-color.type';
import TIconElement from '@shared/types/icon-element.type';

import styles from './social-link.module.css';

interface ISocialLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'> {
  href: string;
  IconElement?: TIconElement | null;
  color?: THexColor
  isLight?: boolean;
  className?: string;
  children: string;
}

const SocialLink: FC<ISocialLinkProps> = ({
  href,
  IconElement,
  color,
  isLight = false,
  target = '_blank',
  className,
  children,
  ...restProps
}) => {

  return (
    <a
      href={href}
      className={clsx(styles.button, { [styles.button__light]: isLight }, className)}
      target={target}
      style={color ? { '--bg-color': color } as CSSProperties : undefined}
      {...restProps}
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
