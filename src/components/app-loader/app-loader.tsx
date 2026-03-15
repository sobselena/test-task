import { ThreeDots } from 'react-loader-spinner';
import styles from './app-loader.module.scss';

export const AppLoader = () => (
  <div className={styles.loaderWrapper}>
    <ThreeDots
      height="40"
      width="70"
      radius="9"
      color="#6366f1"
      ariaLabel="three-dots-loading"
      visible
    />
  </div>
);
