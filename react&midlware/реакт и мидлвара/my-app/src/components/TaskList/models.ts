export namespace TaskListModel {
    export interface State {
        arrayOfTasks: Array<Task>,
        newTaskText: string
    }
    export interface Props {
        
    }
}

export class Task {
    taskDescription: string = '';
    taskStatus: boolean = false;
}