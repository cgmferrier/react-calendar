import { ReminderActionType } from 'shared/enums';
import { Reminder } from 'shared/interfaces/reminder.interface';

export const addReminder = ({ color, comment, date, time }: Reminder) => ({
  type: ReminderActionType.Add,
  color,
  comment,
  date,
  time
});

export const removeReminder = (id: string) => ({
  type: ReminderActionType.Add,
  id
});

export const updateReminder = (id: string, update: Reminder) => ({
  type: ReminderActionType.Add,
  id,
  ...update
});
