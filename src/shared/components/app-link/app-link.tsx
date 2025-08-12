import clsx from 'clsx';
import { AnchorHTMLAttributes, ComponentPropsWithoutRef, FC, HTMLAttributes, ReactNode } from 'react';
import { Link as RouterLink, To } from 'react-router-dom';

import safeRel from '@shared/utils/safe-rel';

import styles from './app-link.module.css';

interface IAppLinkBaseProps {
  children: ReactNode;
  className?: HTMLAttributes<HTMLElement>['className'];
}

interface IExternalLinkProps extends IAppLinkBaseProps,
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> {
  href: string;
}

interface IInternalLinkProps extends IAppLinkBaseProps,
  Omit<ComponentPropsWithoutRef<typeof RouterLink>, 'className' | 'children' | 'to'> {
  to: To;
}

type TAppLinkProps = IExternalLinkProps | IInternalLinkProps;

const isInternal = (p: TAppLinkProps): p is IInternalLinkProps => 'to' in p;

const AppLink: FC<TAppLinkProps> = (props) => {
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
    <a className={className} href={href} target={target} rel={safeRel(rel, target)} {...rest}>
      {children}
    </a>
  );
};

export default AppLink;
