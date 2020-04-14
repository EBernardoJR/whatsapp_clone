import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { userContactsFetch } from '../actions/appActions'
import _ from 'lodash'

function Contacts(props){

    const [ _contacts, setContacts ] = useState([])

    useEffect(()=>{
        props.userContactsFetch()//buscar os contatos para pôr no estado do redux
        makeDataSource(props.contacts)
    }, [])



    //fonte de dados para o listView

    //criando a fonte de dados
    function makeDataSource(contacts){
        setContacts(contacts)
    }


    return(
        <FlatList 
        data={_contacts}
        renderItem={({data}) => <View><Text>{data}</Text></View>}
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
        contacts,
        addContactSucess: state.appReducer.addContactSucess //quando for adicionado um novo contato vai forçar a atualização
    }
}

export default connect(mapStateToProps, { userContactsFetch })(Contacts)