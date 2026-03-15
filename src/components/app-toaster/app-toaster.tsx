import { Toaster } from 'react-hot-toast';
import { AUTOCLOSE_NOTIFICATION_DELAY } from '../../constants/toaster';

export const AppToaster = () => (
  <Toaster
    position="top-center"
    gutter={12}
    containerStyle={{
      margin: '0.8rem',
      zIndex: 101,
    }}
    toastOptions={{
      duration: AUTOCLOSE_NOTIFICATION_DELAY,

      style: {
        backgroundColor: 'var(--color-bg-elevated)',
        border: '1px solid var(--color-line)',
        color: 'var(--color-text)',

        fontFamily: 'var(--font-primary)',
        fontSize: '1.4rem',
        fontWeight: 500,

        borderRadius: '1.2rem',
        padding: '1.2rem 1.6rem',

        boxShadow: '0 1.2rem 3rem rgba(0,0,0,0.25)',

        backdropFilter: 'blur(8px)',

        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',

        maxWidth: '42rem',
      },
    }}
  />
);
