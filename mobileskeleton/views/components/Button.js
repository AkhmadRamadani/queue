import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../assets/GlobalStyles';
import { AppConstants } from '../../systems/Constants';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity
                style={[
                    GlobalStyles.Container,
                    {
                        backgroundColor: this.props.backgroundColor != undefined ? this.props.backgroundColor : AppConstants.ActiveTheme.AppMainButtonColor,
                        width: this.props.width,
                        height: this.props.type == 'box' ? this.props.width : this.props.height != undefined ? this.props.height : AppConstants.ActiveTheme.AppInputHeightDefault,
                        borderRadius: this.props.radius,
                        alignItems: 'center'
                    }
                ]}
                onPress={() => this.props.onPress()}>

                <Text
                    style={[
                        GlobalStyles.FontBold,
                        {
                            fontSize: this.props.textSize != undefined ? this.props.textSize : 20,
                            color: this.props.textColor != undefined ? this.props.textColor : AppConstants.ActiveTheme.AppBackgroundColor
                        }
                    ]}>
                    {this.props.label}
                </Text>

            </TouchableOpacity>
        );
    }
}
