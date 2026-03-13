import type { LinkConfig } from '../types/link-config';
import { Paths } from './paths';

export const BASE_HEADER_LINKS: LinkConfig[] = [
  {
    link: Paths.ROOT,
    text: 'MiniCRM',
    key: 'Mini CRM',
    isLogo: true,
  },
  {
    link: Paths.ABOUT_US,
    text: 'О нас',
    key: 'about',
  },
  {
    link: Paths.USERS,
    text: 'Пользователи',
    key: 'users',
  },
  {
    link: Paths.GROUPS,
    text: 'Группы',
    key: 'groups',
  },
];
