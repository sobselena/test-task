import { useMemo, type ChangeEvent } from 'react';
import type { User } from '../../../../types/user';
import { getJobTitles } from '../../utils/job-types';

import styles from './job-selector.module.scss';
import { useDispatch } from 'react-redux';
import { setJobType } from '../../../../redux/reducers';
import { useJobTypeSelector } from '../../../../redux/selectors';

type Props = {
  data: User[] | undefined;
};

export const JobSelector = ({ data }: Props) => {
  const dispatch = useDispatch();
  const { jobType } = useJobTypeSelector();
  const jobTypeOptions = useMemo(() => {
    if (!data) return [];
    return [...getJobTitles(data)];
  }, [data]);

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const optionValue = e.target.value;
    dispatch(setJobType({ jobType: optionValue }));
  };

  return (
    <select className={styles.filter} onChange={onSelect} value={jobType}>
      <option value="All">All</option>

      {jobTypeOptions.map((option) => (
        <option value={option} key={option}>
          {option[0].toUpperCase() + option.slice(1).toLowerCase()}
        </option>
      ))}
    </select>
  );
};
