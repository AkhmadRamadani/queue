import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { AppConstants } from "../../systems/Constants";

export default class ImageView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Image
                    source={this.props.imageSrc}
                    style={[
                        {
                            width: this.props.width,
                            height: this.props.type === 'box' ? this.props.width : this.props.height,
                            resizeMode: 'contain',
                            borderRadius: this.props.radius
                        }, this.props.style
                    ]} />
            </View>
        );
    }
}
