import { CONTACT_LIST_USER } from '../actions/type'



const INITIAL_STATE =  {

}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){

        case CONTACT_LIST_USER:
            return action.payload

        default: 
            return state
    }
} 