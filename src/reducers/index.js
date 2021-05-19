import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB_TO_FAV":
      return {
        ...state,
        fav: {
          ...state.fav,
          jobs: state.fav.jobs.concat(action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
