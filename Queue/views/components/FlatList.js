import React, { Component } from 'react';
import { GlobalStyles } from '../../assets/GlobalStyles';
import { View, FlatList, Text,TouchableOpacity, Alert,Image, RefreshControl ,Dimensions, ImageBackground} from 'react-native';
   
import { AppConstants } from "../../systems/Constants";
import ImageView from '../components/ImageView';

export default class FlatListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            
        };
    }

    FlatListItemSeparator = () => {
        return (
          <View style={{ height: 2, width: "100%", backgroundColor: "#EDEDED" }} />
        );
    };

    GetItem(item) {
        this.props.onPress(item);
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        fetchData().then(() => {
          this.setState({refreshing: false});
        });
      }
      

    render() {
        return (
            <View>
                <FlatList
                    data={ this.props.data }
                    sisaAntrean = {this.props.sisaAntrean}
                    showsVerticalScrollIndicator= {false}
                    renderItem={({item}) =>
                    <TouchableOpacity activeOpacity={0.8} 
                        onPress={() => this.props.onItemClick(
                            {
                                picture : "http://192.168.43.2/apiqueue/v1/"+ item.picture,
                                alamat: item.address,
                                name: item.name_place,
                                id: item.id_place,
                                status : item.status
                            }
                        )}>
                        <View style={{alignItems: 'center',
                        marginTop: 8
                                     }}>
                            <View style={{ alignItems :'center',
                            width: '93%', borderRadius : 24, paddingBottom : 8}}>
                                <ImageBackground
                                    style={{width: Dimensions.get('window').width / 1 - (16), 
                                            height: Dimensions.get('window').height / 3.2}}
                                    source={{uri : "http://192.168.43.2/apiqueue/v1/"+ item.picture}}
                                >
                                <View style={{flex : 1,justifyContent : "flex-end",width: '100%',}}>
                                    <View style={{height : '32%', width : '100%', paddingTop : 4,
                                        paddingHorizontal: 16,
                                        backgroundColor : 'rgba(0,0,0,0.5)'}}>
                                        <Text style={{color : '#fff',fontWeight : 'bold', fontSize : 22}}>
                                            {item.name_place}
                                        </Text>
                                        <Text style={{color : '#fff'}}>
                                            {item.address}
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            </View>
                            
                        </View></TouchableOpacity>}keyExtractor={(item,index) => item.id_place}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.props.refreshing}
                                    onRefresh={this.props._onRefresh}
                                />
                            }    
                />
            </View>
        );
    }
    
}