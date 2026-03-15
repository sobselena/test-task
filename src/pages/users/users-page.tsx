import { useGetAllUsersQuery } from '../../redux/api';
import { TableCard } from './components/table-card';
import { JobSelector } from './components/job-selector';
import styles from './users-page.module.scss';
import { Pagination } from '../../components/pagination';
import { useState, type ChangeEvent } from 'react';
import { UserModal } from './components/user-modal/user-modal';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/reducers';
import { useSearchParams } from 'react-router';
import { USERS_PAGINATION } from '../../constants/pagination';
import { useJobTypeSelector } from '../../redux/selectors';
import { DeletePanel } from './components/delete-panel';

export const UsersPage = () => {
  const { data, isFetching } = useGetAllUsersQuery();

  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState('');

  const { jobType } = useJobTypeSelector();
  const sameType =
    jobType === 'All' ? data : data?.filter((userData) => userData.jobType === jobType);
  const users = sameType?.filter(({ fullName }) =>
    fullName.toLowerCase().includes(search.toLowerCase())
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const start = (page - 1) * USERS_PAGINATION;
  const end = start + USERS_PAGINATION;

  const paginatedUsers = users?.slice(start, end);

  const dispatch = useDispatch();
  function onAdd() {
    dispatch(deleteUser());
    setOpenModal(true);
  }

  function onSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    setSearchParams({ page: '1' });
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

      <DeletePanel />

      <TableCard
        data={paginatedUsers}
        isFetching={isFetching}
        openModal={() => setOpenModal(true)}
      />

      <Pagination total={users?.length} />

      <UserModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </main>
  );
};
