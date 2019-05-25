import get from "lodash.get";

export const SIMULATION_STATE_KEY = "simulationState";

export const getRealSimulationStatus = state =>
  get(state, [SIMULATION_STATE_KEY, "realSimulationStatus"], "");

export const getLearningStatus = state =>
  get(state, [SIMULATION_STATE_KEY, "learningStatus"], "");

export const getGeneratedData = state =>
  get(state, [SIMULATION_STATE_KEY, "generatedData"], {});
