import * as ActionTypes from "../actions/action-types";
import data from "./earn-steps-data";

interface IErrorState {
  message: string;
  errorCode: number;
}

export interface IActionState {
  type: string;
  error: IErrorState;
  steps: [];
}

const initialState = {
  loading: false,
  type: "",
  error: null,
};
const base = (state = initialState, action: IActionState) => {
  switch (action.type) {
    case ActionTypes.EARN_STEPS_PENDING: {
      return {
        ...state,
        loading: true,
        type: action.type,
        steps: [],
        error: null,
      };
    }
    case ActionTypes.EARN_STEPS_FAIL: {
      return {
        ...state,
        loading: false,
        type: action.type,
        steps: [],
        error: action.error,
      };
    }
    case ActionTypes.EARN_STEPS_SUCCESS:
      return {
        ...state,
        type: action.type,
        loading: false,
        steps: data,
        error: null,
      };
    default:
      return state;
  }
};

export default base;
