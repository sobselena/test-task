import { BASE_HEADER_LINKS } from '../../constants';
import { AppNavLink } from '../app-nav-link';

export const Header = () => (
  <header>
    <nav>
      <ul>
        {BASE_HEADER_LINKS.map(({ link, text, key }) => (
          <li key={key}>
            <AppNavLink link={link}>{text}</AppNavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
