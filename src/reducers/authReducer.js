//estado da autenticação

const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
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

    return state;
}