import { LayoutActionType } from 'store/enums';
import { Action, LayoutState } from 'store/interfaces';

const initialState: LayoutState = {
  panelOpen: false
};

export function layoutReducer(state = initialState, action: Action<any>): LayoutState {
  switch (action.type) {
    case LayoutActionType.TogglePanel:
      return {
        ...state,
        panelOpen: action.payload.panelOpen
      };
    default:
      return state;
  }
}
