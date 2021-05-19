import { createStore } from "redux";
import mainReducer from "../reducers/index";

export const initialState = {
  fav: {
    jobs: [],
  },
  user: {
    username: null,
  },
};

export default function configStore() {
  return createStore(
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
