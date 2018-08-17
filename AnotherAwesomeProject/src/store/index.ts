import { compose, createStore } from 'redux'
import middlewares from '../middlewares'
import reducers from '../reducers'

declare const reduxNativeDevToolsCompose:any;
const composeAction = reduxNativeDevToolsCompose ? reduxNativeDevToolsCompose : compose
const enhancer = composeAction(middlewares)

const store = createStore(reducers, enhancer)

export default store
