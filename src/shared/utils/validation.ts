import { MIN_PASSWORD_LENGTH } from '../constants/forms';

export const isNotEmpty = (value: string) => value !== '';

export const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isPasswordLengthValid = (value: string) => value.length >= MIN_PASSWORD_LENGTH;

export const isMatchField = (fieldName: string, isEmptyAllowed: boolean = false) =>
  (value: string, values: Record<string, string>) => value === values[fieldName] && (isEmptyAllowed || isNotEmpty(value));
