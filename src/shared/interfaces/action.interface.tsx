import { LayoutActionType, ReminderActionType } from 'shared/enums';

export interface Action {
  type: LayoutActionType | ReminderActionType;
}
