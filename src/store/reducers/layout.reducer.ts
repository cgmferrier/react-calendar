import { LayoutActionType } from 'shared/enums';
import { Action } from 'shared/interfaces';

export interface LayoutAction extends Action {
  panelOpen: boolean;
}

export interface State {
  panelOpen: boolean;
}

const initialState: State = {
  panelOpen: false
};

export function layoutReducer(state = initialState, { panelOpen, type }: LayoutAction): State {
  switch (type) {
    case LayoutActionType.TogglePanel:
      return {
        ...state,
        panelOpen,
      };
    default:
      return state;
  }
}
