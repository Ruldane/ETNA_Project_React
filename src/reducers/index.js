import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import BacklogReducer from "./BacklogReducer";
import SecureReducer from "./SecureReducer";

export default combineReducers({
    errors: errorReducer,
    project: projectReducer,
    backlog: BacklogReducer,
    security: SecureReducer
});