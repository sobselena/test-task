import { Outlet } from 'react-router';
import { Header } from '../../../components/header';
import { Footer } from '../../../components/footer';
import styles from './app-layout.module.scss';

export const AppLayout = () => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
);
