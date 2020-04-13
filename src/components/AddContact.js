import React from 'react'
import { View, TextInput, Button } from 'react-native'
//mapeamento do redux
import { connect } from 'react-redux'
import { changeAddContactEmail, addContact } from '../actions/appActions'


const AddContact = props => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
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
           
            </View>
        </View>
    )
}

const mapStateToProps = state => (
    {
        addAddressEmail: state.appReducer.addAddressEmail
    }
)
const actions = {
    changeAddContactEmail,
    addContact
}

export default connect(mapStateToProps, actions)(AddContact)