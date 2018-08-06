import React, { Component } from "react";
import { View,Button, Text } from "react-native";
import { Icon } from "native-base";
import { Image } from 'react-native';
import { FileSystem } from 'expo';

class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor})=>(
        <Icon name="person" style={{color:tintColor}}/>
       
    )
}


  render() {
    
    return (
      
      (<View>
               
               
       </View>
      )
    );
  }
}

export default ProfileTab;
