import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import MainScreen from './Components/MainScreen'
import SongScreen from './Components/SongScreen'
import down from './Components/dowonloading'

export default class App extends React.Component {
  constructor(){
    super();
    global.baza=[];
    console.log("START APKI");
    /* down().then((data)=>{
      console.log(data);
    }); */
    
    
  }
  render() {
    return (
      
        <AppStackNavigator/>

    );
  }
}


const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen
  },
  SongScreen:{
    screen: SongScreen,
    navigationOptions: () => ({
      header: null,
      headerMode: 'none'
    }),
  },


})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
