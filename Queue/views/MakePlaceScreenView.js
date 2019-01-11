import React, { Component } from 'react';
import { View, Dimensions, Text , Alert} from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import Button from './components/Button';
import ImageView from './components/ImageView';
import InputBottom from './components/InputBottom';
import Input from './components/Input';

export default class MakePlaceScreenView extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {}]}>
            <View style={{ justifyContent: "center", alignItems: "center", borderBottomWidth: 2, borderBottomColor: '#EDEDED' }}>
                <ImageView
                    imageSrc={require('../assets/images/myplace.png')}
                    width={Dimensions.get('window').width / 3}
                    height={7 * AppConstants.ActiveTheme.AppObjectSpacing} />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: "center", alignItems: "center", marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing }}>
                <Text style={{fontSize:20}}>Halo, tolong isi data tempat anda</Text>
                <Text style={{ fontSize: 20 }}>dengan benar</Text>  
            </View>
            <View style={{ flex: 1, paddingHorizontal: 40, 
                        marginTop: Dimensions.get("window").height/ 10 }}>
                <Input
                    onChangeText={this.props.namePlaceChange}
                    ImageSrc={require('../assets/images/iconn.png')}
                    style={{borderRadius : 3 * AppConstants.ActiveTheme.AppObjectSpacing}}
                    placeholder={'Nama Tempat'}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                <Input
                    onChangeText={this.props.addressPlaceChange}
                    ImageSrc={require('../assets/images/iconnn.png')}
                    style={{borderRadius : 3 * AppConstants.ActiveTheme.AppObjectSpacing}}
                    placeholder={'Alamat Tempat'}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing} />
                <Input
                    onChangeText={this.props.inisialPlace}
                    ImageSrc={require('../assets/images/Logo12.png')}
                    style={{borderRadius : 3 * AppConstants.ActiveTheme.AppObjectSpacing}}
                    placeholder={'Inisal Tempat'}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing}/>
                    {(()=>{
                        if (this.props.inisialStatus == 0) {
                           return (
                                <View style={{flex : 0.2,justifyContent : 'center', alignItems :'center', marginTop : 16}}>
                                    <Text>Inisial anda telah digunakan</Text>
                                    <Text>Silahkan gunakan inisial lain</Text>
                                </View>
                           ) 
                        }  
                    })()}
            </View>
            <View style={{flex : 1, justifyContent : "center", alignItems:"center"}}>
                    <Button
                        style={{borderRadius : 4 * AppConstants.ActiveTheme.AppObjectSpacing}}
                        width={Dimensions.get('window').width - (10 * AppConstants.ActiveTheme.AppObjectSpacing)}
                        height={AppConstants.ActiveTheme.AppInputHeightDefault + (1* AppConstants.ActiveTheme.AppObjectSpacing)}
                        label={'Daftar'}
                        onPress={this.props.regPlace}
                        radius={AppConstants.ActiveTheme.AppObjectSpacing} />
            
            </View>

        </View>
    }

}