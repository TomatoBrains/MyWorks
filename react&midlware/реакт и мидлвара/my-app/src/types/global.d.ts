
/** Models' types definitions **/
declare interface IReducerAction<T = any> {
    type: string,
    payload?: any | T,
    meta?: any,
    response?: any | T
    error?: any
}

declare interface IDispatchAction<T = any> {
    type: string,
    payload?: any | T,
}

declare interface ICallAPIMetadata {
    url: string,
    method: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'options'
    data?: any,
    params?: any,
    body?: any,
    headers?: any
}

declare interface ICallApiDispatchAction<T = any> extends IDispatchAction<T> {
    callAPI: string | ICallAPIMetadata
}
