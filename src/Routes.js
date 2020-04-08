import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import FormLogin from './components/formLogin'
import FormCadastro from './components/formCadastro'
import Welcome from './components/Welcome'
import Main from './components/Main'
import formLogin from './components/formLogin'

//necessario
//npm install --save react-native-gesture-handler react-native-reanimated react-native-screens
//react-navigation-stack

export default function Routes(){
    return(
        <Router navigationBarStyle={{ backgroundColor: '#115E54'}} titleStyle={{ color: '#fff',  alignSelf: 'center' }}>
            <Stack key='root'>
                <Scene key='login'  component={FormLogin} hideNavBar />
                <Scene key='register' component={FormCadastro} hideNavBar={false} title='Register'/>
                <Scene key='welcome'  component={Welcome} hideNavBar />
                <Scene key='main'  component={Main}  hideNavBar />
            </Stack>
        </Router>
    )
}