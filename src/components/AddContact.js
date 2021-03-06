import React from 'react'
import { View, TextInput, Button, Text } from 'react-native'
//mapeamento do redux
import { connect } from 'react-redux'
import { changeAddContactEmail, addContact } from '../actions/appActions'


const AddContact = props => {

    function renderAddContact(){
        if(!props.addContactSucess){//se for true
            return(
            <>
            <View style={{ flex: 1, justifyContent: 'center' }}>
            
                <TextInput
                placeholder="E-mail"
                style={{ fontSize: 20, height: 45 }}
                onChangeText={text => props.changeAddContactEmail(text)}
                value={props.addAddressEmail}
                />

           </View>
           <View style={{ flex: 1 }}>
               <Button 
               onPress={()=> props.addContact(props.addAddressEmail)}
               title="Adicionar"
               color='#115e54'
               />

               <Text style={{ color: '#ff0000', fontSize: 20, alignSelf: "center"}}>
                    {props.addContactError}
               </Text>
           
            </View>
            </>
            )
        }else {
            return(
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontSize: 20}}>Contato cadastrado com sucesso!</Text>
                </View>
            )
        }
    }


    return(
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        { renderAddContact() }
        </View>
    )
}

const mapStateToProps = state => (
    {
        addAddressEmail: state.appReducer.addAddressEmail,
        addContactError: state.appReducer.addContactError,
        addContactSucess: state.appReducer.addContactSucess
    }
)
const actions = {
    changeAddContactEmail,
    addContact
}

export default connect(mapStateToProps, actions)(AddContact)