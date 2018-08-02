import React, { Component } from 'react';
import { View, Text} from 'react-native';

class SongScreen extends Component {
  
  render() {
    return (
      <View>
        <Text> {this.props.navigation.state.params.item.nazwaLac} </Text>
        <Text> {this.props.navigation.state.params.item.nazwaCyr} </Text>
        <Text> {this.props.navigation.state.params.item.tekst} </Text>
        
        
        
      </View>
    );
  }
}

export default SongScreen;
