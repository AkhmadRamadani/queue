import React, { Component } from 'react';
import { View, Dimensions, FlatList, Text, Alert } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';

import { SearchBar } from "react-native-elements";

export default class MainScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [
                {   key: "1",
                    nama: "Dr. Saiful Anwar Regional Hospital",
                    alamat: "Jalan Jaksa Agung Suprapto No. 2, Klojen",
                    antrian: "Antrian saat ini 3 dari 7"
                },
                {   key: "2",
                    nama: "Dr. Saiful Anwar Regional Hospital",
                    alamat: "Jalan Jaksa Agung Suprapto No. 2, Klojen",
                    antrian: "Antrian saat ini 3 dari 7"
                },
                {   key: "3",
                    nama: "Dr. Saiful Anwar Regional Hospital",
                    alamat: "Jalan Jaksa Agung Suprapto No. 2, Klojen",
                    antrian: "Antrian saat ini 3 dari 7"
                },
                {   key: "4",
                    nama: "Dr. Saiful Anwar Regional Hospital",
                    alamat: "Jalan Jaksa Agung Suprapto No. 2, Klojen",
                    antrian: "Antrian saat ini 3 dari 7"
                }
              ]
        };
    }

    // FlatListItemSeparator = () => {
    //     return (
    //       <View style={{ height: 1, width: "100%", backgroundColor: "#607D8B" }} />
    //     );
    // };
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
                    containerStyle={{backgroundColor: '#f3f3f3', borderRadius: 100}}
                    inputContainerStyle={{backgroundColor: '#f3f3f3'}}
                    searchIcon={false}
                    placeholder='Cari lainnya ...' />
            </View>

            <View style={{ marginBottom : 30 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                <FlatList
                    // style={{margin : 2 * AppConstants.ActiveTheme.AppObjectSpacing}}
                    data={ this.state.FlatListItems }
                    // ItemSeparatorComponent = {this.FlatListItemSeparator}
                    renderItem={({item}) => 
                        <View style={[GlobalStyles.Container, {alignItems: 'center', backgroundColor: 'white'}]}>
                            <ImageView
                                style={{borderRadius: 10, width: 50 * AppConstants.ActiveTheme.AppObjectSpacing, height:150, marginBottom: 10}}
                                imageSrc={require('../assets/images/images.png')}
                            />
                            <Text>
                                {item.nama}
                            </Text>
                            <Text>
                                {item.alamat}
                            </Text>
                            <Text style={{marginTop: 20}}>
                                {item.antrian}
                            </Text>
                        </View>}
                    
                />
            </View>
        </View>
    }
}
