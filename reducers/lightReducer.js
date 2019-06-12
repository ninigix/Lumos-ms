import * as actions from "../actions/lightActions";
import { REQUEST, SUCCESS, FAILURE } from "../actions/helpers";

const initialState = {
  availableLightSwitches: []
};

const mapInitialLightsOn = initialLightStatuses =>
  initialLightStatuses.map(light => {
    if (Number(light.esp_id) > 10) {
      return Number(light.esp_id) - 100;
    }
    return Number(light.esp_id);
  });

const filterInitialLightStatuses = initialLightStatuses =>
  initialLightStatuses.filter(({ status }) => status === 1);

export function lightReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SWITCH_LIGHTS.FAILURE: {
      return {
        ...state,
        switchLightsStatus: FAILURE
      };
    }

    case actions.SWITCH_LIGHTS.SUCCESS: {
      return {
        ...state,
        switchLightsStatus: SUCCESS
      };
    }

    case actions.SWITCH_LIGHTS.REQUEST: {
      return {
        ...state,
        switchLightsStatus: REQUEST
      };
    }

    case actions.GET_SWITCHES_INITIAL_STATE.FAILURE: {
      return {
        ...state,
        switchesInitialStateStatus: FAILURE
      };
    }

    case actions.GET_SWITCHES_INITIAL_STATE.SUCCESS: {
      return {
        ...state,
        switchesInitialStateStatus: SUCCESS,
        initialLightsOn: mapInitialLightsOn(
          filterInitialLightStatuses(action.response)
        )
      };
    }

    case actions.GET_SWITCHES_INITIAL_STATE.REQUEST: {
      return {
        ...state,
        switchesInitialStateStatus: REQUEST
      };
    }

    default:
      return state;
  }
}

export default lightReducer;
