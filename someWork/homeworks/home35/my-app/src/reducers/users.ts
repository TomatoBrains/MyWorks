interface IUsersState {
  elements: Array<any>;
}

const defaultState = {
  elements: [],
} as IUsersState;

function usersReducer(state: IUsersState = defaultState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_USER":
      return {
        ...state,
        elements: [...state.elements, payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        elements: [
          ...state.elements.slice(0, payload),
          ...state.elements.slice(payload + 1),
        ],
      };
  }
  return state;
}

export default usersReducer;
