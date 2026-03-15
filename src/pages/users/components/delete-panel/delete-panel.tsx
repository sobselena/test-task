import { useDispatch } from 'react-redux';
import { useSelectedSelector } from '../../../../redux/selectors/selected-selector';
import styles from './delete-panel.module.scss';
import { deleteAllIds } from '../../../../redux/reducers';
import { useDeleteUserMutation } from '../../../../redux/api';

export const DeletePanel = () => {
  const { usersIds } = useSelectedSelector();
  const dispatch = useDispatch();
  const [deleteUser] = useDeleteUserMutation();
  const count = usersIds.length;
  if (count === 0) return null;

  function onCancel() {
    dispatch(deleteAllIds());
  }
  async function onDelete() {
    await Promise.all([...usersIds].map((id) => deleteUser(id).unwrap()));
    dispatch(deleteAllIds());
  }

  return (
    <div className={styles.bar}>
      <div className={styles.info}>
        <span className={styles.badge}>{count}</span>
        <span className={styles.text}>сотрудников выбрано</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.deleteButton} onClick={onDelete}>
          Удалить выбранных
        </button>

        <button className={styles.cancelButton} onClick={onCancel}>
          Отмена
        </button>
      </div>
    </div>
  );
};
