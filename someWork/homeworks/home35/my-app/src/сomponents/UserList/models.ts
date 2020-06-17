export namespace UserListModel {
  export interface State {
    userList: Array<User>,
    currentPage: number,
    allPages: number,
  }
}
export class User {
  id: number = 0;
  email: string = '';
  first_name: string = '';
  last_name: string = '';
  avatar: string = '';
}
