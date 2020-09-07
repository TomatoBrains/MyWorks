

interface IUserTodoState {
    elements: Array<UserTaskItem>
}

const defaultState = {
    elements: [{
        idUser: 1,
        listOfTasks: [{
            taskId: 0,
            taskTitle: 'First task',
            taskStatus: false
        }]
    }]
} as IUserTodoState

class UserTaskItem {
    idUser: number = -1;
    listOfTasks: Array<Task> = [];
}
class Task {
    taskId: number = 0;
    taskTitle: string = '';
    taskStatus: boolean = false;
}
function userTodoReducer(state: IUserTodoState = defaultState, action: any) {
    const { type, payload, response } = action

    switch (type) {
        case 'ADD_USER_TASK':
            const index = state.elements.findIndex((item: any) => item.idUser == payload.id)
            return {
                ...state,
                elements: index> -1 ? state.elements.map((item: any) => { 
                    return item.idUser == payload.id ?
                        {
                            ...item,
                            listOfTasks: [...item.listOfTasks, payload.taskItem]
                        } : item
                }) :
                [...state.elements, {
                    idUser: payload.id,
                    listOfTasks: [payload.taskItem]
                }]
            }

    }
    return state
}

export default userTodoReducer
