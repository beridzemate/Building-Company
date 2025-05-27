import { Request, Response } from 'express';
import { selectLanguage } from '../utils/languageSelector';
import { services } from '../data/services';

export const getServices = (req: Request, res: Response): void => {
  // Получаем язык из query-параметра, по умолчанию — 'en'
  const lang = (req.query.lang as string) || 'en';
  // Выбираем данные на нужном языке
  const data = selectLanguage(services, lang);
  // Отправляем клиенту
  res.json({ lang, services: data });
};
