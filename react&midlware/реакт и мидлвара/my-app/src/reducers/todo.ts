

interface ITodoState {
    elements: Array<any>
}

const defaultState = {
    elements: []
} as ITodoState

function todoReducer(state: ITodoState = defaultState, action: any) {
    const { type, payload, response } = action

    switch (type) {
        case 'ADD_TODO':
            debugger
            return {
                ...state,
                elements: [...state.elements, payload]
            }

    }
    return state
}

export default todoReducer
