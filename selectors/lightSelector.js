import get from "lodash.get";

export const LIGHT_STATE_KEY = "lightState";

export const getAvailableLights = state =>
  get(state, [LIGHT_STATE_KEY, "availableLightSwitches"]);

export const getStatus = state => get(state, [LIGHT_STATE_KEY, "status"]);
