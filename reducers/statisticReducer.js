import mapkeys from 'lodash.mapkeys';

import * as actions from "../actions/statisticActions";
import { REQUEST, SUCCESS, FAILURE } from "../actions/helpers";

const initialState = {};

export function lightReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_STATISTICS.SUCCESS: {
      const mappedResponse = mapkeys(action.response, function(value, key) {
        return parseInt(key) + 100;
      });


      return {
        ...state,
        status: SUCCESS,
        statistic: mappedResponse
      };
    }

    case actions.GET_STATISTICS.FAILURE: {
      return {
        ...state,
        status: FAILURE
      };
    }

    case actions.GET_STATISTICS.REQUEST: {
      return {
        ...state,
        status: REQUEST
      };
    }

    default:
      return state;
  }
}

export default lightReducer;
