import React, { Component } from 'react';
import { View, Dimensions, Text , TouchableHighlight, Alert, TouchableOpacity} from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import FlatListComponent from './components/FlatList';
import ImageView from './components/ImageView';
import TextLine from './components/TextLine';

export default class AllPlaceView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {flex: 1}]}>
                    <View style={{height : Dimensions.get('window').height/ 10,
                        flexDirection : 'row',borderBottomWidth: 2, justifyContent : 'center',borderBottomColor: '#EDEDED'}}>
                    <View style={{flex : 1, alignItems : "center"}}>
                        <ImageView
                            imageSrc={require('../assets/images/myplace.png')}
                            width={Dimensions.get('window').width / 3}
                            height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                            />
                    </View>
                </View>
                <View style={{flex : 1}}>
                {(()=>{
                    if (this.props.status != true) {
                        return(<View style={{justifyContent : 'center',alignItems : 'center', flex : 1}}>
                                <Text style={{ fontSize: 20 }}>Anda belum mendaftarkan tempat</Text>
                                <Text style={{ fontSize: 20 }}>Klik My Profile -> Tambah tempat</Text>
                                <Text style={{ fontSize: 20 }}>dan isi data tempat anda</Text>
                            </View>
                        )
                    }else if (this.props.status == true) {
                        return(
                        <FlatListComponent
                            _onRefresh={this.props._onRefresh} refreshing={this.props.refreshing}
                            data={this.props.data} sisaAntrean={this.props.sisaAntrean}
                            onItemClick={(params)=>this.props.toMyPlace(params)}/>)
                    }
                })()}
                </View>
                </View>
    }
}