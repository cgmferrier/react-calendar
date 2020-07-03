import { Reminder } from 'interfaces/reminder.interface';
import { ReminderActionType } from 'store/enums';

export const addReminder = ({ color, comment, date, time }: Reminder) => ({
  type: ReminderActionType.Add,
  payload: {
    color,
    comment,
    date,
    time
  }
});

export const removeReminder = (id: string) => ({
  type: ReminderActionType.Add,
  payload: { id }
});

export const updateReminder = (id: string, update: Reminder) => ({
  type: ReminderActionType.Add,
  payload: { id, ...update }
});
