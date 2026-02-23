const isProd = process.env.NODE_ENV === 'production';

// Экспортируем константу BASE
export const BASE = isProd ? '/akvahold' : '';

// Экспортируем саму функцию
export const asset = (path: string) => {
  if (!path) return '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${cleanPath}`;
};
