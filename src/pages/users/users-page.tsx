import { useGetAllUsersQuery } from '../../redux/api';
import { TableCard } from './components/table-card';
import styles from './users-page.module.scss';

export const UsersPage = () => {
  const { data, isFetching } = useGetAllUsersQuery();

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

        <select className={styles.filter}>
          <option value="all">Все группы</option>
          <option value="accounting">Менеджер</option>
          <option value="accounting">Teamlead</option>
          <option value="accounting">Backend</option>
          <option value="it">Frontend</option>
          <option value="accounting">Дизайнер</option>
        </select>

        <button className={styles.addButton}>
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          Добавить
        </button>
      </div>

      <TableCard data={data} isFetching={isFetching} />
    </main>
  );
};
