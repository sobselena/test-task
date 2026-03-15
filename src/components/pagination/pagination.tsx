import { useSearchParams } from 'react-router';
import styles from './pagination.module.scss';
import { USERS_PAGINATION } from '../../constants/pagination';
import { useEffect } from 'react';

type Props = {
  total?: number;
};

export const Pagination = ({ total = 0 }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = Math.ceil(total / USERS_PAGINATION) || 1;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    setSearchParams(params);
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      const params = new URLSearchParams(searchParams);
      params.set('page', String(totalPages));
      setSearchParams(params);
    }
  }, [setSearchParams, currentPage, totalPages, searchParams]);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        Prev
      </button>

      <span className={styles.info}>
        {currentPage} / {totalPages}
      </span>

      <button
        className={styles.button}
        disabled={currentPage === totalPages}
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};
