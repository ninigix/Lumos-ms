import { createObject, createAction } from "./helpers";

export const GET_LIGHT_SWITCHES = createObject("GET_LIGHT_SWITCHES_");
export const getLightSwitches = createAction(GET_LIGHT_SWITCHES);

export const SWITCH_LIGHTS = createObject("SWITCH_LIGHTS_");
export const switchLights = createAction(SWITCH_LIGHTS);
