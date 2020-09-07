import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import thunk from 'redux-thunk'
import apiMiddleware from '../middleware'
import { routerMiddleware } from 'react-router-redux'
import history from '../history'

//import monitorReducersEnhancer from './enhancers/monitorReducers'
//import loggerMiddleware from './middleware/logger'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

/** Configure Redux DevTools **/
const composeEnhancers = composeWithDevTools({
  features: {
    pause: true, // start/pause recording of dispatched actions
    lock: true, // lock/unlock dispatching actions and side effects
    jump: true, // jump back and forth (time travelling)
    skip: true, // skip (cancel) actions
    dispatch: true, // dispatch custom actions or action creators
    test: false, // generate tests for the selected actions
    reorder: false, // drag and drop actions in the history list
    persist: false, // persist states on page reloading
    export: false // export history of actions in a file
  }
})

const getMiddleware = () => {

  return applyMiddleware(thunk, apiMiddleware, routerMiddleware(history))
}


export default function configureStore() {

  const store = createStore(rootReducer, composeEnhancers(getMiddleware()))

  return store
}