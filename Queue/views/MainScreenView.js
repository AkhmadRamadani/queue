import React, { Component } from 'react';
import { View, Dimensions, ScrollView,Text, Alert, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import FlatListNew from './components/FlatList';

import { SearchBar } from "react-native-elements";

export default class MainScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {}]}>
                <View style={{height : Dimensions.get('window').height/ 10,
                        flexDirection : 'row',borderBottomWidth: 2, justifyContent : 'center',borderBottomColor: '#EDEDED'}}>
                    <View style={{flex : 1, alignItems : "flex-end"}}>
                        <ImageView
                            imageSrc={require('../assets/images/Label.png')}
                            width={Dimensions.get('window').width / 3}
                            height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                            />
                    </View>
                    <View style={{flex : 0.45, alignItems : 'flex-end',justifyContent : "flex-start",
                            marginRight : 16, marginBottom : 10}}>
                            <TouchableOpacity activeOpacity ={0.5} 
                                              onPress={()=>this.props.onPressSearch()}>
                                <ImageView
                                    imageSrc={require('../assets/images/search.png')}
                                    width={Dimensions.get('window').width / 14}
                                    height={Dimensions.get('window').height / 10}
                                    />
                            </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex : 1}}>
                    <FlatListNew 
                        _onRefresh={this.props._onRefresh} refreshing={this.props.refreshing}
                        data={this.props.data} sisaAntrean={this.props.sisaAntrean}
                        onPress={()=>this.props.onPressClick()}
                        onItemClick={(params) => this.props.onItemClick(params)} />
                </View>
                </View>
    }
}
