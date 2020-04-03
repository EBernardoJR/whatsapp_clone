import React, { Component } from 'react';

import { View, Text, TextInput, Button } from 'react-native';

// import { Container } from './styles';

export default function FormCadastro() {
    return (
    <View style={{ padding: 10, flex: 1, backgroundColor: '#ddd' }}>


        <View style={{ flex: 4, justifyContent: 'center', }}>
            <TextInput placeholder='Nome'  style={{ fontSize: 20, height: 45, borderBottomColor: '#7B7777', borderBottomWidth: 2, width: '90%' }}/> 
            <TextInput placeholder='Email' style={{ fontSize: 20, height: 45, borderBottomColor: '#7B7777', borderBottomWidth: 2, width: '90%' }}/>
            <TextInput placeholder='Senha' style={{ fontSize: 20, height: 45, borderBottomColor: '#7B7777', borderBottomWidth: 2, width: '90%' }}/>
        </View>

        <View style={{ flex: 1 }}>
            <Button title='Cadastrar' color="#115e54" onPress={()=> false} />
        </View>
    </View>
    )
  }
