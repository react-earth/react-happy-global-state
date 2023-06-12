import { createGlobalState } from 'react-happy-global-state';

type GlobalState = {
  count: number;
};

const DEFAULT_GLOBAL_STATE: GlobalState = {
  count: 0,
};

export const { GlobalStateProvider, useGlobalState } = createGlobalState({
  defaultState: DEFAULT_GLOBAL_STATE,
});
