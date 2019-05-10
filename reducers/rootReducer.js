import { combineReducers } from "redux";

import lightReducer from "./lightReducer";
import { LIGHT_STATE_KEY } from "../selectors/lightSelector";
import { SIMULATION_STATE_KEY } from "../selectors/simulationSelector";
import simulationReducer from "./simulationReducer";

const rootReducer = combineReducers({
  [LIGHT_STATE_KEY]: lightReducer,
  [SIMULATION_STATE_KEY]: simulationReducer
});

export default rootReducer;
