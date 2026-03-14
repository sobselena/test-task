import { useGetAllUsersQuery } from '../../redux/api';
import { TableCard } from './components/table-card';
import { JobSelector } from './job-selector';
import styles from './users-page.module.scss';

import { Pagination } from '../../components/pagination';
import { useState, type ChangeEvent } from 'react';
import { UserModal } from './user-modal/user-modal';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/reducers';

export const UsersPage = () => {
  const { data, isFetching } = useGetAllUsersQuery();
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState('');

  const users = data?.filter(({ fullName }) =>
    fullName.toLowerCase().includes(search.toLowerCase())
  );
  console.log(users);
  const dispatch = useDispatch();
  function onAdd() {
    dispatch(deleteUser());
    setOpenModal(true);
  }

  function onSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

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
            onChange={onSearch}
            type="text"
            value={search}
            placeholder="Поиск по имени..."
            className={styles.searchInput}
          />
        </div>

        <JobSelector data={data} />

        <button className={styles.addButton} onClick={onAdd}>
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          Добавить
        </button>
      </div>

      <TableCard data={users} isFetching={isFetching} openModal={() => setOpenModal(true)} />

      <Pagination total={users?.length} />

      <UserModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </main>
  );
};
