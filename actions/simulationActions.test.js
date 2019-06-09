import * as actions from "./simulationActions";

describe("GET_REAL_SIMULATION_STATUS actions", () => {
  it("should create an action to request", () => {
    const expectedAction = {
      type: "GET_REAL_SIMULATION_STATUS_REQUEST",
      params: { id: 123 }
    };
    expect(actions.getRealSimulationState.request({ id: 123 })).toEqual(
      expectedAction
    );
  });

  it("should create an action when request success", () => {
    const expectedAction = {
      type: "GET_REAL_SIMULATION_STATUS_SUCCESS"
    };
    expect(actions.getRealSimulationState.success()).toEqual(expectedAction);
  });

  it("should create an action when request failed", () => {
    const expectedAction = {
      type: "GET_REAL_SIMULATION_STATUS_FAILURE"
    };
    expect(actions.getRealSimulationState.failure()).toEqual(expectedAction);
  });
});

describe("POST_LEARN_DATA actions", () => {
  it("should create an action to request", () => {
    const expectedAction = {
      type: "POST_LEARN_DATA_REQUEST",
      params: { id: 123 }
    };
    expect(actions.postLearnData.request({ id: 123 })).toEqual(expectedAction);
  });

  it("should create an action when request success", () => {
    const expectedAction = {
      type: "POST_LEARN_DATA_SUCCESS"
    };
    expect(actions.postLearnData.success()).toEqual(expectedAction);
  });

  it("should create an action when request failed", () => {
    const expectedAction = {
      type: "POST_LEARN_DATA_FAILURE"
    };
    expect(actions.postLearnData.failure()).toEqual(expectedAction);
  });
});

describe("POST_TOGGLE_SIMULATION actions", () => {
  it("should create an action to request", () => {
    const expectedAction = {
      type: "POST_TOGGLE_SIMULATION_REQUEST",
      params: { id: 123 }
    };
    expect(actions.postToggleSimulation.request({ id: 123 })).toEqual(
      expectedAction
    );
  });

  it("should create an action when request success", () => {
    const expectedAction = {
      type: "POST_TOGGLE_SIMULATION_SUCCESS"
    };
    expect(actions.postToggleSimulation.success()).toEqual(expectedAction);
  });

  it("should create an action when request failed", () => {
    const expectedAction = {
      type: "POST_TOGGLE_SIMULATION_FAILURE"
    };
    expect(actions.postToggleSimulation.failure()).toEqual(expectedAction);
  });
});
