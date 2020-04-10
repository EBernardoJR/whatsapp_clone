import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {  TabBar } from 'react-native-tab-view';
import addImg from '../assets/add.png'
import { Actions } from 'react-native-router-flux'



const TabBarMenu = (props) => {
    return(
        <View style={{ backgroundColor: '#115e54', elevation: 4, marginBottom: 6}}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 18, marginLeft: 20 }}>Whatsapp Clone</Text>
                </View>



                <View style={{ flexDirection: 'row', marginRight: 20, marginTop: 15}}>
                    <TouchableOpacity onPress={() => Actions.addContact()} style={{ marginRight: 40 }}>
                        <Image source={addImg} />
                    </TouchableOpacity>

                    <View>
                        <Text style={{ color: '#fff', fontSize: 15}}>Sair</Text>
                    </View>

                </View>
            </View>

            <TabBar {...props} style={{ backgroundColor: '#115e54', elevation: 0 }} /*por padrao ele possue uma elevação*//>
        </View>
    )
}

export default TabBarMenu