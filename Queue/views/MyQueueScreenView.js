import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';

export default class MyQueueScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {}]}>
        
            <View style={{justifyContent:"center", alignItems:"center", borderBottomWidth: 2, borderBottomColor: '#EDEDED'}}>
                <ImageView
                    imageSrc={require('../assets/images/myqueue.png')}
                    width={Dimensions.get('window').width / 3}
                    height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                    />
            </View>  

            <TextLine
                style={[GlobalStyles.Container,{
                    alignItems: 'center', flex: 1
                }]}
                textStyle={{ color: AppConstants.ActiveTheme.AppFontBlackColor }}
                type={'h4'}
                label={'Anda sedang tidak mengantri'}
            />
        </View>
    }
}
