import { initialState } from "../store";

const favReducers = (state = initialState.fav, action) => {
  switch (action.type) {
    case "ADD_JOB_TO_FAV":
      return {
        ...state,
        jobs: state.jobs.concat(action.payload),
      };

    case "REMOVE_FROM_FAV":
      return {
        jobs: [...state.jobs.filter((j) => j.id !== action.payload.id)],
      };

    default:
      return state;
  }
};

export default favReducers;
