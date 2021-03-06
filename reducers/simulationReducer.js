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
    case actions.GET_REAL_SIMULATION_STATUS.SUCCESS:
    case actions.GET_ARTIFICIAL_SIMULATION_STATUS.SUCCESS:
    case actions.POST_TOGGLE_SIMULATION.SUCCESS: {
      return {
        ...state,
        artificialSimulationStatus:
          action.response.artificialSimulationStatus === "ON"
            ? SIMULATION_ON
            : SIMULATION_OFF,
        realSimulationStatus:
          action.response.realSimulationStatus === "ON"
            ? SIMULATION_ON
            : SIMULATION_OFF
      };
    }

    case actions.GET_REAL_SIMULATION_STATUS.FAILURE:
    case actions.GET_ARTIFICIAL_SIMULATION_STATUS.FAILURE:
    case actions.POST_TOGGLE_SIMULATION.FAILURE: {
      return {
        ...state,
        realSimulationStatus: FAILURE,
        artificialSimulationStatus: FAILURE
      };
    }

    case actions.GET_REAL_SIMULATION_STATUS.REQUEST:
    case actions.GET_ARTIFICIAL_SIMULATION_STATUS.REQUEST:
    case actions.POST_TOGGLE_SIMULATION.REQUEST: {
      return {
        ...state,
        realSimulationStatus: REQUEST,
        artificialSimulationStatus: REQUEST
      };
    }

    case actions.POST_LEARN_DATA.SUCCESS: {
      console.log('action.response');

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
