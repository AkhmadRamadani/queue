import React, { Component } from 'react';
import { View, Dimensions, Text , TouchableHighlight} from 'react-native';
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
        return <View style={[GlobalStyles.Wrapper, {flex: 1}]}>
            <View style={{ justifyContent: "center", alignItems: "center", borderBottomWidth: 2, borderBottomColor: '#EDEDED'}}>
                <ImageView
                    imageSrc={require('../assets/images/profil.png')}
                    width={ Dimensions.get('window').width / 4 }
                    height={ 7 * AppConstants.ActiveTheme.AppObjectSpacing }/>
            </View>
            <View style={{width : Dimensions.get('window').width / 1 , marginLeft : 40 * AppConstants.ActiveTheme.AppObjectSpacing, marginTop: 1 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                <TouchableHighlight onPress={() => this.props.onPressSetting()}>
                    <ImageView
                        imageSrc={require('../assets/images/settings.png')}
                        width={30}
                        height={30}>
                    </ImageView>
                </TouchableHighlight>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 5 * AppConstants.ActiveTheme.AppObjectSpacing }}>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 4 * AppConstants.ActiveTheme.AppObjectSpacing }}>
                    <ImageView
                        imageSrc={require('../assets/images/user.png')}
                        width={Dimensions.get('window').width / 2}
                        height={10 * AppConstants.ActiveTheme.AppObjectSpacing}>
                    </ImageView>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }} >{this.props.name}</Text>
                    <Text style={{ fontSize: 16 }} >{this.props.email}</Text>
                </View> 
            </View>
            
            <View style={{
                marginBottom: 4 * AppConstants.ActiveTheme.AppObjectSpacing, justifyContent: "flex-start", alignItems: "center"}}>
                <Button
                    style={{ borderRadius: 4 * AppConstants.ActiveTheme.AppObjectSpacing }}
                    width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (1 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    label={'Tambah Tempat'}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing} 
                    onPress={()=> this.props.onPressMake()} />
            </View>
        </View>
    }
}
