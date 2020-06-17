interface ITodoState {
  elements: Array<any>;
}

const defaultState = {
  elements: [],
} as ITodoState;

function todoReducer(state: ITodoState = defaultState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        elements: [...state.elements, payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        elements: [
          ...state.elements.slice(0, payload),
          ...state.elements.slice(payload + 1),
        ],
      };
    case "EDIT_TODO":
      return {
        ...state,
        elements: state.elements.map((item, index) => {
          return index == payload.index
            ? {
                ...item,
                title: payload.title,
              }
            : item;
        }),
      };
  }
  return state;
}

export default todoReducer;
