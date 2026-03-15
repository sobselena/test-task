import { RouterProvider } from 'react-router';
import { router } from './router/router';
import { AppToaster } from '../components/app-toaster';

export const App = () => (
  <>
    <RouterProvider router={router} />
    <AppToaster />
  </>
);
