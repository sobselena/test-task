import { useAppSelector } from '../hooks';

export const useJobTypeSelector = () => useAppSelector((state) => state.jobType);
