import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'


export default function configureStore() {
  const store = createStore(rootReducer, {})
  return store
}