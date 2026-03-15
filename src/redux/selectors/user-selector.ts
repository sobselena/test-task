import { useAppSelector } from '../hooks';

export const useUserSelector = () => useAppSelector((state) => state.user);
