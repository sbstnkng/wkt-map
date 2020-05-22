export const isString = (str) => typeof str == 'string';
export const isEmpty = (string) => !isString(string) || 0 === string.length;
export const isBlank = (string) => !isString(string) || isEmpty(string.trim());
export const getStringOrDefault = (string, defaultValue) => (isBlank(string) ? defaultValue : string);
