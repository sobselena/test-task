import styles from './overlay.module.scss';

type Props = {
  onClose: () => void;
};

export const Overlay = ({ onClose }: Props) => <div className={styles.overlay} onClick={onClose} />;
