import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import Input from './components/Input';
import Button from './components/Button';

export default class ForgotCodeView extends Component {
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
                    style={{ alignItems: "center", justifyContent: "center" }}
                    label={'Masukkan kode yang telah anda terima dikolom dibawah ini.'}
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
                        label={'Kirim'}
                        onPress={() => this.props.onPressNew()}
                        radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing }}>
                    <TextLine
                        label={'05:00'}
                        type={'h6'}/>
                    <TextLine
                        label={'Belum menerima kode? Kirim lagi'}
                        type={'h6'} />
                </View>
            </View>
        </View>
    }
}
