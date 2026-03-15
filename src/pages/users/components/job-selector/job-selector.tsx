import type { ChangeEvent } from 'react';
import type { User } from '../../../../types/user';
import { getJobTitle } from '../../utils/job-types';

import styles from './job-selector.module.scss';
import { useDispatch } from 'react-redux';
import { setJobType } from '../../../../redux/reducers';

type Props = {
  data: User[] | undefined;
};

export const JobSelector = ({ data }: Props) => {
  const dispatch = useDispatch();
  function onSelect(e: ChangeEvent<HTMLSelectElement>) {
    const optionValue = e.target.value;
    dispatch(setJobType({ jobType: optionValue }));
  }
  return (
    <select className={styles.filter} onChange={onSelect}>
      <option value="all">All</option>
      {data &&
        getJobTitle(data).map((option) => (
          <option value={option.toLowerCase()} key={option}>
            {`${option[0].toUpperCase()}${option.slice(1).toLowerCase()}`}
          </option>
        ))}
    </select>
  );
};
