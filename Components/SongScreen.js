import React, { Component } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import firebase from "firebase";


class SongScreen extends Component {

    state = {
        song: ""
    };

    constructor(props) {
        super(props);
        let id = this.props.navigation.state.params.item.id;
        firebase.database().ref('songs/'+ id).on('value', (data) => {
            this.setState(() => {
                return {
                    song: data.val()
                };
            });
        });
    };


  render(){
    const { goBack } = this.props.navigation;

    // todo: scroll view dont work as expected
    return (
      <View>
        <Text style={styles.titleStyle}> {this.state.song.title} </Text>
        <Text style={styles.titleStyle}> {this.state.song.alternative_title} </Text>


          <ScrollView>
              <Text> {this.state.song.text} </Text>
              <Text/>
          </ScrollView>

        <Button
          onPress={() => goBack()}
          title="Wroc"
          color="#841584"
        />
      </View>
    );
  }


}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    },
    titleStyle: {
        fontSize:30,
        padding: 10
    }
});


export default SongScreen;
