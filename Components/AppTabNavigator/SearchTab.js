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
import firebase from "firebase";





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

    componentDidMount() {
        let test =
            {
                id: 1,
                title: 'Byla mene maty',
                alternative_title: 'била мене мати',
                text: 'Била мене мати\n' +
                    'Березовим прутом,\n' +
                    'Щоби я не стояла\n' +
                    'З молодим рекрутом.\n' +
                    'Щоби я не стояла\n' +
                    'З молодим рекрутом.',
                version: 1,
                time_stamp: new Date().toLocaleString(),
                tags: ['debilna', 'fiut'],
                authors: null,
                change_notes: null
            };

        let test2 =
            {
                id: 2,
                title: 'Byla mene maty2',
                alternative_title: 'била мене мати2',
                text: 'Била мене мати\n' +
                    'Березовим прутом,\n' +
                    'Щоби я не стояла\n' +
                    'З молодим рекрутом.\n' +
                    'Щоби я не стояла\n' +
                    'З молодим рекрутом.',
                version: 2,
                time_stamp: new Date().toLocaleString(),
                tags: ['debilna', 'fiut'],
                authors: null,
                change_notes: null
            };

        this.setState({
            isLoading: false,
            dataSource: [test, test2],
            fullData: [test, test2]
        });

        // todo: no idea why its not working, maybe cant put it to componentDidMount
        // firebase.database().ref('songs').on('value', (data) => {
        //     this.setState({
        //         isLoading: false,
        //         dataSource: data.val(),
        //         fullData: data.val()
        //     });
        // });


    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-search" style={{ color: tintColor }} />
        )
    };

    keyExtractor = (Item,index) =>index

    renderItem = ({item}) => (
        <TouchableOpacity
            onPress={() => this.props.screenProps.rootNavigation.navigate('SongScreen',{item})}

        >
            <ListItem
                title={item.title}
                subtitle={item.alternative_title}/>
        </TouchableOpacity>
    );

    contains = ({ nazwaLac, nazwaCyr }, query) => {
        return nazwaLac.toLowerCase().includes(query) || nazwaCyr.toLowerCase().includes(query);

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
                renderItem={this.renderItem}
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
