import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, ImageBackground, TextInput, Button } from 'react-native';
//actions
import { changeEmail, changePassword, changeName } from '../actions/authAction'
import backgroundImg from '../assets/background.png'
// import { Container } from './styles';

const  FormCadastro = props => {

    //ns props, vai ta todo o estado do redux (reducer authReducer)
    return (
    <ImageBackground source={backgroundImg} style={{ width: '100%', height: '100%' }}>
        <View style={{ padding: 10, flex: 1 }}>


            <View style={{ flex: 4, justifyContent: 'center', }}>
                <TextInput placeholder='Nome'  value={props.name} onChangeText={text => props.changeName(text)} style={{ fontSize: 20, height: 45, borderBottomColor: '#7B7777', borderBottomWidth: 2, width: '90%' }}/> 
                <TextInput placeholder='Email' value={props.email} onChangeText={text => props.changeEmail(text)} style={{ fontSize: 20, height: 45, borderBottomColor: '#7B7777', borderBottomWidth: 2, width: '90%' }}/>
                <TextInput placeholder='Senha' secureTextEntry value={props.password} onChangeText={text => props.changePassword(text)} style={{ fontSize: 20, height: 45, borderBottomColor: '#7B7777', borderBottomWidth: 2, width: '90%' }}/>
            </View>

            <View style={{ flex: 1 }}>
                <Button title='Cadastrar' color="#115e54" onPress={()=> false} />
            </View>
        </View>
    </ImageBackground>
    )
  }

const mapStateToProps = state => (
    {
        name: state.authReducer.name,
        email: state.authReducer.email,
        password: state.authReducer.password
    }
)

export default connect(mapStateToProps, {
    //action
    changeEmail,
    changePassword, //vão ser encaminhadas as props
    changeName
})(FormCadastro)