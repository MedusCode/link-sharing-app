import { AnchorHTMLAttributes, ComponentPropsWithoutRef, FC, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

import { getSafeRelUtil } from '@shared/lib';
import { Path } from '@shared/router';

import styles from './app-link.module.css';


interface AppLinkBaseProps {
  children: ReactNode;
  className?: HTMLAttributes<HTMLElement>['className'];
}

interface ExternalLinkProps extends AppLinkBaseProps,
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> {
  href: string;
}

interface InternalLinkProps extends AppLinkBaseProps,
  Omit<ComponentPropsWithoutRef<typeof RouterLink>, 'className' | 'children' | 'to'> {
  to: Path;
}

type AppLinkProps = ExternalLinkProps | InternalLinkProps;

const isInternal = (p: AppLinkProps): p is InternalLinkProps => 'to' in p;

export const AppLink: FC<AppLinkProps> = (props) => {
  const className = clsx(styles.link, props.className);

  if (isInternal(props)) {
    const { to, children, ...rest } = props;
    return (
      <RouterLink className={className} to={to} {...rest}>
        {children}
      </RouterLink>
    );
  }

  const { href, target, rel, children, ...rest } = props;

  return (
    <a className={className} href={href} target={target} rel={getSafeRelUtil(rel, target)} {...rest}>
      {children}
    </a>
  );
};
