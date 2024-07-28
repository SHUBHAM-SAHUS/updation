'use client';
import React, { memo } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './style.module.scss';

interface PropsTypes {
  pageCount: number | any;
  handlePageClick?: (selectedItem: { selected: number }) => void;
  totalcount?: number;
  nextLabel?: string;
  previousLabel?: string;
}

const PaginationComponent: React.FC<PropsTypes> = ({
  pageCount,
  handlePageClick,
  totalcount,
  nextLabel = 'Next',
  previousLabel = 'Previous',
}) => {
  return (
    <div className={styles.pagination_wrapper}>
      <ReactPaginate
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={`${styles.pagination} ${styles.paginationList}`}
        previousLinkClassName={styles.paginationLink}
        nextLinkClassName={styles.paginationLink}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
      />
    </div>
  );
};

export default memo(PaginationComponent);
