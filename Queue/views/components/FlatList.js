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
                    sisaAntrean = {this.props.sisaAntrean}
                    showsVerticalScrollIndicator= {false}
                    renderItem={({item}) =>
                    <TouchableOpacity activeOpacity={0.8} 
                        onPress={() => this.props.onItemClick(
                            {
                                alamat: item.address,
                                name: item.name_place,
                                id: item.id_place,
                            }
                        )}>
                        <View style={{alignItems: 'center',
                        marginVertical : 8
                                     }}>
                            <View style={{borderColor :'#ededed', borderStyle : "solid",
                            borderWidth : 2, alignItems : "center", elevation : 1,
                            width: '93%', borderRadius : 24, paddingBottom : 8}}>
                            <ImageView
                                style={{
                                         borderTopLeftRadius: 12,
                                         borderTopRightRadius: 12, 
                                         width: Dimensions.get('window').width / 1, 
                                         height: Dimensions.get('window').height /4.28, marginBottom: 8}}
                                imageSrc={require('../../assets/images/images.png')}
                            />
                            <Text style={{fontWeight : 'bold', fontSize : 18}}>
                                {item.name_place}
                            </Text>
                            <Text>
                                {item.address}
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