import { START, SUCCESS, ERROR } from "../constants"


interface IUserState {
  data: Array<any>
}

const defaultState = {
  data: []
} as IUserState

function userReducer(state: IUserState = defaultState, action: any) {
  const { type, payload, response } = action

  switch (type) {
    case 'USERS_GET' + START:
      
      return {
        ...state,
        load: true,
        ...payload
      }
    
    case 'USERS_GET' + SUCCESS:
          
      return {
        ...state,
        data: response,
      }
      case 'USERS_GET' + ERROR:
          
          return {
            ...state,
            ...payload,
            error: true
          }
  }
  return state
}

export default userReducer
