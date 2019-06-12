import { getStatisticStatus, getStatistic } from "./statisticSelector";

describe("Statistic Selectors", () => {
  const mockParameters = {
    statisticState: {
      status: "SUCCESS",
        statistic: {
        1: {
          light_changes: 1642,
          time_on: "2 days 03:45:14",
          most_popular_hours_changes: [16],
          kwh: { price: 0.12387833333333335, kwh: 0.22523333333333334 },
          most_popular_days_changes: [197, 195, 173, 205, 155, 171, 546],
          most_popular_days: [3426.733333333334],
          most_popular_hours: [10],
          price: { price: 0.12387833333333335, kwh: 0.22523333333333334 },
          bulb_consumption: 13.979305555555557
        }
      }
    }
  };

  it("should get value from getStatisticStatus", () => {
    const selected = getStatisticStatus(mockParameters);
    expect(selected).toEqual("SUCCESS");
  });

  it("should value from getStatistic", () => {
    const selected = getStatistic(mockParameters);
    expect(selected).toEqual({
      1: {
        light_changes: 1642,
        time_on: "2 days 03:45:14",
        most_popular_hours_changes: [16],
        kwh: { price: 0.12387833333333335, kwh: 0.22523333333333334 },
        most_popular_days_changes: [197, 195, 173, 205, 155, 171, 546],
        most_popular_days: [3426.733333333334],
        most_popular_hours: [10],
        price: { price: 0.12387833333333335, kwh: 0.22523333333333334 },
        bulb_consumption: 13.979305555555557
      }
    });
  });
});
