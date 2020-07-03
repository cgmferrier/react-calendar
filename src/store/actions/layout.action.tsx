import { LayoutActionType } from 'store/enums';

export const togglePanel = (toggle: boolean) => ({
  type: LayoutActionType.TogglePanel,
  payload: { panelOpen: toggle }
});
