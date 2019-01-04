import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import Button from './components/Button';
import ImageView from './components/ImageView';

export default class OnProcessScreenView extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {}]}>
            <View style={{justifyContent:"center", alignItems:"center", borderBottomWidth: 2, borderBottomColor: '#EDEDED'}}>
                <ImageView 
                    imageSrc={require('../assets/images/myplace.png')}
                    width={Dimensions.get('window').width / 3}
                    height={7 * AppConstants.ActiveTheme.AppObjectSpacing}/>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 1 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                <Text style={{fontSize: 25}}>Dalam Proses</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 3 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                <ImageView
                    imageSrc={require('../assets/images/user.png')}
                    width={Dimensions.get('window').width / 2}
                    height={10 * AppConstants.ActiveTheme.AppObjectSpacing}
                />
                <View style={{ flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontSize: 23, fontWeight:'bold'}}>A0003</Text>
                    <Text style={{fontSize: 20}}>Ariana Grande</Text>
                </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                <Text style={{fontSize:20}}>Status</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                <Button
                    style={{ backgroundColor: "#3399f8" }}
                    width={Dimensions.get('window').width - (25 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (1 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    label={'Dalam Proses'}
                    onPress={()=> this.props.onPressDalamProcess()}
                />
                <Button
                    style={{ backgroundColor: "#FFB300" }}
                    width={Dimensions.get('window').width - (25 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (1 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    label={'Selesai'}
                    onPress={()=> this.props.OnPressSelesai()}
                />
            </View>

        </View>
    }

}