import moment from 'moment';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import * as fromLayout from 'store/reducers/layout.reducer';
import * as fromReminders from 'store/reducers/reminder.reducer';

export interface State {
  layout: fromLayout.State,
  reminders: fromReminders.State,
}

export const appReducer = combineReducers({
  layout: fromLayout.layoutReducer,
  reminders: fromReminders.reminderReducer,
});

/******************************
 * Layout *
 ******************************/
const getLayoutState = (state: State) => state.layout;

export const isPanelOpen = createSelector(getLayoutState, (layout: fromLayout.State) => layout.panelOpen);

/******************************
 * Reminder *
 ******************************/
const getReminderState = (state: State) => state.reminders;

export const getReminders = createSelector(getReminderState, (reminders: fromReminders.State) => reminders.reminders);
export const getRemindersForSelectedDay = createSelector(getReminderState, (reminders: fromReminders.State) => {
  return reminders.reminders.filter(reminder => moment(reminder.date, 'DD/MM/YYYY').isSame(moment(reminders.selectedDay)));
});

