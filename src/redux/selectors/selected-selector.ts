import { useAppSelector } from '../hooks';

export const useSelectedSelector = () => useAppSelector((state) => state.selected);
