import { useSelectedSelector } from '../../../../redux/selectors/selected-selector';
import styles from './delete-panel.module.scss';

export const DeletePanel = () => {
  const { usersIds } = useSelectedSelector();
  const count = usersIds.length;
  if (count === 0) return null;
  return (
    <div className={styles.bar}>
      <div className={styles.info}>
        <span className={styles.badge}>{count}</span>
        <span className={styles.text}>сотрудников выбрано</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.deleteButton}>Удалить выбранных</button>

        <button className={styles.cancelButton}>Отмена</button>
      </div>
    </div>
  );
};
