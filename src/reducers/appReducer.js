//types
import { CHANGE_CONTACT_EMAIL, 
    ADD_CONTACT_ERROR, 
    ADD_CONTACT_SUCESS,
    CHANGE_MESSAGE
} from '../actions/type'



const INITIAL_STATE = {
    addAddressEmail: '',
    addContactError: '',
    addContactSucess: false,
    message: ''    
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_CONTACT_EMAIL:
            return { ...state, addAddressEmail: action.payload }

        case ADD_CONTACT_ERROR:
            return { ...state, addContactError: action.payload }
        
        case ADD_CONTACT_SUCESS:
            return { ...state, addContactSucess: action.payload, addAddressEmail: '' }    

        case CHANGE_MESSAGE: 
            return { ...state, message: action.payload }
        
        default:
            return state
    }
}