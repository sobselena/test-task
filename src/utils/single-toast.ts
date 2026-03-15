import toast from 'react-hot-toast';

export const singleToast = (text: string, type: 'success' | 'error' = 'success') => {
  toast.dismiss();
  toast[type](text);
};
