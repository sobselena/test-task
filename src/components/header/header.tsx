import { BASE_HEADER_LINKS } from '../../constants';
import { AppNavLink } from '../app-nav-link';
import styles from './header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {BASE_HEADER_LINKS.map(({ link, text, key, isLogo }) => (
          <li key={key} className={styles.item}>
            <AppNavLink link={link} isLogo={isLogo}>
              {text}
            </AppNavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
