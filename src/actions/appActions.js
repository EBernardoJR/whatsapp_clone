import { CHANGE_CONTACT_EMAIL, ADD_CONTACT } from './type'
import firebase from 'firebase'
import b64 from 'base-64'


export const changeAddContactEmail = text => {
    return {
        type: CHANGE_CONTACT_EMAIL,
        payload: text
    }
}

export const addContact = email => {
    

    const emailB64 = b64.encode(email) //vai servir para comparar com o do firebase

    
    firebase.database().ref(`/contacts/${emailB64}`)
        //.on() => tempo real(fica checando mudanças)
        .once('value') //so recupera o 'valor'
        .then( value => {
            if(value.val()){ //se não retornar null

                alert('Contato Adicionado: ' + email)
                console.log(value.val())//val retornar so o valor
            }else{
                alert('Contato não existe no nosso banco de dados')
            }
        })
        .catch()


    return {
        type: ADD_CONTACT
    }
}