import { Reminder } from 'interfaces/reminder.interface';
import { ReminderActionType } from 'store/enums/reminder-action-type.enum';
import { Action } from 'store/interfaces/action.interface';
import { ReminderState } from 'store/interfaces/reminder-state.interface';

const initialState: ReminderState = {
  reminders: []
}

function addReminder(state: ReminderState, action: Action<Reminder>): ReminderState {
  const reminder = { ...action.payload, id: Date.now() };
  return {
    reminders: [ ...state.reminders, reminder ],
  }
}

function removeReminder(state: ReminderState, action: Action<Reminder>): ReminderState {
  const reminders = state.reminders;
  const reminderIndex = reminders.findIndex(r => action.payload.id === r.id);
  if (reminderIndex !== -1) {
    return {
      reminders: [ ...reminders.splice(reminderIndex, 1) ]
    };
  }
  return state;
}

function updateReminder(state: ReminderState, action: Action<Reminder>): ReminderState {
  const reminders = state.reminders;
  const reminderIndex = reminders.findIndex(r => r.id === action.payload.id);
  if (reminderIndex !== -1) {
    reminders[reminderIndex] = { ...reminders[reminderIndex], ...action.payload };
    return {
      reminders,
    }
  }
  return state;
}

export function reminderReducer(state = initialState, action: Action<Reminder>): ReminderState {
  switch (action.type) {
    case ReminderActionType.Add:
      return addReminder(state, action);
    case ReminderActionType.Remove:
      return removeReminder(state, action);
    case ReminderActionType.Update:
      return updateReminder(state, action);
    default:
      return state;
  }
}
