import React from 'react';
import { TouchableOpacity, TextInput, View, Text ,Image, Dimensions} from 'react-native';

import { AppConstants } from '../../systems/Constants'
import { GlobalStyles } from '../../assets/GlobalStyles'
import ImageView from './ImageView'

export default class Input extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[this.props.wrapperStyle,{
                borderStyle : "solid",
                borderBottomWidth : 2,
                flexDirection : 'row',
                borderColor: this.props.borderColor != undefined ? this.props.borderColor : '#707070',
                backgroundColor: this.props.backgroundColor != undefined ?
                 this.props.backgroundColor : "transparent",
                marginBottom: 2 * AppConstants.ActiveTheme.AppObjectSpacing},this.props.style]}>
                    <TextInput
                        style={[
                            GlobalStyles.Input,
                            GlobalStyles.FontSemiBold,
                            GlobalStyles.FontH5,
                            {
                                flex: 1,
                                lineHeight: this.props.height,
                                height: this.props.height,
                                fontSize: this.props.fontSize
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