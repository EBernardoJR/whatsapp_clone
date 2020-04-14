import { combineReducers } from 'redux'
import authReducer from './authReducer'
import appReducer from './appReducer'
import contactListReducer from './contactListReducer'


export default combineReducers({
    //reducers
    authReducer,
    appReducer,
    contactListReducer
})