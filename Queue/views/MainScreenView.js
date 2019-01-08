import React, { Component } from 'react';
import { View, Dimensions, Text, Alert, TouchableHighlight } from 'react-native';
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
        return <View>
        
            <View style={{justifyContent:"center", alignItems:"center", borderBottomWidth: 2, borderBottomColor: '#EDEDED'}}>
                
                <ImageView
                    imageSrc={require('../assets/images/Label.png')}
                    width={Dimensions.get('window').width / 3}
                    height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                   
                    />
                
            </View>

              
            <View style={{ margin : 1 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                <SearchBar
                    lightTheme
                    containerStyle={{backgroundColor: '#EDEDED', borderRadius: 100}}
                    inputContainerStyle={{backgroundColor: '#EDEDED'}}
                    inputStyle={{backgroundColor: '#EDEDED', color : '#000'}}
                    searchIcon={true}
                    placeholder='Cari lainnya ...' />
            </View>

            <View style={{ marginBottom : 30 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                <FlatListNew data={this.props.data} sisaAntrean={this.props.sisaAntrean}
                     onPress={()=>this.props.onPressClick()}
                    onItemClick={(params) => this.props.onItemClick(params)} />
            </View>
        </View>
    }
}
