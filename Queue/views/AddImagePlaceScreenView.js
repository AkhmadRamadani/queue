import React, { Component } from 'react';
import { View, Dimensions, Text , Alert,Image,TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import  ImageView  from "./components/ImageView";
import Button  from './components/Button';
export default class AddImagePlaceScreenView extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {}]}>
                    <View style={{ justifyContent: "center", alignItems: "center", borderBottomWidth: 2, borderBottomColor: '#EDEDED' }}>
                        <ImageView
                            imageSrc={require('../assets/images/myplace.png')}
                            width={Dimensions.get('window').width / 3}
                            height={7 * AppConstants.ActiveTheme.AppObjectSpacing} />
                    </View>

                    <View style={{flex : 1,alignItems :'center',marginVertical : 24}}>
                        <View   style={{borderWidth : 2, paddingTop : 2.5, paddingLeft : 2.5,
                                width : Dimensions.get("window").width - (48),
                                height : Dimensions.get("window").height/3,
                                marginBottom : 4}}>
                            <Image  style={{ marginBottom : 20,
                                    width : Dimensions.get("window").width - (58),
                                    height : Dimensions.get("window").height/3.2}} 
                                    source={this.props.imageSource}>

                            </Image>
                        </View>
                        <View style={{marginBottom : 20}}>
                        <Button
                            style={{borderRadius : 4 * AppConstants.ActiveTheme.AppObjectSpacing}}
                            width={Dimensions.get('window').width - (10 * AppConstants.ActiveTheme.AppObjectSpacing)}
                            height={AppConstants.ActiveTheme.AppInputHeightDefault + (1* AppConstants.ActiveTheme.AppObjectSpacing)}
                            label={'Select Photo'}
                            onPress={this.props.selectPhoto}
                            radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                        </View>
                        <Button
                            style={{borderRadius : 4 * AppConstants.ActiveTheme.AppObjectSpacing}}
                            width={Dimensions.get('window').width - (10 * AppConstants.ActiveTheme.AppObjectSpacing)}
                            height={AppConstants.ActiveTheme.AppInputHeightDefault + (1* AppConstants.ActiveTheme.AppObjectSpacing)}
                            label={'Send Data'}
                            onPress={this.props.sendData}
                            radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                    </View>
                </View>
    }
}