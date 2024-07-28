// components/SkeletonTable.tsx
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './style.module.scss';

const SkeletonTable: React.FC = () => {
  const skeletonRows = Array(2).fill(null); // Create an array with 3 elements

  return (
    <SkeletonTheme>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <Skeleton height={30} />
            </th>
            <th>
              <Skeleton height={30} />
            </th>
            <th>
              <Skeleton height={30} />
            </th>
            <th>
              <Skeleton height={30} />
            </th>
            <th>
              <Skeleton height={30} />
            </th>
            <th>
              <Skeleton height={30} />
            </th>
          </tr>
        </thead>
        <tbody>
          {skeletonRows.map((_, index) => (
            <tr key={index}>
              <td>
                <Skeleton height={40} />
              </td>
              <td>
                <Skeleton height={30} />
              </td>
              <td>
                <Skeleton height={30} />
              </td>
              <td>
                <Skeleton height={30} />
              </td>
              <td>
                <Skeleton height={30} />
              </td>

              <td>
                <Skeleton height={30} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SkeletonTheme>
  );
};

export default SkeletonTable;
