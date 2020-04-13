import { CHANGE_CONTACT_EMAIL, ADD_CONTACT, ADD_CONTACT_ERROR } from './type'
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
                            alert('Contato Adicionado: ' + email)
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