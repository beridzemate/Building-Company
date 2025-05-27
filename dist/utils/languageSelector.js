"use strict";
// src/utils/languageSelector.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectLanguage = void 0;
/**
 * Берёт объект вида { en: [...], ru: [...], ka: [...] }
 * и возвращает нужный массив по lang или дефолтный en.
 */
const selectLanguage = (data, lang) => {
    return data[lang] ?? data['en'];
};
exports.selectLanguage = selectLanguage;
