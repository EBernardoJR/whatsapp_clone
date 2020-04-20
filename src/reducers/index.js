import { combineReducers } from 'redux'
import authReducer from './authReducer'
import appReducer from './appReducer'
import contactListReducer from './contactListReducer'
import chatListReducer from './chatListReducer'
import chatsListReducer from './chatsListReducer'


export default combineReducers({
    //reducers
    authReducer,
    appReducer,
    contactListReducer,
    chatListReducer,
    chatsListReducer
})