import { createObject, createAction } from "./helpers";

export const GET_SIMULATION_STATUS = createObject('GET_SIMULATION_STATUS_');
export const getSimulationState = createAction(GET_SIMULATION_STATUS);
