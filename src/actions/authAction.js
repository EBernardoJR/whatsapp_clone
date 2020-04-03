//mudar estado do redux 
//action creator
export const changeEmail = text => {
    //vai associar ao reducer (authReducer) e vai ficar disponivel no parametro action
    return {
        type: 'change_email',
       //payloads => envio das informações enviadas ao reduce
       payload: text 
    }
}

export const changePassword = text => {
    return {
        type: 'change_password',
        payload: text
    }
}

export const changeName = text => {
    return {
        type: 'change_name',
        payload: text
    }
}