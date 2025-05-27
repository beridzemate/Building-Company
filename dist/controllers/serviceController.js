"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServices = void 0;
const languageSelector_1 = require("../utils/languageSelector");
const services_1 = require("../data/services");
const getServices = (req, res) => {
    // Получаем язык из query-параметра, по умолчанию — 'en'
    const lang = req.query.lang || 'en';
    // Выбираем данные на нужном языке
    const data = (0, languageSelector_1.selectLanguage)(services_1.services, lang);
    // Отправляем клиенту
    res.json({ lang, services: data });
};
exports.getServices = getServices;
