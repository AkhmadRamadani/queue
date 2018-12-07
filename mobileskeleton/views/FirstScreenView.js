import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import Input from './components/Input';
import Button from './components/Button';

export default class FirstScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, { paddingHorizontal: 2 * AppConstants.ActiveTheme.AppObjectSpacing }]}>
            <View style={{ flex: 1 }}>
                <ImageView
                    imageSrc={require('../assets/images/logo.png')}
                    width={Dimensions.get('window').width / 2}
                    height={10 * AppConstants.ActiveTheme.AppObjectSpacing}
                    style={{ marginVertical: 3 * AppConstants.ActiveTheme.AppObjectSpacing }} />
                <Input
                    placeholder={'username/email'}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                <Input
                    placeholder={'password'}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing}
                    secureMode={true} />
            </View>
            <View style={{ flex: 0.25, justifyContent: 'center' }}>
                <Button
                    width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (1.5 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    label={'SIGN IN'}
                    onPress={()=>this.props.onPress()}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing} />
            </View>

            {/* <TextLine
                style={{
                    alignItems: 'center',
                }}
                textStyle={{ color: AppConstants.ActiveTheme.AppFontBlackColor }}
                type={'h4'}
                label={'Halaman Pertama'}
            /> */}
        </View>
    }
}
