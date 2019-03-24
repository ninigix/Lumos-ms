import get from "lodash.get";

export const SIMULATION_STATE_KEY = "simulationState";

export const getSimulationStatus = state => get(state, [SIMULATION_STATE_KEY, "status"]);
