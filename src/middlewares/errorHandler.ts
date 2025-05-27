import { Request, Response, NextFunction } from 'express';

/**
 * Универсальный обработчик ошибок.
 * Надо подключить в app.ts **после** всех роутов:
 * app.use(errorHandler);
 */
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('❌ Error:', err);
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: message });
};
