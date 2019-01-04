import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import Button from './components/Button';
import ImageView from './components/ImageView';
import InputBottom from './components/InputBottom';

export default class MakePlaceScreenView extends Component {

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
            <View style={{ flexDirection: 'column', justifyContent: "center", alignItems: "center", marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing }}>
                <Text style={{fontSize:20}}>Halo, tolong isi data tempat anda</Text>
                <Text style={{ fontSize: 20 }}>dengan benar</Text>  
            </View>
            <View style={{ flex: 1, paddingHorizontal: 5 * AppConstants.ActiveTheme.AppObjectSpacing, marginTop: 5 * AppConstants.ActiveTheme.AppObjectSpacing }}>
                <InputBottom
                    style={{ borderRadius: 0 * AppConstants.ActiveTheme.AppObjectSpacing, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0 }}
                    placeholder={'Nama tempat'} />

                <InputBottom
                    style={{ borderRadius: 0 * AppConstants.ActiveTheme.AppObjectSpacing, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0 }}
                    placeholder={'Alamat tempat'} />
            </View>
            <View style={{
                marginBottom: 4 * AppConstants.ActiveTheme.AppObjectSpacing, justifyContent: "center", alignItems: "center"
            }}>
                <Button
                    style={{ color : '#000',borderColor: '#BDBDBD',borderStyle : 'solid', borderWidth : 2,backgroundColor : 'transparent'}}
                    width={Dimensions.get('window').width - (10 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (13 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    label={'masijdksajska'}
                    ></Button>
            </View>
            <View style={{
                marginBottom: 4 * AppConstants.ActiveTheme.AppObjectSpacing, justifyContent: "center", alignItems: "center"
            }}>
                <Button
                    style={{ borderRadius: 4 * AppConstants.ActiveTheme.AppObjectSpacing }}
                    width={Dimensions.get('window').width - (10 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (1 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    label={'DAFTAR'}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing} 
                    onPress={()=> this.props.onPressCreate()}/>
            </View>

        </View>
    }

}