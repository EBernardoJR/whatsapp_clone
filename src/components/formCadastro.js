import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, ImageBackground, TextInput, Button, Text } from 'react-native';
//actions
import { changeEmail, changePassword, changeName, registerUser } from '../actions/authAction'
import backgroundImg from '../assets/background.png'



const  FormCadastro = props => {

    function handleRegisterUser(){

        const { name, email, password } = props

        props.registerUser({ name, email, password })
    }


    //ns props, vai ta todo o estado do redux (reducer authReducer)
    return (
    <ImageBackground source={backgroundImg} style={{ width: '100%', height: '100%' }}>
        <View style={{ padding: 10, flex: 1 }}>


            <View style={{ flex: 4, justifyContent: 'center', }}>
                <TextInput placeholder='Nome' placeholderTextColor='#fff' value={props.name} onChangeText={text => props.changeName(text)} style={{ fontSize: 20, height: 45, borderBottomColor: '#7B7777', borderBottomWidth: 2, width: '90%', color: '#fff' }}/> 
                <TextInput placeholder='Email' placeholderTextColor='#fff' value={props.email} onChangeText={text => props.changeEmail(text)} style={{ fontSize: 20, height: 45, borderBottomColor: '#7B7777', borderBottomWidth: 2, width: '90%', color: '#fff' }}/>
                <TextInput placeholder='Senha' placeholderTextColor='#fff' secureTextEntry value={props.password} onChangeText={text => props.changePassword(text)} style={{ fontSize: 20, height: 45, borderBottomColor: '#7B7777', borderBottomWidth: 2, width: '90%', color: '#fff' }}/>
                <Text style={{ color: '#ff0000', fontSize: 18 }}>{props.erro}</Text>
            </View>

            <View style={{ flex: 1 }}>
                <Button title='Cadastrar' 
                color="#115e54" 
                onPress={() => handleRegisterUser()} />
            </View>
        </View>
    </ImageBackground>
    )
  }

const mapStateToProps = state => (
    {   //buscando os campos no redux
        name: state.authReducer.name,
        email: state.authReducer.email,
        password: state.authReducer.password,
        erro: state.authReducer.registerError
    }
)

const actions = {
    //actions
    changeEmail,
    changePassword, //vão ser encaminhadas para as props
    changeName,
    registerUser
}

export default connect(mapStateToProps, actions)(FormCadastro)