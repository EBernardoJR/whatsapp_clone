import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

export default function FormLogin (){

    function navigateToRegister(){
        Actions.register()
    }
    return (
    <View style={{ flex: 1, backgroundColor: '#ddd', padding: 10}}>
        <View style={styles.header}>
            <Text style={{ fontSize: 25 }}>Whatsapp Clone</Text>
        </View>
        <View style={styles.form}>
            <TextInput placeholder='Email' style={{ fontSize: 20, height: 45 }}/>
            <TextInput placeholder='Senha' type='password' style={{ fontSize: 20, height: 45 }}/>

           <TouchableOpacity onPress={navigateToRegister}><Text style={{ fontSize: 20 }}>Ainda não tem cadastro? cadastre-se agora</Text></TouchableOpacity>
        </View>
        <View style={styles.footer}>
            <Button onPress={() => false} title='Entrar' color="#115E54"/>
        </View>
        
    </View>
    )
}

const styles = StyleSheet.create({
    //o container vai ser dividido em 5 partes (2, 1, 2)
    header: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        flex: 2
    },
    footer:{
        flex: 2
    }

})
