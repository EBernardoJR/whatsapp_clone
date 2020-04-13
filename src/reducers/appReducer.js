//types
import { CHANGE_CONTACT_EMAIL } from '../actions/type'



const INITIAL_STATE = {
    addAddressEmail: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_CONTACT_EMAIL:
            return { ...state, addAddressEmail: action.payload }

        default:
            return state
    }
}