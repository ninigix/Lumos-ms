import {
  getSwitchesInitialStateStatus,
  getInitialLightsOn
} from "./lightSelector";

describe("Light Selectors", () => {
  const mockParameters = {
    lightState: {
      switchesInitialStateStatus: [{ 1: "ON" }],
      initialLightsOn: [1]
    }
  };

  it("should get value from getSwitchesInitialStateStatus", () => {
    const selected = getSwitchesInitialStateStatus(mockParameters);
    expect(selected).toEqual([{ 1: "ON" }]);
  });

  it("should value from getToken", () => {
    const selected = getInitialLightsOn(mockParameters);
    expect(selected).toEqual([1]);
  });
});
