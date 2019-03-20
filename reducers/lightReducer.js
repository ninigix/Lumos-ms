import * as actions from "../actions/lightActions";
import { REQUEST, SUCCESS, FAILURE } from "../actions/helpers";

const initialState = {
    availableLightSwitches: []
};

export function lightReducer(state = initialState, action) {
    console.log('action', action);
    switch (action.type) {

        case actions.GET_LIGHT_SWITCHES.SUCCESS: {
            console.log('action reducer', action);
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

        default:
            return state;
    }
}

export default lightReducer;
