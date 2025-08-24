import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

import { AppLink } from '../app-link/app-link';
import styles from './prompt-link.module.css';
import { PromptLinkContent } from './prompt-link.types';


interface PromptLinkProps extends PromptLinkContent {
  className?: HTMLAttributes<HTMLElement>['className'];
}

export const PromptLink: FC<PromptLinkProps> = ({
  text,
  linkText,
  to,
  className = ''
}) => {

  return (
    <span className={clsx(styles.text, className)}>
      {text} <AppLink to={to}>{linkText}</AppLink>
    </span>
  );
}
