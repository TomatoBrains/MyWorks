import users from './users'
import todo from './todo'
import usersTasks from './usersTasks'
import { combineReducers } from 'redux'

export interface IRootState {
    users: any,
    todo: any,
    usersTasks: any
}

const rootReducer = combineReducers<IRootState>({
    users,
    todo,
    usersTasks
})

export default rootReducer