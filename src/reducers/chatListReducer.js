import { CHAT_USER_LIST } from '../actions/type'

const INITIAL_STATE = {

}


export default (state = INITIAL_STATE, action ) => {
    switch(action.type){

        case CHAT_USER_LIST:
            return action.payload


        default:
            return state
    }
}