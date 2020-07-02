import { combineReducers } from 'redux';
import { reminderReducer } from 'store/reducers/reminder.reducer';

export const appReducer = combineReducers({
  reminders: reminderReducer,
})