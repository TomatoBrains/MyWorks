interface IUserTasksState {
  elements: Array<Tasks>;
}
class Tasks {
  taskId: number = 0;
  taskBody: string = "";
  taskStatus: boolean = false;
}
const defaultState = {
  elements: [],
} as IUserTasksState;

function userTasksReducer(state: IUserTasksState = defaultState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TASK":
      return {
        ...state,
        elements: [...state.elements, payload],
      };
    /*case "CLOSE_TASK":
      return {
        ...state,
        elements:
          state.elements.indexOf(payload.id) == state.elements.
            ? console.log(1)
            : null,
      };*/
  }
  return state;
}

export default userTasksReducer;
