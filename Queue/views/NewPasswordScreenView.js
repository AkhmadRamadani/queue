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
        };
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, { paddingHorizontal: 2 * AppConstants.ActiveTheme.AppObjectSpacing }]}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
               
                <View style={{alignItems:"center"}}>
                    <ImageView
                        imageSrc={require('../assets/images/NEW.png')}
                        width={Dimensions.get('window').width / 1.5}
                        height={10 * AppConstants.ActiveTheme.AppObjectSpacing} 
                        style={{marginVertical : AppConstants.ActiveTheme.AppObjectSpacing }}
                        />
                </View>                

                <View style={{justifyContent:"center" , alignItems :"center", marginBottom: 2 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                     <TextLine
                        label={'Masukkan kata sandi baru anda'}
                        type={'h6'}>
                    </TextLine>

                    <TextLine
                        label={'Selanjutnya anda akan login menggunakan'}
                        type={'h6'}>
                    </TextLine>

                    <TextLine
                        label={'Kata sandi anda yang baru'}
                        type={'h6'}>
                    </TextLine>                        
                </View>

                <Input
                    ImageSrc={require('../assets/images/lock.png')}
                    style={{borderRadius : 3 * AppConstants.ActiveTheme.AppObjectSpacing}}
                    placeholder={'Kata sandi baru'}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing}
                    secureMode={true} />
                <Input
                    ImageSrc={require('../assets/images/lock.png')}
                    style={{borderRadius : 3 * AppConstants.ActiveTheme.AppObjectSpacing}}
                    placeholder={'Ketik ulang kata sandi baru'}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing}
                    secureMode={true} />    
                    
                <View style={{justifyContent : "flex-start", alignItems:"center"}}>
                    <Button
                        style={{borderRadius : 4 * AppConstants.ActiveTheme.AppObjectSpacing}}
                        width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                        height={AppConstants.ActiveTheme.AppInputHeightDefault + (1* AppConstants.ActiveTheme.AppObjectSpacing)}
                        label={'UBAH'}
                        onPress={()=>this.props.onPressNewPass()}
                        radius={AppConstants.ActiveTheme.AppObjectSpacing} /> 
                </View>
            </View>
        </View>
    }
}
