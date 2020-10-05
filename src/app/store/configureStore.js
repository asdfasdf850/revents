import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

import { verifyAuth } from '../../features/auth/authActions'
import rootReducer from './rootReducer'

export const history = createBrowserHistory()

export function configureStore() {
  const store = createStore(rootReducer(history), composeWithDevTools(applyMiddleware(thunk)))
  store.dispatch(verifyAuth())
  return store
}
