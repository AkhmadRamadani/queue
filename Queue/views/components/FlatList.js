import React, { Component } from 'react';
import { GlobalStyles } from '../../assets/GlobalStyles';
import { View, FlatList, Text,TouchableOpacity, Alert, RefreshControl } from 'react-native';

import { AppConstants } from "../../systems/Constants";
import ImageView from '../components/ImageView';

export default class FlatListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            FlatListItems: [
                {   key: "1",
                    nama: "Dr. Saiful Anwar Regional Hospital",
                    alamat: "Jalan Jaksa Agung Suprapto No. 2, Klojen",
                    antrian: "Antrian saat ini 3 dari 7",
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
                // { key: "Skptricks" },
                // { key: "Sumit" },
                // { key: "Amit" },
                // { key: "React" },
                // { key: "React Native" },
                // { key: "Java" },
                // { key: "Javascript" },
                // { key: "PHP" },
              ]
        };
    }

    FlatListItemSeparator = () => {
        return (
          <View style={{ height: 2, width: "100%", backgroundColor: "#EDEDED" }} />
        );
    };

    GetItem(item) {
        Alert.alert(item);
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.setState({refreshing: false});
        
        // fetchData().then(() => {
        //   this.setState({refreshing: false});
        // });
      }
      

    render() {
        return (
            <View>
                <FlatList
                    data={ this.state.FlatListItems }
                    renderItem={({item}) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={this.GetItem.bind(this, item.nama)}>
                        <View style={{alignItems: 'center',
                        marginVertical : 8
                                     }}>
                            <View style={{borderColor :'#ededed', borderStyle : "solid",
                            borderWidth : 2, alignItems : "center",
                            width: '93%', borderRadius : 24}}>
                            <ImageView
                                style={{ borderTopLeftRadius: 10,
                                         borderTopRightRadius: 10, 
                                         width: 50 * AppConstants.ActiveTheme.AppObjectSpacing, 
                                         height:150, marginBottom: 8}}
                                imageSrc={require('../../assets/images/images.png')}
                                // onPress={this.GetItem.bind(this, item.key)}
                            />
                            <Text>
                                {item.nama}
                            </Text>
                            <Text>
                                {item.alamat}
                            </Text>
                            <Text style={{marginTop : 20, marginBottom : 8}}>
                                {item.antrian}
                                </Text>
                            </View>
                        </View></TouchableOpacity>}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }    
                />
            </View>
        );
    }
    
}