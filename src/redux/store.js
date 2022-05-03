import { createStore } from "redux";
import rootReducer from "./rootReducer.js";
import initialState from "./initialState.js";

export default createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__()
)


