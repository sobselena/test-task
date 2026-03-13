import type { LinkConfig } from '../types/link-config';
import { Paths } from './paths';

export const BASE_HEADER_LINKS: LinkConfig[] = [
  {
    link: Paths.ROOT,
    text: 'MiniCRM',
    key: 'Mini CRM',
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
