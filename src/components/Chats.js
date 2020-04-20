import React, { useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { userChatsFetch } from '../actions/appActions'
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'


function Chats(props){

    useEffect(()=> {
        props.userChatsFetch()
    }, [])

    function renderChats(chat){

        return (
            <TouchableOpacity onPress={()=> Actions.chat({title: chat.item.name, nameContact: chat.item.name, contactEmail: chat.item.email })}>
            <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#ccc'}}>
                <Text style={{ fontSize: 25 }}>{chat.item.name}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    return(
        <View>
            <FlatList 
            data={props.chats}
            renderItem={item => renderChats(item)}
            keyExtractor={item => item.uid}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    const chats = _.map(state.chatsListReducer, (val, uid) => {
        return { ...val, uid }
    })

    return ({
        chats
    })
}

export default connect( mapStateToProps, {
    userChatsFetch
})(Chats)