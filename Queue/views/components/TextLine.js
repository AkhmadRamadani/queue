import React from 'react';
import { View, Text } from 'react-native';

import { AppConstants } from '../../systems/Constants'
import { GlobalStyles } from '../../assets/GlobalStyles';

export default class TextLine extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount () {
        
        this.type = GlobalStyles.FontH3;

        switch ( this.props.type ) {
            case 'h1': this.type = GlobalStyles.FontH1; break;
            case 'h2': this.type = GlobalStyles.FontH2; break;
            case 'h3': this.type = GlobalStyles.FontH3; break;
            case 'h4': this.type = GlobalStyles.FontH4; break;
            case 'h5': this.type = GlobalStyles.FontH5; break;
            case 'h6': this.type = GlobalStyles.FontH6; break;
            case 'p': this.type = GlobalStyles.FontParagraph; break;
        }

        if ( this.props.label != undefined ) 
            this.label = this.props.label.split((this.props.highlight != undefined ? this.props.highlight : ""))
        else
            this.label = ["undefined"];
        
    }

    render = () => {

        return <View style={[{ 
            justifyContent: 'flex-start', }, this.props.style]}>

            <Text
             style={[this.props.type == 'p' ? GlobalStyles.FontRegular : GlobalStyles.FontBold, 
             this.type, this.props.textStyle]} 
             onPress={() => this.props.onPress()}>
                {this.label.map((item, index) => {
                    if (item != '')
                    return <Text key={index}>{item}
                    <Text style={{ color: AppConstants.ActiveTheme.AppFontHeadingColor, }}>
                    {this.props.highlight}</Text></Text> 
                })}
            </Text>

        </View>

    }


}