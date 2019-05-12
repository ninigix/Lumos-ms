import { createObject, createAction } from "./helpers";

export const GET_SIMULATION_STATUS = createObject("GET_SIMULATION_STATUS_");
export const getSimulationState = createAction(GET_SIMULATION_STATUS);

export const POST_LEARN_DATA = createObject("POST_LEARN_DATA_");
export const postLearnData = createAction(POST_LEARN_DATA);

export const POST_START_SIMULATION = createObject("POST_START_SIMULATION_");
export const postStartSimulation = createAction(POST_START_SIMULATION);
