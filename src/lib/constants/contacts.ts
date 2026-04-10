
export const PHONE_NUMBER: string = "+7 (495) 675-89-99";
// Очищаем телефон от лишних символов для ссылки tel:
export const PHONE_NUMBER_CLEAN: string = PHONE_NUMBER.replace(/[^\d+]/g, '');

