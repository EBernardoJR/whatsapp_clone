import React from 'react'
import { View, TextInput, Button } from 'react-native'
//mapeamento do redux
import { connect } from 'react-redux'


const AddContact = props => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
           <View style={{ flex: 1, justifyContent: 'center' }}>
            
                <TextInput
                placeholder="E-mail"
                style={{ fontSize: 20, height: 45 }}
                onChange={()=> false}
                value={props.addAddressEmail}
                />

           </View>
           <View style={{ flex: 1 }}>
               <Button 
               onPress={()=> false}
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

}

export default connect(mapStateToProps, null)(AddContact)