import isEmail from "validator/lib/isEmail";

export const validateEmail = (value: string): boolean => {
  return isEmail(value);
};
