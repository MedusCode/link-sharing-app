import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import AppLink from '@shared/components/app-link/app-link';
import IPromptLinkContent from '@shared/types/prompt-link-content.type';

import styles from './prompt-link.module.css';

interface IPromptLinkProps extends IPromptLinkContent {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const PromptLink: FC<IPromptLinkProps> = ({
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

export default PromptLink;
