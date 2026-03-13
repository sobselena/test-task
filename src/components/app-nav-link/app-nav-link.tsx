import { NavLink } from 'react-router';
import type { LinkConfig } from '../../types/link-config';
import classNames from 'classnames';
import styles from './app-nav-link.module.css';
import type { ReactNode } from 'react';

const getNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.link, { [styles.active]: isActive });

type Props = Pick<LinkConfig, 'link'> & {
  children: ReactNode;
};
export const AppNavLink = (props: Props) => (
  <NavLink to={props.link} className={getNavLinkClasses}>
    {props.children}
  </NavLink>
);
