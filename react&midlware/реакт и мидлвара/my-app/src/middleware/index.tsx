import axios, { AxiosRequestConfig } from 'axios'
import { ERROR, START, SUCCESS } from '../constants'

const camelize = require('camelize')
const decamelize = require('decamelize-keys-deep')

const API_ROOT = '';

const camelizeJson = (json: any): any => {
    let result: any = null
  
    if (typeof json === 'object') {
      result = camelize(decamelize(json))
    } else if (typeof json === 'string') {
      result = camelize(decamelize(JSON.parse(json)))
    } else {
      result = json
    }
  
    return result
  }
  
const makeFullUrl = (fullOrRelativeUrl: string = ''): string => {
    if (fullOrRelativeUrl.startsWith('http') || fullOrRelativeUrl.startsWith('data:image')) return fullOrRelativeUrl
  
    // create relative url
    const relativeUrl = fullOrRelativeUrl.startsWith('/') ? fullOrRelativeUrl.substring(1) : fullOrRelativeUrl
  
    // compose full url
    return API_ROOT + relativeUrl
  }
  
axios.interceptors.response.use(
  (response: any) => {
    return response
  },
  function(error: any) {
    if (error.response.status === 401) {
      window.location.href = '/'
    }
    if (error.response.status === 403) {
      window.location.href = '#/forbidden'
    }
    throw error
  }
)

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const invokeAPI = (config: AxiosRequestConfig) => {
  // compose full url
  config.url = makeFullUrl(config.url)

  // send request
  return axios(config).then((response: any) => {
    const data = response.data
    if (!!!data) {
      return Promise.resolve({
        status: response.status,
        statusText: response.statusText
      })
    }
    return typeof data === 'object' ? Promise.resolve(camelizeJson(data)) : Promise.resolve(data)
  })
}

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default (store: any) => (next: any) => (action: any) => {
  const { callAPI, type: actionType } = action
  
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let apiConfig: AxiosRequestConfig = {
    withCredentials: false
  }

  if (typeof callAPI === 'string') {
    apiConfig.url = callAPI
  } 
  else if (typeof callAPI === 'function') {
    apiConfig.url = callAPI(store.getState())
  } 
  else if (typeof callAPI === 'object') {
    apiConfig = {
      ...apiConfig,
      ...callAPI
    }
  } else {
    throw new Error(`Unsupported type of callAPI parameter, typeof callAPI is '${typeof callAPI}'`)
  }

  let actionWithPayload = (data: any) => {
    const finalAction = {
      ...action,
      ...data
    }
    delete finalAction.callAPI
    return finalAction
  }
  debugger
  next(actionWithPayload({ type: actionType + START }))
  debugger
  return invokeAPI(apiConfig)
    .then((response: any) => {
      debugger
      next(actionWithPayload({ type: actionType + SUCCESS, response }))
      return Promise.resolve(response)
    })
    .catch((error: any) => {
      next(actionWithPayload({ type: actionType + ERROR, error }))
      return Promise.reject(error)
    })
}
