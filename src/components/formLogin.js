import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { changeEmail, changePassword } from '../actions/authAction'
// import { Container } from './styles';
import backgroundImg from '../assets/background.png'

const FormLogin =  props => {

    //recuperando o estado do redux passado no mapStateToProps
    var email = props.email
    var password = props.password

    function navigateToRegister(){
        Actions.register()
    }
    return (
    <ImageBackground source={backgroundImg} style={{ width: '100%', height: '100%' }}>
        <View style={{ flex: 1, padding: 10 }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 25, color: '#ddd'}}>Whatsapp Clone</Text>
            </View>
            <View style={styles.form}>
                <TextInput value={email} placeholder='Email' placeholderTextColor='#fff' onChangeText={text => props.changeEmail(text)} style={{ fontSize: 20, height: 45, color: '#fff' }}/>
                <TextInput value={password} placeholderTextColor='#fff' /*esconder a senha*/secureTextEntry placeholder='Senha' type='password' onChangeText={text => props.changePassword(text)} style={{ fontSize: 20, height: 45, color: '#fff' }}/>

            <TouchableOpacity onPress={navigateToRegister}><Text style={{ fontSize: 20, color: '#ddd' }}>Ainda não tem cadastro? cadastre-se agora</Text></TouchableOpacity>
            </View> 
            <View style={styles.footer}>
                <Button onPress={() => false} title='Entrar' color="#115E54"/>
            </View>
            
        </View>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    //o container vai ser dividido em 5 partes (2, 1, 2)
    header: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    form: {
        flex: 2
    },
    footer:{
        flex: 2
    }

})

//mapStateToProps => transformando o estado do redux para propriedade

const mapStateToProps = state => (
    {//recuperando estados
        email: state.authReducer.email,
        password: state.authReducer.password //vai conectar ao reducer authReducer
    }
)

export default connect(mapStateToProps,{
    //action
    changeEmail, 
    changePassword
})(FormLogin)