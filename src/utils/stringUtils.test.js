import { getStringOrDefault, isBlank, isEmpty, isString } from './stringUtils';

describe('isBlank', () => {
  [
    ['Awesome text', false],
    ['', true],
    [' ', true],
    ['  ', true],
    [undefined, true],
    [null, true],
  ].forEach(([value, expected]) => {
    test(`should return '${expected}' for value '${value}'`, () => {
      const result = isBlank(value);

      expect(result).toEqual(expected);
    });
  });
});

describe('isEmpty', () => {
  [
    ['Awesome text', false],
    ['', true],
    [' ', false],
    ['  ', false],
    [undefined, true],
    [null, true],
  ].forEach(([value, expected]) => {
    test(`should return '${expected}' for value '${value}'`, () => {
      const result = isEmpty(value);

      expect(result).toEqual(expected);
    });
  });
});

describe('isString', () => {
  [
    ['Awesome text', true],
    ['', true],
    [' ', true],
    ['  ', true],
    ['1', true],
    [1, false],
    [1.5, false],
    [{}, false],
    [undefined, false],
    [null, false],
  ].forEach(([value, expected]) => {
    test(`should return '${expected}' for value '${value}'`, () => {
      const result = isString(value);

      expect(result).toEqual(expected);
    });
  });
});

describe('getStringOrDefault', () => {
  [
    ['Some awesome text', '', 'Some awesome text'],
    ['', undefined, undefined],
    [' ', '', ''],
    ['  ', null, null],
  ].forEach(([value, defaultValue, expected]) => {
    test(`should return '${expected}' for value '${value}' with default value '${defaultValue}'`, () => {
      const result = getStringOrDefault(value, defaultValue);

      expect(result).toEqual(expected);
    });
  });
});
