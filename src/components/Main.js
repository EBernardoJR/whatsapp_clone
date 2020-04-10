import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TabBarMenu from './TabBarMenu'
import Chats from './Chats'
import Contacts from './Contacts'




const initialLayout = { width: Dimensions.get('window').width };

export default function Main() {


    //estados da aplicacao
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    //rotas
    { key: 'first', title: 'Chats' },
    { key: 'second', title: 'Contacts' },
  ]);

  //configurando as cenas das rotas
  //key corresponde as propriedades da renderScene
  const renderScene = SceneMap({
    first: Chats,//componentes
    second: Contacts,
  });

  function renderTabBar(props){
    return(
        <TabBarMenu {...props}/>
    )
  }

  return (
    <>
    <StatusBar backgroundColor='#115e44' barStyle="light-content"/>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    
    />
    </>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});