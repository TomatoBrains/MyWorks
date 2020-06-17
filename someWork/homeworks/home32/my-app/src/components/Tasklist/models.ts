export namespace TasklistModel {
  export interface State {
    arrayOfTasks: Array<Task>;
    newTaskText: string;
  }
  export interface Props {}
}
export class Task {
    taskDescr: string = '';
    taskStatus: boolean = false;
}