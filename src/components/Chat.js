import React, { Component } from 'react';
import send from '../assets/send.png'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { changeMessage, sendMessage } from '../actions/appActions'
// import { Container } from './styles';

class Chat extends Component {
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
                  <TouchableOpacity onPress={() => this.props.sendMessage(this.props.message)} style={{ backgroundColor: '#115e44', marginLeft: 4, borderRadius: 40, width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={send} style={{ height: 38, width: 38 }}/>
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
