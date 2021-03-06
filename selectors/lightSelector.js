import get from "lodash.get";

export const LIGHT_STATE_KEY = "lightState";

export const getSwitchesInitialStateStatus = state =>
  get(state, [LIGHT_STATE_KEY, "switchesInitialStateStatus"]);

export const getInitialLightsOn = state =>
  get(state, [LIGHT_STATE_KEY, "initialLightsOn"]);
