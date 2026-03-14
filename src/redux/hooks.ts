import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from './configure-store';
import type { RootState } from './configure-store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
