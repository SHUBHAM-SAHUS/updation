class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(
    message: string,
    statusCode: number,
    isOperational: boolean = true,
  ) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

const handleError = (err: AppError, res: any) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

const handleException = (fn: any) => {
  return (req: any, res: any, next: any) => {
    fn(req, res, next).catch((err: any) => next(err));
  };
};

export { AppError, handleError, handleException };
