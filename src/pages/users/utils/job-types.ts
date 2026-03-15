import type { User } from '../../../types/user';

export const getJobTitles = (data: User[]) => {
  const result = new Set<string>();

  for (const { jobType } of data) {
    result.add(jobType);
  }

  return Array.from(result);
};
