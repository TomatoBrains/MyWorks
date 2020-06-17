import { IRootState } from "../reducers";

export const getTodo = (state: IRootState):any => state.todo

export const getAllUsers = (state: IRootState):any => state.users
export const getUser = (state:IRootState):any=>state.users.elements.id
export const getTasks = (state: IRootState): any => state.userTasks

