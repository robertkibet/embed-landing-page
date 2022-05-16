import {Dispatch} from "redux";

import GetStepsService from "../services/get-steps-service";
import * as ActionTypes from "./action-types";

const getSteps = () => (dispatch: Dispatch) => {
  dispatch({type: ActionTypes.EARN_STEPS_PENDING});

  GetStepsService.getStepsData()
    .then(() => {
      dispatch({type: ActionTypes.EARN_STEPS_SUCCESS});
    })
    .catch((error) => {
      dispatch({type: ActionTypes.EARN_STEPS_FAIL, error});
    });
};

const GetStepsActions = {
  getSteps,
};
export default GetStepsActions;
