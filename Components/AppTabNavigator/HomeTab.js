import React, { Component } from "react";
import { View, Text, Button, Alert } from "react-native";
import { Icon } from "native-base";
import down from "../dowonloading";
import {FileSystem} from "expo";

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View>
        <Button
          onPress={()=>{
            FileSystem.deleteAsync(FileSystem.documentDirectory + "base.json");
            console.log("USUWANIE");
          }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => console.log(down())}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text> Home Tab </Text>
      </View>
    );
  }
}

export default HomeTab;
