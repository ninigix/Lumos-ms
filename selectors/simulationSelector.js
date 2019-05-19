import get from "lodash.get";

export const SIMULATION_STATE_KEY = "simulationState";

export const getSimulationStatus = state =>
  get(state, [SIMULATION_STATE_KEY, "simulationStatus"], "");

export const getLearningStatus = state =>
  get(state, [SIMULATION_STATE_KEY, "learningStatus"], "");

export const getGeneratedData = state =>
  get(state, [SIMULATION_STATE_KEY, "generatedData"], {});
