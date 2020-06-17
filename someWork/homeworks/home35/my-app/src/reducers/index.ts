import todo from "./todo";
import users from "./users";
import userTasks from './userTasks'
import { combineReducers } from "redux";

export interface IRootState {
  todo: any;
  users: any;
  userTasks: any;
}

const rootReducer = combineReducers<IRootState>({
  todo,
  users,
  userTasks,
});

export default rootReducer;
