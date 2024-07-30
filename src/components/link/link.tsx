import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './link.module.css';

interface ILinkProps {
    children: string;
    href: string;
}

interface IRouterLinkProps {
  children: string;
  to: string;
}

const isRouterLink = (props: ILinkProps | IRouterLinkProps): props is IRouterLinkProps => {
  return (props as IRouterLinkProps).to !== undefined;
}

const Link: FC<ILinkProps | IRouterLinkProps> = (props) => {

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

export default Link;
