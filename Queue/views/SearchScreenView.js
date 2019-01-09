import React, { Component } from 'react';
import { View, Dimensions, Text ,TouchableOpacity} from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import ImageView from './components/ImageView';
import Input from './components/Input';
import FlatListComponent from './components/FlatList';

export default class SearchScreenView extends Component {

    constructor(props) {

        super(props);

        this.state = {};
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
                                imageSrc={require('../assets/images/search.png')}
                                style={{width : Dimensions.get("window").width/1.2,
                                        marginRight : 16,marginBottom : 0,borderRadius : 1 * AppConstants.ActiveTheme.AppObjectSpacing}}
                                placeholder={'Search....'}
                                onChangeText={this.props.search}
                                radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                            <TouchableOpacity style={{marginRight : 8,alignItems :'center', justifyContent :'center'}}>
                                <ImageView
                                        imageSrc={require('../assets/images/search.png')}
                                        width={Dimensions.get('window').width / 13}
                                        height={Dimensions.get('window').height / 10}
                                        />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatListComponent>
                        
                    </FlatListComponent>
                </View>
    }

}