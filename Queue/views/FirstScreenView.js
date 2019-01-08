import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import Input from './components/Input';
import Button from './components/Button';

export default class FirstScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        };
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, { paddingHorizontal: 2 * AppConstants.ActiveTheme.AppObjectSpacing }]}>
            <View style={{ flex: 1 }}>
                <View style={{alignItems:"center"}}>
                    <ImageView
                        imageSrc={require('../assets/images/Label.png')}
                        width={Dimensions.get('window').width / 2}
                        height={10 * AppConstants.ActiveTheme.AppObjectSpacing} 
                        style={{marginVertical : 3 * AppConstants.ActiveTheme.AppObjectSpacing}}/>
                </View>
                <Input
                    ImageSrc={require('../assets/images/mail.png')}
                    style={{borderRadius : 3 * AppConstants.ActiveTheme.AppObjectSpacing}}
                    placeholder={'Email'}
                    onChangeText={this.props.emailChange}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                <Input
                    ImageSrc={require('../assets/images/lock.png')}
                    style={{borderRadius : 3 * AppConstants.ActiveTheme.AppObjectSpacing}}
                    placeholder={'Kata sandi'}
                    onChangeText={this.props.passChange}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing}
                    secureMode={true} />
                    
                <View style={{ marginTop : 2 * AppConstants.ActiveTheme.AppObjectSpacing,
                            justifyContent : "flex-start", alignItems:"center"}}>
                    <Button
                        style={{borderRadius : 4 * AppConstants.ActiveTheme.AppObjectSpacing}}
                        width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                        height={AppConstants.ActiveTheme.AppInputHeightDefault + (1* AppConstants.ActiveTheme.AppObjectSpacing)}
                        label={'Masuk'}
                        onPress={()=>this.props.onPress()}
                        radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                    <View style={{justifyContent:"center" , alignItems :"center", margin : 8}}>
                        <Button
                            style = {[GlobalStyles.FontH5,{backgroundColor : 'transparent',
                                      color : 'black', height : 20}]}
                            label={'Belum Punya Akun ? Daftar !!!'}
                            type={'h6'}
                            onPress={()=>this.props.onPressRegister()}>
                        </Button>
                        <Button
                            style={[{color : 'black', height : 20, backgroundColor : 'transparent',justifyContent : 'center'},GlobalStyles.FontH5]}
                            label={'Lupa Kata sandi ?'}
                            onPress={()=>this.props.onPressForgot()}
                            type={'h6'}>
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    }
}
