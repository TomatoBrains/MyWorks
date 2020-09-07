import { IRootState } from "../reducers";

export const getUsers = (state: IRootState): any => state.users

export const getTodo = (state: IRootState): any => state.todo

export const getUserDetails = (state: IRootState, id: any): any => {
    const {users} = state;
    debugger
    return users.data.length ? users.data.find((item: any) => item.id == id) : {}
}
export const getUserTasks = (state: IRootState, id: any): any => {
    const {usersTasks} = state;
    
    return usersTasks.elements.find((item: any) => item.idUser == id)
}
