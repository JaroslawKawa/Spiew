import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import MainScreen from './Components/MainScreen'
import SongScreen from './Components/SongScreen'

export default class App extends React.Component {
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
    screen: SongScreen
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
