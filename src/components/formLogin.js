import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { View, ActivityIndicator, Text,StatusBar, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { changeEmail, changePassword, authenticateUser } from '../actions/authAction'
// import { Container } from './styles';
import backgroundImg from '../assets/background.png'

const FormLogin =  props => {

    //recuperando o estado do redux passado no mapStateToProps
    var email = props.email
    var password = props.password

    function navigateToRegister(){
        Actions.register()
    }

    //autenticação
    function login(){
        props.authenticateUser({ email, password })
    }

    function renderButton(){
        //vai ocultar o botão enquanto a autenticação não for finalizada
        //loading login comeca como falso por padrao
        if(props.loadingLogin){
            //enquanto estiver carregando vai mostar o gif
            return (
                <ActivityIndicator size='large' color="#fff"/>
            )
        }else {

            return (
                <Button onPress={() => login()} title='Entrar' color="#115E54"/>
            )
        }
    }

    return (
    <>
    <StatusBar backgroundColor='#115e44' barStyle="light-content"/>
    <ImageBackground source={backgroundImg} style={{ width: '100%', height: '100%' }}>
        <View style={{ flex: 1, padding: 10 }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 25, color: '#ddd'}}>Whatsapp Clone</Text>
            </View>
            <View style={styles.form}>
                <TextInput value={email} 
                placeholder='Email' 
                placeholderTextColor='#fff' 
                onChangeText={text => props.changeEmail(text)} 
                style={{ fontSize: 20, height: 45, color: '#fff' }}/>



                <TextInput 
                value={password} 
                placeholderTextColor='#fff' 
                /*esconder a senha*/
                secureTextEntry 
                placeholder='Senha' 
                type='password' 
                onChangeText={text => props.changePassword(text)} 
                style={{ fontSize: 20, height: 45, color: '#fff' }}/>

                <Text style={{ color: '#ff0000', fontSize: 18}}>{props.erroLogin}</Text>

            <TouchableOpacity onPress={navigateToRegister}>
                <Text style={{ fontSize: 20, color: '#ddd' }}>Ainda não tem cadastro? cadastre-se agora</Text>
            </TouchableOpacity>


            </View> 


            <View style={styles.footer}>
                {renderButton()}
            </View>
            
        </View>
    </ImageBackground>
    </>
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
        password: state.authReducer.password, //vai conectar ao reducer authReducer
        erroLogin: state.authReducer.erroLogin,
        //activityIndicator
        loadingLogin: state.authReducer.loadingLogin
    }
)

export default connect(mapStateToProps,{
    //declarar as actions
    changeEmail, 
    changePassword,
    authenticateUser
})(FormLogin)