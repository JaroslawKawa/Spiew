import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { List, ListItem,SearchBar } from "react-native-elements";
import { Icon, Item } from "native-base";
import {createStackNavigator} from 'react-navigation'
import data from "./base.json";
import _ from 'lodash';
import SongScreen from "../SongScreen"



class SearchTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      query: "",
      fullData: []
    };
  }

  contains = ({ nazwaCyr, nazwaLac }, query) => {
    
    if (nazwaLac.includes(query) || nazwaCyr.includes(query)) {
      console.log("text");
      return true;
    }
    
    return false;
  };



  componentDidMount() {
    this.setState({
      isLoading: false,
      dataSource: data.piosenki,
      fullData: data.piosenki
    });
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" style={{ color: tintColor }} />
    )
  };

  keyExtractor = (Item,index) =>index

  rednderItem = ({item}) => 
  <TouchableOpacity
  onPress={() => this.props.screenProps.rootNavigation.navigate('SongScreen',{item})}

  >
  <ListItem
  title={item.nazwaLac}
  subtitle={item.nazwaCyr}/>
</TouchableOpacity>

  



  contains = ({ nazwaLac, nazwaCyr }, query) => {

  if (nazwaLac.toLowerCase().includes(query) || nazwaCyr.toLowerCase().includes(query) ) {
    console.log("text",nazwaLac.toLowerCase())
    return true;
  }

  return false;
};


  handleSearch = (text)=>{
    const formatQuery = text.toLowerCase();
    const dataSource = _.filter(this.state.fullData, item =>{
        return this.contains(item,formatQuery);
    });

    this.setState({query: text,dataSource});
  };





  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round onChangeText={this.handleSearch} />;
  };


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.dataSource}
        renderItem={this.rednderItem}
        ListHeaderComponent={this.renderHeader}/>
    );
  }
}



const searchTabStackNavigator = createStackNavigator ({
  SearchTab:{
    screen: SearchTab
  },
  SongScreen:{
    screen: SongScreen
  }
  
  })




const styles = StyleSheet.create({
  info: {
    fontSize: 20
  }
});

export default SearchTab;
