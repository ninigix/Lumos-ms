import * as actions from "../actions/simulationActions";
import { FAILURE, SUCCESS } from "../actions/helpers";

const initialState = {
    status: []
};

export function simulationReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_SIMULATION_STATUS.SUCCESS: {
            return {
                ...state,
                simulationStatus: action.response.simulation,
            };
        }

        case actions.GET_SIMULATION_STATUS.FAILURE: {
            return {
                ...state,
                simulationStatus: FAILURE
            };
        }

        case actions.POST_LEARN_DATA.SUCCESS: {
            return {
                ...state,
                learningStatus: SUCCESS,
                generatedData: action.response
            };
        }

        case actions.POST_LEARN_DATA.FAILURE: {
            return {
                ...state,
                learningStatus: FAILURE
            };
        }
        default:
            return state;
    }
}

export default simulationReducer;
