import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
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
            <TouchableHighlight
                style={[
                    GlobalStyles.Container,
                    {
                        backgroundColor: this.props.backgroundColor != undefined ? this.props.backgroundColor :
                         AppConstants.ActiveTheme.AppButtonColorBlueNavy,
                        width: this.props.width,
                        height: this.props.type == 'box' ? this.props.width : this.props.height != undefined ? this.props.height : AppConstants.ActiveTheme.AppInputHeightDefault,
                        borderRadius: this.props.radius,
                        borderColor : '#000',
                        alignItems: 'center'
                    },  this.props.style
                ]}
                onPress={() => this.props.onPress()}
                disabled={this.props.disabled}>

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

            </TouchableHighlight>
        );
    }
}
