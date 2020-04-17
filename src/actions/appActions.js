import { CHANGE_CONTACT_EMAIL, 
    ADD_CONTACT_SUCESS, 
    CHANGE_MESSAGE , 
    ADD_CONTACT_ERROR, 
    CONTACT_LIST_USER,
    SEND_MESSAGE,
    CHAT_USER_LIST

 } from './type'
import firebase from 'firebase'
import b64 from 'base-64'
//transformar objeto em array
import _ from 'lodash'

export const changeAddContactEmail = text => {
    return {
        type: CHANGE_CONTACT_EMAIL,
        payload: text
    }
}

export const addContact = email => {


    return dispatch => {
        const emailB64 = b64.encode(email) //vai servir para comparar com o do firebase

    
        firebase.database().ref(`/contacts/${emailB64}`)
            //.on() => tempo real(fica checando mudanças)
            .once('value') //so recupera o 'valor'
            .then( value => {
                if(value.val()){ //se não retornar null
    
                   
                    //console.log(value.val())//val retornar so o valor
                    
                    //email do usuário a ser adicionado

                    const userData = _.first(_.values(value.val())) //vai receber os dados do usuário em forma de objeto e transformar-lo em array


                    //email do usuário autenticado
                    const { currentUser } = firebase.auth()
                    let emailUserAuthB64 = b64.encode(currentUser.email)

                    firebase.database().ref(`/user_contacts/${emailUserAuthB64}`)
                        .push({//adcionando o contato
                            email,
                            name: userData.name
                        }).then(()=> {
                           dispatch({ type: ADD_CONTACT_SUCESS, payload: true })
                        }).catch( erro => (
                            dispatch({//ao não encontrar o usuário vai disparar ess função retornando o erro como action
                                type: ADD_CONTACT_ERROR,
                                payload: erro.message
                            })
                            )
                        )


                
                }else{
                    dispatch({//ao não encontrar o usuário vai disparar ess função retornando o erro como action
                        type: ADD_CONTACT_ERROR,
                        payload: 'E-mail informado não corresponde a um usuário válido'
                    })
                }
            })
            
    }
}

//mudar  contact sucess para false

export const enableAddContact = () => (
    {
        type: ADD_CONTACT_SUCESS,
        payload: false
    }
)

//listar os contatos
export const userContactsFetch = () => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        let userEmailb64 = b64.encode( currentUser.email )

        firebase.database().ref(`/user_contacts/${userEmailb64}`)
            .on('value', snapshot => {
                //sempre q houver alteração vai disparada
                console.log(snapshot.val())
                dispatch({ type: CONTACT_LIST_USER, payload: snapshot.val() })
            })
    }
}

export const changeMessage = text => {
    return(
        {
            type: CHANGE_MESSAGE,
            payload: text
        }
    )
}

export const sendMessage = (message, nameContact, emailContact) => {
    
    const { currentUser } = firebase.auth()//usuario logado
    const userLogEmail = currentUser.email
 
    return dispatch => {

        //convertando para o b64
        const userLogEmailB64 = b64.encode(userLogEmail)
        const emailContactB64 = b64.encode(emailContact)//email do usuário que será enviada a mensagem

        //enviar para o path do usuário logado
        firebase.database().ref(`/messages/${userLogEmailB64}/${emailContactB64}`)
            .push({ message, type: 'e' })//tipo 'e' significa que a menasgem foi enviada
            .then(()=> {
                firebase.database().ref(`/messages/${emailContactB64}/${userLogEmailB64}`)
                    .push({ message, type: 'r' })//enviando mensagem para p o usuário
                    .then(()=> dispatch({
                        type: SEND_MESSAGE
                    }))
            })//-----------------------------------------------------------------------------------
            .then(() => {//armazenamento dos cabecalhos (ultima mensagem enviada do usuário autenticado)

                firebase.database().ref(`/user_chats/${userLogEmailB64}/${emailContactB64}`)
                    .set({ name: nameContact, email: emailContact })//se existe um registro igual vai sobrepor esse registro


            })
            .then(() => { //ultima mensagem enviada do usuário que a mensagem foi enviada

                //pesquisando o nome do usuario logado na lista de contatos
                firebase.database().ref(`/contacts/${userLogEmailB64}`)//vai retornar um objeto
                    .once('value')
                    .then( snapshot => {
                        //vai precisar convertar para um array para pegar o nome pois não tem como saber a chave unica do documento
                        const userData = _.first(_.values(snapshot.val()))//vai trazer um array(recuperando o primeiro indice)
                        console.log(userData)


                        firebase.database().ref(`/user_chats/${emailContactB64}/${userLogEmailB64}`)
                            .set({ name: userData.name, email: userLogEmail})
                    })

            })

        
    }
}


//chat 

export const userChatFetch = (emailContact) => {

    //email do usuário logado
    const { currentUser } = firebase.auth()
    let emailUserAuthB64 = b64.encode(currentUser.email)

    let emailContactB64 = b64.encode(emailContact)

    return dispatch => {
        firebase.database.ref(`/messages/${emailUserAuthB64}/${emailContactB64}`)
        .on('value', snapshot => {
            dispatch({ type: CHAT_USER_LIST, payload: snapshot.val() })
        })//ficar verificando
    }
}