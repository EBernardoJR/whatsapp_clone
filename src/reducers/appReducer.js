//types
import { CHANGE_CONTACT_EMAIL, ADD_CONTACT_ERROR } from '../actions/type'



const INITIAL_STATE = {
    addAddressEmail: '',
    addContactError: ''    
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_CONTACT_EMAIL:
            return { ...state, addAddressEmail: action.payload }

        case ADD_CONTACT_ERROR:
            return { ...state, addContactError: action.payload }
        default:
            return state
    }
}