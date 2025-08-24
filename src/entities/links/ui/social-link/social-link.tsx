import { AnchorHTMLAttributes, CSSProperties, FC } from 'react';
import clsx from 'clsx';

import { HexColor, IconElement } from '@shared/lib';
import { isValidUrl } from '@shared/lib/text-inputs/validate-value.util';

import { ReactComponent as ArrowIcon } from "./icons/icon-arrow-right.svg";
import styles from './social-link.module.css';


interface SocialLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'> {
  href?: string;
  IconElement?: IconElement | null;
  color?: HexColor
  isLight?: boolean;
  className?: string;
  children: string;
}

export const SocialLink: FC<SocialLinkProps> = ({
  href = '',
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
      href={isValidUrl(href) ? href : undefined}
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
