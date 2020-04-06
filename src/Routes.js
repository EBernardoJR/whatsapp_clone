import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import FormLogin from './components/formLogin'
import FormCadastro from './components/formCadastro'
import Welcome from './components/Welcome'

//necessario
//npm install --save react-native-gesture-handler react-native-reanimated react-native-screens
//react-navigation-stack

export default function Routes(){
    return(
        <Router>
            <Stack key='root'>
                <Scene key='login'  component={FormLogin} />
                <Scene key='register'  component={FormCadastro} />
                <Scene key='welcome'  component={Welcome} />
            </Stack>
        </Router>
    )
}