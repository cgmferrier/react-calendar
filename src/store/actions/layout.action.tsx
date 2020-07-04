import { LayoutActionType } from 'shared/enums';

export const togglePanel = (toggle: boolean) => ({
  type: LayoutActionType.TogglePanel,
  panelOpen: toggle,
});
