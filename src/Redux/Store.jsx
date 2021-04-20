import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { userReducer } from "./Reducers/UserReducer";

const store = createStore(userReducer, applyMiddleware(logger, thunk))

export default store