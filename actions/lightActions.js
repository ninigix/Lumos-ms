import { createObject, createAction } from "./helpers";

export const GET_SWITCHES_INITIAL_STATE = createObject(
  "GET_SWITCHES_INITIAL_STATE_"
);
export const getSwitchesInitialState = createAction(GET_SWITCHES_INITIAL_STATE);

export const SWITCH_LIGHTS = createObject("SWITCH_LIGHTS_");
export const switchLights = createAction(SWITCH_LIGHTS);
