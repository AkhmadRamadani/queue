import React from 'react';
import { TouchableOpacity, TextInput, View, Text } from 'react-native';

import { AppConstants } from '../../systems/Constants'
import { GlobalStyles } from '../../assets/GlobalStyles'

export default class Input extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[this.props.wrapperStyle]}>

                    <TextInput
                        style={[
                            GlobalStyles.Input,
                            GlobalStyles.FontSemiBold,
                            GlobalStyles.FontH5,
                            {
                                lineHeight: this.props.height,
                                height: this.props.height,
                                borderRadius: this.props.radius != undefined ? this.props.radius : 0,
                                borderColor: this.props.borderColor != undefined ? this.props.borderColor : 'transparent',
                                paddingHorizontal: 20,
                                backgroundColor: this.props.backgroundColor != undefined ? this.props.backgroundColor : AppConstants.ActiveTheme.AppSecondaryBackgroundColor,
                                fontSize: this.props.fontSize,
                                marginBottom: 2 * AppConstants.ActiveTheme.AppObjectSpacing
                            },
                            this.props.style,
                        ]}
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        placeholderTextColor={this.props.placeholderColor}
                        secureTextEntry={this.props.secureMode}
                        onChangeText={this.props.onChangeText != undefined ? this.props.onChangeText : null}
                        maxLength={this.props.maxLength != undefined ? this.props.maxLength : null}
                        returnKeyType={this.props.returnKeyType}
                        onSubmitEditing={this.props.onSubmitEditing}
                        autoFocus={this.props.autoFocus} />

            </View>
        )
    }
}