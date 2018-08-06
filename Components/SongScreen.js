import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class SongScreen extends Component {
  
  
  render() {
    const { goBack } = this.props.navigation;
    
    return (
      <View>
        <Text> {this.props.navigation.state.params.item.nazwaLac} </Text>
        <Text> {this.props.navigation.state.params.item.nazwaCyr} </Text>
        <Text> {this.props.navigation.state.params.item.tekst} </Text>
        <Button
          onPress={() => goBack()}
          title="Wroc"
          color="#841584"
        />
      </View>
    );
  }
}

export default SongScreen;
