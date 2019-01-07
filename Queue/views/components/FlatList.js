import React, { Component } from 'react';
import { GlobalStyles } from '../../assets/GlobalStyles';
import { View, FlatList, Text,TouchableOpacity, Alert, RefreshControl ,Dimensions} from 'react-native';
   
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
                    data={ this.props.data }
                    showsVerticalScrollIndicator= {false}
                    renderItem={({item}) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={this.GetItem.bind(this, item.name)}>
                        <View style={{alignItems: 'center',
                        marginVertical : 8
                                     }}>
                            <View style={{borderColor :'#ededed', borderStyle : "solid",
                            borderWidth : 2, alignItems : "center",
                            width: '93%', borderRadius : 24, elevation : 1}}>
                            <ImageView
                                style={{
                                         borderTopLeftRadius: 16,
                                         borderTopRightRadius: 16, 
                                         width: Dimensions.get('window').width / 1.091, 
                                         height: 132, marginBottom: 8}}
                                imageSrc={require('../../assets/images/images.png')}
                            />
                            <Text>
                                {item.name}
                            </Text>
                            <Text>
                                {item.address}
                            </Text>
                            <Text style={{marginTop : 20, marginBottom : 8}}>
                                wkwk
                                </Text>
                            </View>
                        </View></TouchableOpacity>}keyExtractor={(item,index) => item.id_place}
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