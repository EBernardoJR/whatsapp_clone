import firebase from 'firebase'
import { ThunkDispatch } from 'redux-thunk'
import { Actions } from 'react-native-router-flux'

//mudar estado do redux 
//action creator
export const changeEmail = text => {
    //vai associar ao reducer (authReducer) e vai ficar disponivel no parametro action
    return {
        type: 'change_email',
       //payloads => envio das informações enviadas ao reduce
       payload: text 
    }
}

export const changePassword = text => {
    return {
        type: 'change_password',
        payload: text
    }
}

export const changeName = text => {
    return {
        type: 'change_name',
        payload: text
    }
}

export const registerUser = ({ name, email, password }) => {

    return dispatch => {
        //quando for executado a action vai ser devolvida a store
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => registerSucess(dispatch))//retornar a action com base no then e catch
            .catch(erro => registerError(erro, dispatch))
    }
    
}
//criando o usuário

//redux thunk (adicionado ao app.js) transforma uma função assicrona (não espera as funções q estão dentro dela retornarem) para sicrona

const registerSucess = dispatch => {
    dispatch({
        type: 'sucess'//action de suceso
    })

    //navegando para tela de boas vindas
    Actions.welcome()
}

const registerError = (erro, dispatch)=> {

    dispatch({
        type: 'register_error',
        payload: erro.message
    })
} 