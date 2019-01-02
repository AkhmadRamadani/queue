import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import Input from './components/Input';
import Button from './components/Button';

export default class ForgotScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, { paddingHorizontal: 2 * AppConstants.ActiveTheme.AppObjectSpacing }]}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ alignItems: "center" }}>
                    <ImageView
                        imageSrc={require('../assets/images/lupapass.png')}
                        width={Dimensions.get('window').width / 1}
                        height={10 * AppConstants.ActiveTheme.AppObjectSpacing}
                        style={{ marginVertical: 3 * AppConstants.ActiveTheme.AppObjectSpacing }} />
                </View>
                <TextLine
                    style={{ justifyContent: "center", alignItems: "center" }}
                    label={'Masukkan email anda dan anda akan dikirim kode.'}
                    type={'h6'}>
                </TextLine>
                <View style={{ marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing }}>
                    <Input
                        ImageSrc={require('../assets/images/mail.png')}
                        style={{ borderRadius: 3 * AppConstants.ActiveTheme.AppObjectSpacing }}
                        placeholder={'Email'}
                        radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                </View>
                <View style={{
                    marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing,
                    justifyContent: "flex-start", alignItems: "center"}}>
                <Button
                    style={{ borderRadius: 4 * AppConstants.ActiveTheme.AppObjectSpacing }}
                    width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (1 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    label={'Proses'}
                    onPress={() => this.props.onPressCode()}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing} />   
                </View>
            </View>
        </View>
    }
}
