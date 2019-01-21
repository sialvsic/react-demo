import startsWith from 'lodash/startsWith';
import clamp from 'lodash/clamp';

const IS_CLIENT = typeof window != 'undefined';

const ensureClientOnly = () => {
  return IS_CLIENT;
};

export const parseCurrencyToNumber = (value) => {
  if (!value) {
    return null;
  }

  let negative = false;
  if (startsWith(value, '-')) {
    negative = true;
  }

  let cleanedValue = value.replace(/[^0-9]/g, '');

  if (!cleanedValue) {
    return null;
  }

  if (negative) {
    cleanedValue = '-' + cleanedValue;
  }

  return parseFloat(cleanedValue);
};

export const isMobileDevice = () => {
  return (
    ensureClientOnly() &&
    (typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1)
  );
};

export const normaliseMaxNumber = (amount) => (
  value,
  previousValue
) => {
  if (!value) {
    return value;
  }

  if (isFinite(Number(value)) && !isAllWhitespace(value.toString())) {
    return value <= amount ? value : amount;
  } else {
    return previousValue;
  }
};

const isAllWhitespace = (string) => {
  return /^\s+$/.test(string);
};

export const normaliseInRange = (value, maxNumber, minNumber) =>
  clamp(parseInt(value), minNumber, maxNumber) || minNumber;

export const addSymbol = (
  string,
  sign = '%'
) => {
  string = string + sign;
  return string;
};

export const isValidDecimalNumber = (value, decimalLength) => {
  const reg = new RegExp(`^((\\d|[1-9]\\d)(\\.\\d{0,${ decimalLength }})?)\$`);
  return reg.test(value);
};

export const formatCurrency = (value) => {
  if (value === '' || value == null || !isFinite(value)) {
    value = 0;
  }

  return formatValidCurrency(value);
};

const formatValidCurrency = value => {
  if (value < 0) {
    value = Math.abs(value);

    return `-$${ splitByThousand(Math.round(parseFloat(value))) }`;
  }

  return `$${ splitByThousand(Math.round(parseFloat(value))) }`;
};

const splitByThousand = value => {
  if (!isFinite(value)) {
    return '';
  }

  if (value < 1000) {
    return '' + value;
  }

  let result = value % 1000;
  let formatted = ('000' + value).slice(-3);

  let remainderToSplit = (value - result) / 1000;

  return `${ splitByThousand(remainderToSplit) },${ formatted }`;
};
