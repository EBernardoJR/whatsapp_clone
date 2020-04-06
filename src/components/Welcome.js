import React, { Component } from 'react';
import logo from '../assets/logo.png'
import backgroundImg from '../assets/background.png'
import { View, Text, Button, Image, ImageBackground } from 'react-native';

// import { Container } from './styles';

export default function Welcome(){

    return (
        <ImageBackground source={backgroundImg} style={{ width: '100%', height: '100%' }}>
        <View style={{ flex: 1, padding: 15 }}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ fontSize: 20, color: '#fff'}}>Seja Bem-Vindo</Text>
                <Image source={logo} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title='Fazer login' onPress={()=> false} />
            </View>
        </View>
        </ImageBackground>
    )
 
}
