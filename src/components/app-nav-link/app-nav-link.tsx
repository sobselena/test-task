import { NavLink } from 'react-router';
import type { LinkConfig } from '../../types/link-config';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import styles from './app-nav-link.module.scss';

const getNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.link, { [styles.active]: isActive });

type Props = Pick<LinkConfig, 'link' | 'isLogo'> & {
  children: ReactNode;
};
export const AppNavLink = ({ link, isLogo = false, children }: Props) => (
  <NavLink to={link} className={isLogo ? styles.logo : getNavLinkClasses}>
    {children}
  </NavLink>
);
