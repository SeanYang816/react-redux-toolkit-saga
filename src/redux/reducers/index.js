
import users from "./users";
import randomUser from './randomUserSlice'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  randomUser,
});

export default rootReducer;