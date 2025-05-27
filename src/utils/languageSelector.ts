// src/utils/languageSelector.ts

/**
 * Берёт объект вида { en: [...], ru: [...], ka: [...] }
 * и возвращает нужный массив по lang или дефолтный en.
 */
export const selectLanguage = <T>(
    data: Record<string, T[]>,
    lang: string
  ): T[] => {
    return data[lang] ?? data['en'];
  };
  