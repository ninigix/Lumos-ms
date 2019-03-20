import { combineReducers } from "redux";

import lightReducer from "./lightReducer";
import { LIGHT_STATE_KEY } from "../selectors/lightSelector";

const rootReducer = combineReducers({
    [LIGHT_STATE_KEY]: lightReducer});

export default rootReducer;
