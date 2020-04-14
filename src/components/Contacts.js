import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { userContactsFetch } from '../actions/appActions'

function Contacts(props){

    useEffect(()=>{
        props.userContactsFetch()
    }, [])

    return(
        <View>
            <Text>Contatos</Text>
        </View>
    )
}

const mapStateToProps = state => (
    {

    }
)

export default connect(null, { userContactsFetch })(Contacts)