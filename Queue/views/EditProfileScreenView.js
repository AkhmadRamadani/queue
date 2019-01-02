import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import Input from './components/Input';
import InputBottom from './components/InputBottom';
import Button from './components/Button';

export default class EditProfileScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {}]}>
             
            <View style={{justifyContent:"center", alignItems:"center", borderBottomWidth: 2, borderBottomColor: '#EDEDED'}}>
                <ImageView
                    imageSrc={require('../assets/images/profil.png')}
                    width={Dimensions.get('window').width / 3}
                    height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                    />
            </View>      
            
            <View style={{ flex: 1, paddingHorizontal: 5 * AppConstants.ActiveTheme.AppObjectSpacing}}>          

                <View style={{justifyContent:"center" , alignItems :"center", marginBottom: 4 * AppConstants.ActiveTheme.AppObjectSpacing, marginTop: 4 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                    <ImageView
                        imageSrc={require('../assets/images/user.png')}
                        width={Dimensions.get('window').width / 2}
                        height={10 * AppConstants.ActiveTheme.AppObjectSpacing}
                    />                   
                </View>

                <InputBottom
                    style={{borderRadius : 0 * AppConstants.ActiveTheme.AppObjectSpacing, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0}}
                    placeholder={'Nama'} />
                
                <InputBottom
                    style={{borderRadius : 0 * AppConstants.ActiveTheme.AppObjectSpacing, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0}}
                    placeholder={'Email'} />

                <InputBottom
                    style={{borderRadius : 0 * AppConstants.ActiveTheme.AppObjectSpacing, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0}}
                    placeholder={'Password'}
                    secureMode={true} />
                    
                <View style={{justifyContent : "flex-start", alignItems:"center", marginTop: 6 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                    <Button
                        style={{borderRadius : 4 * AppConstants.ActiveTheme.AppObjectSpacing}}
                        width={Dimensions.get('window').width - (10 * AppConstants.ActiveTheme.AppObjectSpacing)}
                        height={AppConstants.ActiveTheme.AppInputHeightDefault + (1* AppConstants.ActiveTheme.AppObjectSpacing)}
                        label={'EDIT'}
                        onPress={()=>this.props.onPress()}
                        radius={AppConstants.ActiveTheme.AppObjectSpacing} /> 
                </View>
            </View>
        </View>
    }
}
