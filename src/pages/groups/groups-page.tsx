import { useNavigate } from 'react-router';
import { useJobTypeSelector } from '../../redux/selectors';
import styles from './groups-page.module.scss';
import { Paths } from '../../constants';
import { useDispatch } from 'react-redux';
import { setJobType } from '../../redux/reducers';

export const GroupsPage = () => {
  const jobTypes = useJobTypeSelector();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function onWatch(groupName: string) {
    dispatch(setJobType({ jobType: groupName }));
    await navigate(Paths.USERS);
  }

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Группы пользователей</h1>

        <p className={styles.subtitle}>Управление департаментами и распределение прав доступа.</p>
      </header>

      <div className={styles.grid}>
        {jobTypes.allTypes.map((groupName) => (
          <div key={groupName} className={styles.card}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 00-3-3.87" strokeWidth="2" />
                <path d="M7 21v-2a4 4 0 013-3.87" strokeWidth="2" />
                <circle cx="12" cy="7" r="4" strokeWidth="2" />
              </svg>
            </div>

            <h3
              className={styles.cardTitle}
            >{`${groupName.at(0)?.toUpperCase()}${groupName.slice(1).toLowerCase()}`}</h3>

            <button className={styles.link} onClick={() => onWatch(groupName)}>
              Посмотреть →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
