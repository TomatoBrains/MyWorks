import { IRootState } from "../reducers"

export const getUsers = () => {
    return (dispatch: (action: any) => Promise<any>, getState: () => IRootState) => {
      // need request?
      const loaded = getState().users.data.length;
      if(loaded) {
        return
      }
      // call api
      return dispatch({
        type: 'USERS_GET',
      
        callAPI: 'https://jsonplaceholder.typicode.com/users'
      })
    }
}
export const addUser = () => {
  return (dispatch: (action: any) => Promise<any>, getState: () => IRootState) => {
    // need request?
  
    // call api
    return dispatch({
      type: 'USERS_GET',
    
      callAPI: 'https://jsonplaceholder.typicode.com/users'
    })
  }
}
export const editUser = () => {
  return (dispatch: (action: any) => Promise<any>, getState: () => IRootState) => {
    // need request?
  
    // call api
    return dispatch({
      type: 'USERS_GET',
    
      callAPI: 'https://jsonplaceholder.typicode.com/users'
    })
  }
}


export const setTodo = (todoItem: any) => {
  
  return {
    type: 'ADD_TODO',
    payload: todoItem
  }
}

export const addUserTask = (taskItem: any, id: any) => {
  return {
    type: 'ADD_USER_TASK',
    payload: {
      id,
      taskItem
    }
  }
}