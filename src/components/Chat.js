import React, { Component } from 'react';
import send from '../assets/send-button.png'
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { changeMessage, sendMessage } from '../actions/appActions'
// import { Container } from './styles';
import { userChatFetch } from '../actions/appActions'
import _ from 'lodash'



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

  //usando componentWillMoun

  componentWillMount(){
    //o email do usuario foi enviado ao navegar para a tela
    this.props.userChatFetch(this.props.contactEmail)
  }

  componentWillReceiveProps(nextProps){
    //no momento em que o estado chat for atualizado
    if(this.props.contactEmail != nextProps.contactEmail){
      //atualizando o componente buscando a conversa com a nova propriedade
      this.props.userChatFetch(nextProps.contactEmail)
    }
  }

  //data é toda a conversa passada na propriedade data
  renderChat(data){
    console.log(data)
    if(data.item.type === 'e'){
      //flex-end no final da linha
    return(
      <View style={{ alignItems: 'flex-end', marginTop: 5, marginBottom: 5, marginLeft: 40 }}>
        <Text style={{ fontSize: 18, padding: 10, backgroundColor: '#dbf5b4', elevation: 1, borderRadius: 5 }}>{data.item.message}</Text>
      </View>
    )

    }else {
      return(
        <View style={{ alignItems: 'flex-start', marginTop: 5, marginBottom: 5, marginRight: 40, borderRadius: 5 }}>
        <Text style={{ fontSize: 18, padding: 10, backgroundColor: '#f7f7f7', elevation: 1, borderRadius: 5 }}>{data.item.message}</Text>
      </View>
      )
    }

  }


  render() {
   

    return (
        <View style={{ flex: 1, backgroundColor: '#eee4dc', padding: 10 }}>
            <View style={{ flex: 1, paddingBottom: 20 }}>
                <FlatList 
                data={this.props.chat}
                renderItem={data => this.renderChat(data)}
                keyExtractor={item => item.uid}

                />
            </View>


            <View style={{ flexDirection: 'row', height: 60, borderRadius: 4 }}>
                <TextInput
                autoCapitalize
                autoCorrect
                value={this.props.message} 
                onChangeText={text => this.props.changeMessage(text)}
                placeholder='Enviar mensagem' 
                style={{ flex: 4, backgroundColor:'#fff', fontSize: 18, borderRadius: 6 }}//vai ocupar 4/5 do footer
                />

                <View style={{ justifyContent: 'center'}}>
                  <TouchableOpacity onPress={() => this.sendMessageToAction()} style={{ backgroundColor: '#115e44', marginLeft: 4, borderRadius: 40, width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={send} style={{ height: 30, width: 30 }}/>
                  </TouchableOpacity>
                </View>


            </View>
        </View>
    )
  }
}
//method
mapStateToProps = state => {

  const chat = _.map(state.chatListReducer, (val, uid) => {
    return { ...val, uid }//transforma de objeto para array
  })

  return(
  {
    chat,
    message: state.appReducer.message
  }
  )
}




export default connect(mapStateToProps, {
  changeMessage,
  sendMessage,
  userChatFetch
})(Chat)
