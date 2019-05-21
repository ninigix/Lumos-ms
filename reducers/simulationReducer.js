import * as actions from "../actions/simulationActions";
import {
  FAILURE,
  SUCCESS,
  REQUEST,
  SIMULATION_OFF,
  SIMULATION_ON
} from "../actions/helpers";

const initialState = {
  status: []
};

export function simulationReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_SIMULATION_STATUS.SUCCESS:
    case actions.POST_TOGGLE_SIMULATION.SUCCESS: {
      return {
        ...state,
        simulationStatus: !action.response.simulationStatus
          ? SIMULATION_OFF
          : SIMULATION_ON
      };
    }

    case actions.GET_SIMULATION_STATUS.FAILURE:
    case actions.POST_TOGGLE_SIMULATION.FAILURE: {
      return {
        ...state,
        simulationStatus: FAILURE
      };
    }

    case actions.GET_SIMULATION_STATUS.REQUEST:
    case actions.POST_TOGGLE_SIMULATION.REQUEST: {
      return {
        ...state,
        simulationStatus: REQUEST
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

    case actions.POST_LEARN_DATA.REQUEST: {
      return {
        ...state,
        learningStatus: REQUEST
      };
    }

    default:
      return state;
  }
}

export default simulationReducer;
