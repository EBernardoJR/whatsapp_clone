import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { userContactsFetch } from '../actions/appActions'
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'

function Contacts(props){

  

    useEffect(()=>{
        props.userContactsFetch()//buscar os contatos para pôr no estado do redux
    
    }, [])

   




    function renderContacts(contact) {
    
        return(
                    <TouchableOpacity onPress={() => Actions.chat()} style={{ flex: 1, padding: 20, borderBottomWidth: 1, color: '#ccc'}}>
                        <Text style={{ fontSize: 20 }}>{contact.item.name}</Text>
                        <Text style={{ fontSize: 18 }}>{contact.item.email}</Text>
                    </TouchableOpacity>
        )
    }
  


    return(
        <FlatList 
        data={props.contacts}
        renderItem={data => renderContacts(data)}
        keyExtractor={item => item.uid}
        />
    )
}

const mapStateToProps = state => {
    //tranformando o objeto em um  array
    const contacts = _.map(state.contactListReducer, (value, uid) => {
        return { ...value, uid }
    })
 

    return {
        contacts
    }
}

export default connect(mapStateToProps, { userContactsFetch })(Contacts)