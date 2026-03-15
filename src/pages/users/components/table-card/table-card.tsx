import classNames from 'classnames';

import type { User } from '../../../../types/user';
import styles from './table-card.module.scss';
import { AppLoader } from '../../../../components/app-loader';
import { useDeleteUserMutation } from '../../../../redux/api';
import { useDispatch } from 'react-redux';
import { setUser, toggle } from '../../../../redux/reducers';
import { useSelectedSelector } from '../../../../redux/selectors/selected-selector';
import type { ChangeEvent } from 'react';

type Props = {
  data: User[] | undefined;
  isFetching: boolean;
  openModal: () => void;
};

export const TableCard = ({ data, isFetching, openModal }: Props) => {
  const [deleteUser] = useDeleteUserMutation();
  const onDelete = async (id: string | null) => {
    if (!id) return;

    await deleteUser(id);
  };
  const dispatch = useDispatch();
  const { usersIds } = useSelectedSelector();
  const onEdit = (userData: User) => {
    dispatch(setUser(userData));
    openModal();
  };
  const onCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (!data) return;
    if (checked) {
      for (const { id } of data) {
        if (!id) continue;
        if (!usersIds.includes(id)) {
          dispatch(toggle({ id }));
        }
      }
    } else {
      for (const { id } of data) {
        if (!id) continue;
        if (usersIds.includes(id)) {
          dispatch(toggle({ id }));
        }
      }
    }
  };

  return (
    <div className={styles.tableCard}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th className={styles.checkboxCell}>
              <div className={styles.cell}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={onCheckboxClick}
                  checked={usersIds.length === data?.length && data.length > 0}
                />
              </div>
            </th>
            <th>
              <div className={styles.cell}>Полное имя</div>
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
          {isFetching && (
            <tr>
              <td colSpan={6}>
                <AppLoader />
              </td>
            </tr>
          )}
          {data?.map((userData) => (
            <tr className={styles.row} key={userData.id}>
              <td className={styles.checkboxCell}>
                <div className={styles.cell}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={userData.id ? usersIds.includes(userData.id) : false}
                    onChange={() => userData.id && dispatch(toggle({ id: userData.id }))}
                  />
                </div>
              </td>

              <td>
                <div className={styles.cell}>
                  <span className={styles.userName}>{userData.fullName}</span>
                </div>
              </td>

              <td>
                <div className={styles.cell}>
                  <span className={styles.userMeta}>{userData.email}</span>
                </div>
              </td>

              <td>
                <div className={styles.cell}>
                  <span className={styles.userMeta}>{userData.jobType}</span>
                </div>
              </td>

              <td>
                <div className={styles.cell}>
                  <span className={styles.userMeta}>{userData.phone}</span>
                </div>
              </td>

              <td>
                <div className={`${styles.cell} ${styles.actionsCell}`}>
                  <button className={styles.iconButton} onClick={() => onEdit(userData)}>
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

                  <button className={styles.iconButton} onClick={() => onDelete(userData.id)}>
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
};
