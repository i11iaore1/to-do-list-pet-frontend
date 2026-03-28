import {
  today,
  getLocalTimeZone,
  CalendarDate,
  type DateValue,
  parseZonedDateTime,
} from "@internationalized/date";
import type { ISO8601String } from "../types/date";

export const TODAY_DATE = new Intl.DateTimeFormat("en-CA").format(new Date());

export const DateToDateValue = (date: Date): DateValue => {
  return new CalendarDate(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );
};

export const DateOrNullToDateValueOrNull = (
  dateOrNull: Date | null,
): DateValue | null => {
  return dateOrNull === null ? null : DateToDateValue(dateOrNull);
};

export const ISOOrNullToDateOrNull = (
  ISOOrNull: ISO8601String | null,
): Date | null => {
  return ISOOrNull === null ? null : new Date(ISOOrNull);
};

export const ISOOrNullToDateValueOrNull = (
  ISOOrNull: ISO8601String | null,
): DateValue | null => {
  return ISOOrNull === null ? null : parseZonedDateTime(ISOOrNull);
};

export const getTodayDateValue = () => {
  return today(getLocalTimeZone());
};
