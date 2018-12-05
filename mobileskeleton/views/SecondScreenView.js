import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';

export default class SecondScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <View style={[GlobalStyles.Container, {flex: 1}]}>
            <TextLine
                style={{
                    alignItems: 'center',
                }}
                textStyle={{ color: AppConstants.ActiveTheme.AppFontBlackColor }}
                type={'h4'}
                label={'Halaman Kedua'}
            />
        </View>
    }
}
