import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authReducer";
import { fetchFilesReducer, uploadReducer } from "./reducers/filesReducer";

const reducers = combineReducers({
  auth: authReducer,
  upload: uploadReducer,
  fetchFiles: fetchFilesReducer,
});
const initialState = {};
const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
