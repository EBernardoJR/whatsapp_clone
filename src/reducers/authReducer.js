//estado da autenticação
//importando todos os types das actions
import { CHANGE_EMAIL, 
    CHANGE_NAME, 
    CHANGE_PASSWORD, 
    LOADING_LOGIN,
    LOGIN_ERROR, 
    LOGIN_SUCESS, 
    REGISTER_ERROR, 
    REGISTER_SUCESS,
    LOADING_REGISTER
} from '../actions/type'



const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    registerError: '',
    erroLogin: '',
    loadingLogin: false,
    loadingRegister: false
}

export default (state = INITIAL_STATE, action) => {
    console.log(action.type)

    switch(action.type){
        case CHANGE_EMAIL://action do email (changeEmail)
            //evoluir o estado (inclementando o email passado)
            return { ...state, email: action.payload }//pega todo estado inicial e so muda o campo email
    
        case CHANGE_PASSWORD:
            return { ...state, password: action.payload }
        
        case CHANGE_NAME:
            return { ...state, name: action.payload }
        
        case REGISTER_ERROR:
            return { ...state, registerError: action.payload, loadingRegister: false }

        case REGISTER_SUCESS:
            return { ...state, name: '', password: '', email: '', erroLogin: '' }
        case LOGIN_ERROR:
            return { ...state, erroLogin: action.payload, loadingLogin: false }
        
        case LOADING_LOGIN: 
            return { ...state, loadingLogin: true }

        case LOADING_REGISTER:
            return { ...state, loadingRegister: true }

        default:
            return state;

    }
    
}