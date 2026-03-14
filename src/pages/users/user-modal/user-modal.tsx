import { Modal } from '../../../components/modal';
import styles from './user-modal.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};

export const UserModal = ({ isOpen, onClose, title = 'Сотрудник' }: Props) => (
  <Modal isOpen={isOpen} onClose={onClose} title={title}>
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="fullName">Полное имя</label>
        <input type="text" placeholder="Иван Иванов" id="fullName" />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email@example.com" id="email" />
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Телефон</label>
        <input type="tel" placeholder="+7 900 000 00 00" id="phone" />
      </div>

      <div className={styles.field}>
        <label htmlFor="jobType">Должность</label>
        <input type="text" placeholder="Frontend разработчик" id="jobType" />
      </div>

      <div className={styles.actions}>
        <button type="button" onClick={onClose} className={styles.cancel}>
          Отмена
        </button>

        <button type="submit" className={styles.submit}>
          Сохранить
        </button>
      </div>
    </form>
  </Modal>
);
