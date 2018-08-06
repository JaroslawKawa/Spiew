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
import data from "./base.json";
import _ from 'lodash';
import down from '../dowonloading'





class SearchTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      xd:[],
      dataSource: [],
      query: "",
      fullData: []
    };
  }

  contains = ({ nazwaCyr, nazwaLac }, query) => {
    
    if (nazwaLac.includes(query) || nazwaCyr.includes(query)) {
      
      return true;
    }
    
    return false;
  };



/*   
poloaczenie z serverem
componentDidMount() {
    
    down()
    .then((baza)=>{
      this.setState({
        isLoading: false,
        dataSource: _.take(JSON.parse(baza).piosenki,5),
        fullData: JSON.parse(baza).piosenki
      });
    })
  } */
  componentDidMount() {
    this.setState({
      isLoading: false,
      dataSource: _.take(data.piosenki,5),
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
    
    return true;
  }

  return false;
};


  handleSearch = _.debounce((text)=>{
    const formatQuery = text.toLowerCase();
    const dataSource = _.filter(this.state.fullData, item =>{
        return this.contains(item,formatQuery);
    });

    this.setState({query: text,dataSource});
  });





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






const styles = StyleSheet.create({
  info: {
    fontSize: 20
  }
});

export default SearchTab;
