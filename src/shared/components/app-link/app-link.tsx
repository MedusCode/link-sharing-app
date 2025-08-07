import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './app-link.module.css';
import TLinkTarget from '../../types/link-target.type';

interface ILinkProps {
  children: string;
  href: string;
  target?: TLinkTarget;
}

interface IRouterLinkProps {
  children: string;
  to: string;
  target?: TLinkTarget;
}

const isRouterLink = (props: ILinkProps | IRouterLinkProps): props is IRouterLinkProps => {
  return (props as IRouterLinkProps).to !== undefined;
}

const AppLink: FC<ILinkProps | IRouterLinkProps> = (props) => {

  if (isRouterLink(props)) {
    return (
      <RouterLink className={styles.link} to={props.to}>
        {props.children}
      </RouterLink>
    );
  } else {
    return (
      <a className={styles.link} href={props.href}>
        {props.children}
      </a>
    );
  }
}

export default AppLink;
