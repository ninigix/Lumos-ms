import { combineReducers } from "redux";

import lightReducer from "./lightReducer";
import { LIGHT_STATE_KEY } from "../selectors/lightSelector";
import { SIMULATION_STATE_KEY } from "../selectors/simulationSelector";
import simulationReducer from "./simulationReducer";
import { STATISTIC_STATE_KEY } from "../selectors/statisticSelector";
import statisticReducer from "./statisticReducer";

const rootReducer = combineReducers({
  [LIGHT_STATE_KEY]: lightReducer,
  [SIMULATION_STATE_KEY]: simulationReducer,
  [STATISTIC_STATE_KEY]: statisticReducer
});

export default rootReducer;
