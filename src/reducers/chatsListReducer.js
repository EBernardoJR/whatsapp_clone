import { USER_CHATS_LIST } from '../actions/type'


const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){

        case USER_CHATS_LIST:
            return action.payload

        default:
            return state
    }
}