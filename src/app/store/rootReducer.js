import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import testReducer from '../../features/sandbox/testReducer'
import eventReducer from '../../features/events/eventReducer'
import modalReducer from '../common/modals/modalReducer'
import authReducer from '../../features/auth/authReducer'
import asyncReducer from '../async/asyncReducer'
import profileReducer from '../../features/profiles/profileReducer'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    test: testReducer,
    event: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    profile: profileReducer
  })

export default rootReducer
