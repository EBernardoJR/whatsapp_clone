import { combineReducers } from 'redux'
import authReducer from './authReducer'
import appReducer from './appReducer'
import contactListReducer from './contactListReducer'
import chatListReducer from './chatListReducer'


export default combineReducers({
    //reducers
    authReducer,
    appReducer,
    contactListReducer,
    chatListReducer
})