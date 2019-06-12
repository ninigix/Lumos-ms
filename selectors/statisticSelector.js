import get from "lodash.get";

export const STATISTIC_STATE_KEY = "statisticState";

export const getStatisticStatus = state =>
  get(state, [STATISTIC_STATE_KEY, "status"]);

export const getStatistic = state =>
  get(state, [STATISTIC_STATE_KEY, "statistic"]);
