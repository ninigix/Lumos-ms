import { createObject, createAction } from "./helpers";

export const GET_REAL_SIMULATION_STATUS = createObject(
  "GET_SIMULATION_STATUS_"
);
export const getRealSimulationState = createAction(GET_REAL_SIMULATION_STATUS);

export const POST_LEARN_DATA = createObject("POST_LEARN_DATA_");
export const postLearnData = createAction(POST_LEARN_DATA);

export const POST_TOGGLE_SIMULATION = createObject("POST_TOGGLE_SIMULATION_");
export const postToggleSimulation = createAction(POST_TOGGLE_SIMULATION);
