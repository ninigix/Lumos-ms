import * as actions from "../actions/simulationActions";
import { FAILURE } from "../actions/helpers";

const initialState = {
    status: []
};

export function simulationReducer(state = initialState, action) {
    switch (action.type) {

        case actions.GET_SIMULATION_STATUS.SUCCESS: {
            return {
                ...state,
                status: action.response.simulation,
            };
        }

        case actions.GET_SIMULATION_STATUS.FAILURE: {
            return {
                ...state,
                status: FAILURE
            };
        }

        default:
            return state;
    }
}

export default simulationReducer;
