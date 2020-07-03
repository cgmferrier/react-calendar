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

export function layoutReducer(state = initialState, action: LayoutAction): State {
  switch (action.type) {
    case LayoutActionType.TogglePanel:
      return {
        ...state,
        panelOpen: action.panelOpen
      };
    default:
      return state;
  }
}
