import { createPortal } from 'react-dom';

import styles from './modal.module.scss';
import { Overlay } from '../overlay/overlay';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, title, children }: Props) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <Overlay onClose={onClose} />

      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>{' '}
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    </>,
    document.body
  );
};
