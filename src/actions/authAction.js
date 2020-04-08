import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
//criptografia
import b64 from 'base-64'
//importando todos os types das actions
import { CHANGE_EMAIL, CHANGE_NAME, CHANGE_PASSWORD, LOGIN_ERROR, LOGIN_SUCESS, REGISTER_ERROR, REGISTER_SUCESS} from './type'


//mudar estado do redux 
//action creator
export const changeEmail = text => {
    //vai associar ao reducer (authReducer) e vai ficar disponivel no parametro action
    return {
        type: CHANGE_EMAIL,
       //payloads => envio das informações enviadas ao reduce
       payload: text 
    }
}

export const changePassword = text => {
    return {
        type: CHANGE_PASSWORD,
        payload: text
    }
}

export const changeName = text => {
    return {
        type: CHANGE_NAME,
        payload: text
    }
}


export const authenticateUser = ({ email, password }) => {
    //sigin -- vai verificar se os dados existem
    console.log(email)
    return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(value => loginSucess(dispatch))
        .catch(err => loginError(err, dispatch))
        
    }  
}

function loginSucess (dispatch){
    dispatch({
        type: LOGIN_SUCESS//action de suceso
    })

  //navegando para a page main
  Actions.main()
}

function loginError(erro, dispatch){

    console.log(erro.message)

    dispatch({
        type: LOGIN_ERROR,
        payload: erro.message
    })
}




export const registerUser = ({ name, email, password }) => {

    return dispatch => {
        //quando for executado a action vai ser devolvida a store
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                //enviar ao firebase database
                let emailCrip = b64.encode(email) 
                    //database/contacts/emailcriptografado
                firebase.database().ref(`/contacts/${emailCrip}`)
                    .push({ name })
                    .then(element => registerSucess(dispatch))

                }
                )//retornar a action com base no then e catch
            .catch(erro => registerError(erro, dispatch))
    }
    
}
//criando o usuário

//redux thunk (adicionado ao app.js) transforma uma função assicrona (não espera as funções q estão dentro dela retornarem) para sicrona

const registerSucess = dispatch => {
    dispatch({
        type: REGISTER_SUCESS//action de suceso
    })

    //navegando para tela de boas vindas
    Actions.welcome()
}

const registerError = (erro, dispatch)=> {

    dispatch({
        type: REGISTER_ERROR,
        payload: erro.message
    })
} 






