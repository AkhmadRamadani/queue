import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';

export default class FirstScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <TouchableOpacity style={[GlobalStyles.Container, {flex: 1}]} onPress={this.props.onPress}>
            <TextLine
                style={{
                    alignItems: 'center',
                }}
                textStyle={{ color: AppConstants.ActiveTheme.AppFontBlackColor }}
                type={'h4'}
                label={'Halaman Pertama'}
            />
        </TouchableOpacity>
    }
}
