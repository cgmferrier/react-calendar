import moment from 'moment';
import { ReminderActionType } from 'shared/enums/reminder-action-type.enum';
import { Action } from 'shared/interfaces';
import { Reminder } from 'shared/interfaces/reminder.interface';

export interface ReminderAction extends Action {
  reminder: Reminder;
  selectedDay?: moment.Moment;
}

export interface State {
  reminders: Reminder[];
  selectedDay?: moment.Moment;
}

const initialState: State = {
  reminders: []
}

function addReminder(state: State, { reminder }: ReminderAction): State {
  const newReminder = { ...reminder, id: Date.now() };
  return {
    reminders: [ ...state.reminders, newReminder ],
  }
}

function removeReminder(state: State, action: ReminderAction): State {
  const reminders = state.reminders;
  const reminderIndex = reminders.findIndex(r => action.reminder.id === r.id);
  if (reminderIndex !== -1) {
    return {
      reminders: [ ...reminders.splice(reminderIndex, 1) ]
    };
  }
  return state;
}

function selectDay(state: State, { selectedDay }: ReminderAction): State {
  return {
    ...state,
    selectedDay,
  };
}

function updateReminder(state: State, action: ReminderAction): State {
  const reminders = state.reminders;
  const reminderIndex = reminders.findIndex(r => r.id === action.reminder.id);
  if (reminderIndex !== -1) {
    reminders[reminderIndex] = { ...reminders[reminderIndex], ...action.reminder };
    return {
      reminders,
    }
  }
  return state;
}

export function reminderReducer(state = initialState, action: ReminderAction): State {
  switch (action.type) {
    case ReminderActionType.Add:
      return addReminder(state, action);
    case ReminderActionType.Remove:
      return removeReminder(state, action);
    case ReminderActionType.SelectDay:
      return selectDay(state, action);
    case ReminderActionType.Update:
      return updateReminder(state, action);
    default:
      return state;
  }
}
