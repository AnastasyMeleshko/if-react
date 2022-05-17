import {combineReducers} from "redux";
import userReducer from "../ducks/user/reducers";

export default combineReducers({
    user: userReducer,
})
