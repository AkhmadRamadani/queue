import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';

export default class MyPlaceScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {}]}>
        
            <View style={{justifyContent:"center", alignItems:"center", borderBottomWidth: 2, borderBottomColor: '#EDEDED'}}>
                <ImageView
                    imageSrc={require('../assets/images/myplace.png')}
                    width={Dimensions.get('window').width / 3}
                    height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                    />
            </View>  

            <View style={[GlobalStyles.Container,{alignItems: 'center', flex: 1}]}>
                <TextLine
                    textStyle={{ color: AppConstants.ActiveTheme.AppFontBlackColor }}
                    type={'h4'}
                    label={'Anda belum mendaftarkan'}
                />
                <TextLine
                textStyle={{ color: AppConstants.ActiveTheme.AppFontBlackColor }}
                type={'h4'}
                label={'Tempat anda'}
            />
            </View>
        </View>
    }
}
