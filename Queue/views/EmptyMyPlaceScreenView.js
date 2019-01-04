import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import ImageView from './components/ImageView';

export default class EmptyMyPlaceScreenView extends Component {

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
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing }}>
                <Text style={{ fontSize: 20 }}>Anda belum mendaftarkan tempat</Text>
                <Text style={{ fontSize: 20 }}>Klik My Profile -> Tambah tempat</Text>
                <Text style={{ fontSize: 20 }}>dan isi data tempat anda</Text>
            </View>
        </View>
    }

}