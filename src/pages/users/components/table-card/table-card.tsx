import classNames from 'classnames';

import type { User } from '../../../../types/user';
import styles from './table-card.module.scss';
type Props = {
  data: User[] | undefined;
  isFetching: boolean;
};

export const TableCard = ({ data, isFetching }: Props) => (
  <div className={styles.tableCard}>
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr>
          <th className={styles.checkboxCell}>
            <div className={styles.cell}>
              <input type="checkbox" className={styles.checkbox} />
            </div>
          </th>
          <th>
            <div className={styles.cell}>Сотрудники</div>
          </th>
          <th>
            <div className={styles.cell}>Email</div>
          </th>

          <th>
            <div className={styles.cell}>Группа</div>
          </th>

          <th>
            <div className={styles.cell}>Телефон</div>
          </th>

          <th>
            <div className={classNames(styles.cell, styles.actionsCell)}></div>
          </th>
        </tr>
      </thead>

      <tbody>
        {isFetching && <p>Loading...</p>}
        {data?.map((userData) => (
          <tr className={styles.row} key={userData.id}>
            <td className={styles.checkboxCell}>
              <div className={styles.cell}>
                <input type="checkbox" className={styles.checkbox} />
              </div>
            </td>

            <td>
              <div className={styles.cell}>
                <span className={styles.userName}>{userData.name}</span>
              </div>
            </td>

            <td>
              <div className={styles.cell}>
                <span className={styles.userMeta}>{userData.email}</span>
              </div>
            </td>

            <td>
              <div className={styles.cell}>
                <span className={styles.userMeta}>{userData.group}</span>
              </div>
            </td>

            <td>
              <div className={styles.cell}>
                <span className={styles.userMeta}>{userData.phone}</span>
              </div>
            </td>

            <td>
              <div className={`${styles.cell} ${styles.actionsCell}`}>
                <button className={styles.iconButton}>
                  <svg
                    className={styles.smallIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      strokeWidth="2"
                    />
                  </svg>
                </button>

                <button className={styles.iconButton}>
                  <svg
                    className={styles.smallIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 6l12 12M18 6L6 18" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
