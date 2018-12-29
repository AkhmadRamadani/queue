import React, { Component } from 'react';
import { View, Text , Dimensions} from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import Input from './components/Input'
import Button from './components/Button'
export default class RegisterScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return ( 
            <View style={[GlobalStyles.Wrapper, { paddingHorizontal: 2 * AppConstants.ActiveTheme.AppObjectSpacing }]}>
                <View style={{ flex: 1 }}>
                    <View style={{alignItems:"center"}}>
                        <ImageView
                            imageSrc={require('../assets/images/Tulisan.png')}
                            width={Dimensions.get('window').width / 2}
                            height={10 * AppConstants.ActiveTheme.AppObjectSpacing} 
                            style={{marginVertical : 3 * AppConstants.ActiveTheme.AppObjectSpacing}}/>
                    </View>
                    <Input
                        ImageSrc={require('../assets/images/man.png')}
                        style={{borderRadius : 3 * AppConstants.ActiveTheme.AppObjectSpacing}}
                        placeholder={'Nama'}
                        radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                    <Input
                        ImageSrc={require('../assets/images/mail.png')}
                        style={{borderRadius : 3 * AppConstants.ActiveTheme.AppObjectSpacing}}
                        placeholder={'Email'}
                        radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                    <Input
                        ImageSrc={require('../assets/images/lock.png')}
                        style={{borderRadius : 3 * AppConstants.ActiveTheme.AppObjectSpacing}}
                        placeholder={'Kata sandi'}
                        radius={AppConstants.ActiveTheme.AppObjectSpacing}
                        secureMode={true} />
                    <Input
                        ImageSrc={require('../assets/images/lock.png')}
                        style={{borderRadius : 3 * AppConstants.ActiveTheme.AppObjectSpacing}}
                        placeholder={'Ketik Ulang Kata sandi'}
                        radius={AppConstants.ActiveTheme.AppObjectSpacing}
                        secureMode={true} />
                    <View style={{ marginTop : 2 * AppConstants.ActiveTheme.AppObjectSpacing,
                            justifyContent : "flex-start", alignItems:"center"}}>
                        <Button
                            style={{borderRadius : 4 * AppConstants.ActiveTheme.AppObjectSpacing}}
                            width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                            height={AppConstants.ActiveTheme.AppInputHeightDefault + (1* AppConstants.ActiveTheme.AppObjectSpacing)}
                            label={'Daftar'}
                            onPress={()=>this.props.onPress()}
                            radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                    </View>  
                </View>
            </View>
        )
    }
}
