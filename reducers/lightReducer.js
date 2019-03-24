import * as actions from "../actions/lightActions";
import { REQUEST, SUCCESS, FAILURE } from "../actions/helpers";

const initialState = {
    availableLightSwitches: []
};

export function lightReducer(state = initialState, action) {
    switch (action.type) {

        case actions.GET_LIGHT_SWITCHES.SUCCESS: {
            return {
                ...state,
                status: SUCCESS,
                availableLightSwitches: action.response
            };
        }

        case actions.GET_LIGHT_SWITCHES.FAILURE: {
            return {
                ...state,
                status: FAILURE
            };
        }

        case actions.SWITCH_LIGHTS.SUCCESS: {
            return {
                ...state,
                status: SUCCESS,
            };
        }

        case actions.SWITCH_LIGHTS.FAILURE: {
            return {
                ...state,
                status: FAILURE,
            };
        }

        default:
            return state;
    }
}

export default lightReducer;
