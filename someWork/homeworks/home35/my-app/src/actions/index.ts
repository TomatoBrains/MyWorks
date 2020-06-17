import { IRootState } from "../reducers";
export const setTodo = (todoItem: any) => {
  return {
    type: "ADD_TODO",
    payload: todoItem,
  };
};
export const deleteTodo = (index: any) => {
  return {
    type: "DELETE_TODO",
    payload: index,
  };
};
export const editTodo = (index: any, title: any) => {
  debugger;
  return {
    type: "EDIT_TODO",
    payload: { index, title },
  };
};

export const newUser = (name: string, surname: string, id: number) => {
  return {
    type: "ADD_USER",
    payload: { name, surname, id },
  };
};
export const deleteUser = (index: number) => {
  return {
    type: "DELETE_USER",
    payload: index,
  };
};
export const addTask = (taskBody: string, taskStatus: boolean, id: number) => {
  return {
    type: "ADD_TASK",
    payload: { taskBody, taskStatus, id },
  };
};
export const closeTask = (taskStatus: true, id: number) => {
  return {
    type: "CLOSE_TASK",
    payload: { taskStatus, id },
  };
};
