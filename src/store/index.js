import { createStore, combineReducers, applyMiddleware } from 'redux'
import { loginReducer } from './loginReducer'
import { bookingReducer } from './bookingReducer'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  loginState: loginReducer,
  bookingState: bookingReducer,
})

// action = {type: '', payload: ''}

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

export default store
