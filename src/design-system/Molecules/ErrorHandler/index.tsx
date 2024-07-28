'use client';

import React from 'react';
import { NextPageContext } from 'next';
import styles from './style.module.scss';

interface ErrorPageProps {
  statusCode: number;
  message: string;
}

const ErrorHandler = ({ statusCode, message }: ErrorPageProps) => {
  return (
    <div className={styles.container}>
      <h1>{statusCode}</h1>
      <p>{message}</p>
      <button onClick={() => window.history.back()}>Go back</button>
    </div>
  );
};

ErrorHandler.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message = res
    ? res.statusMessage
    : err
      ? err.message
      : 'An unexpected error occurred';
  return { statusCode, message };
};

export default ErrorHandler;
