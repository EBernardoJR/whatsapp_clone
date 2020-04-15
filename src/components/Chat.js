import React, { Component } from 'react';
import send from '../assets/send-button.png'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { changeMessage, sendMessage } from '../actions/appActions'
// import { Container } from './styles';

class Chat extends Component {

  sendMessageToAction(){

    if(this.props.message.length == 0 ){//não aceitar campos vazios
      
      return false
      
    }else{

    const { message, nameContact, contactEmail } = this.props
    //message foi adcionado ao componente assim q ele foi montado, e evoluido no input 
    //enviar as informações para a action sendMessage
    this.props.sendMessage(message, nameContact, contactEmail)
    this.props.changeMessage('')//apagando o campo

    }
  }

  render() {
   

    return (
        <View style={{ flex: 1, backgroundColor: '#eee4dc', padding: 10 }}>
            <View style={{ flex: 1, paddingBottom: 20 }}></View>


            <View style={{ flexDirection: 'row', height: 60, borderRadius: 4 }}>
                <TextInput
                value={this.props.message} 
                onChangeText={text => this.props.changeMessage(text)}
                placeholder='Enviar mensagem' 
                style={{ flex: 4, backgroundColor:'#fff', fontSize: 18, borderRadius: 6 }}//vai ocupar 4/5 do footer
                />

                <View style={{ justifyContent: 'center'}}>
                  <TouchableOpacity onPress={() => this.sendMessageToAction()} style={{ backgroundColor: '#115e44', marginLeft: 4, borderRadius: 40, width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={send} style={{ height: 30, width: 32 }}/>
                  </TouchableOpacity>
                </View>


            </View>
        </View>
    )
  }
}
//method
mapStateToProps = state => {
  return(
  {
    message: state.appReducer.message
  }
  )
}




export default connect(mapStateToProps, {
  changeMessage,
  sendMessage
})(Chat)
