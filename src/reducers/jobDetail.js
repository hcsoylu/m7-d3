import { initialState } from "../store";

const detailReducers = (state = initialState.selectedJob, action) => {
  switch (action.type) {
    case "GET_JOB_DETAIL":
      return {
        ...state,
        jobDetail: action.payload,
      };

    case "GET_JOBLIST_TOGGLE_ERROR":
      return {
        ...state,
        error: !state.error,
      };

    default:
      return state;
  }
};

export default detailReducers;
