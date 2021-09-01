import { getHours, setHours, setMinutes, setSeconds } from 'date-fns';
import { format } from 'date-fns';

export function formatHoursAndMinutes(date: Date): Date {
  return setSeconds(setMinutes(setHours(date, 0), 0), 0);
}

export function getFormatedHoursAndMinutes(date: Date): String {
  return `à ${getHours(date)}h00`;
}

export function getBasicDate(date?: Date) {
  return date ? format(new Date(date), 'dd.MM.yyyy') : format(new Date(), 'dd.MM.yyyy');
}
