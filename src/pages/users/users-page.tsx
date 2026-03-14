import { useSearchParams } from 'react-router';
import { useGetAllUsersQuery } from '../../redux/api';
import { TableCard } from './components/table-card';
import { JobSelector } from './job-selector';
import styles from './users-page.module.scss';
import { USERS_PAGINATION } from '../../constants/pagination';
import { Pagination } from '../../components/pagination';
import { useState } from 'react';
import { UserModal } from './user-modal/user-modal';

export const UsersPage = () => {
  const { data, isFetching } = useGetAllUsersQuery();
  const [searchParams] = useSearchParams();
  const [openModal, setOpenModal] = useState(false);
  const page = searchParams.get('page');

  const lastPage = (Number(page) || 1) * USERS_PAGINATION;

  const users = data?.slice(lastPage - USERS_PAGINATION, lastPage);
  console.log(users);
  return (
    <main className={styles.page}>
      <header>
        <h1 className={styles.pageTitle}>Сотрудники</h1>
      </header>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <span className={styles.searchIcon}>
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" />
            </svg>
          </span>

          <input
            type="text"
            placeholder="Поиск по имени или логину..."
            className={styles.searchInput}
          />
        </div>

        <JobSelector data={data} />

        <button className={styles.addButton} onClick={() => setOpenModal(true)}>
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          Добавить
        </button>
      </div>

      <TableCard data={users} isFetching={isFetching} />

      <Pagination total={data?.length} />

      <UserModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </main>
  );
};
