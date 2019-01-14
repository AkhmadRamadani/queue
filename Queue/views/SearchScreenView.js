import React, { Component } from 'react';
import { View, Dimensions, Text ,TouchableOpacity} from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import ImageView from './components/ImageView';
import Input from './components/InputSearch';
import FlatListComponent from './components/FlatList';
import TextLine from './components/TextLine';

export default class SearchScreenView extends Component {

    constructor(props) {

        super(props);

        this.state = {
            disable : true
        };
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {}]}>
                    <View style ={{ width : Dimensions.get("window").width,
                                    height : Dimensions.get("window").height/10, paddingVertical : 3 ,
                                    borderBottomWidth : 2, borderBottomColor : "#ededed"}}>
                        <View style={{ flex : 1,flexDirection : "row",
                                    width : Dimensions.get("window").width, 
                                    height : Dimensions.get("window").height/12.5 , alignContent :'center',
                                    justifyContent : 'center', alignItems :'flex-start'}}>
                            <Input
                                autoFocus = {true}
                                imageSrc={require('../assets/images/search.png')}
                                style={{width : Dimensions.get("window").width/1.2,
                                        marginRight : 16,marginBottom : 0,borderRadius : 1 * AppConstants.ActiveTheme.AppObjectSpacing}}
                                placeholder={'Search....'}
                                onChangeText={this.props.search}
                                radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                                
                            <TouchableOpacity onPress={this.props.onPressSearch} 
                                        style={{marginRight : 8,alignItems :'center', justifyContent :'center'}}>
                                <ImageView
                                        imageSrc={require('../assets/images/search.png')}
                                        width={Dimensions.get('window').width / 13}
                                        height={Dimensions.get('window').height / 10}
                                        />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {(()=>{
                        if (this.props.status == true) {
                            return (
                            <View style={{flex : 1}}>
                                <FlatListComponent
                                    _onRefresh={this.props._onRefresh} refreshing={this.props.refreshing}
                                    data={this.props.data} sisaAntrean={this.props.sisaAntrean}
                                    onItemClick={(params)=>this.props.onPressClick(params)}/>
                            </View>
                            )
                        }else if(this.props.status == false){  
                            return(  
                            <View style={{flex : 1, justifyContent : "center", alignItems :'center'}}>
                                <Text>Data yang Anda Cari Kosong</Text>
                            </View>
                            )
                        }
                    })()}
                </View>
    }

}