//estado da autenticação

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    registerError: ''
}

export default (state = INITIAL_STATE, action) => {
    //action do email (changeEmail)
    if(action.type === 'change_email'){
        //evoluir o estado (inclementando o email passado)
        return { ...state, email: action.payload }//pega todo estado inicial e so muda o campo email
    }
    //action da senha (changePassword)
    if(action.type === 'change_password'){
        return { ...state, password: action.payload }
    }
    //action do nome (changeName)
    if(action.type === 'change_name'){
        return { ...state, name: action.payload }
    }

    //action dos erros 
    if(action.type === 'register_error'){
        return { ...state, registerError: action.payload }
    }
    //action ao fazer o cadastro
    if(action.type === 'sucess'){
        return { ...state, name: '', password: '' }
    }

    return state;
}