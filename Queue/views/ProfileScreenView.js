import React, { Component } from 'react';
import { View, Dimensions, Text , TouchableHighlight, Alert, TouchableOpacity} from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import Input from './components/Input';
import InputBottom from './components/InputBottom';
import Button from './components/Button';
import CardView from 'react-native-cardview';

export default class EditProfileScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {flex: 1}]}>
            <View style={{  width : Dimensions.get("window").width,
                            height : Dimensions.get("window").height/3,
                        }}>
                <View style={{backgroundColor : AppConstants.ActiveTheme.AppMainButtonColor,flex : 0.8,
                            justifyContent: "center", alignItems: "center", 
                            borderBottomWidth: 2, borderBottomColor: '#EDEDED'}}>
                    
                    <View style={{ justifyContent: "center", alignItems: "center", 
                                    marginTop : Dimensions.get("window").height/4,
                                    marginBottom : Dimensions.get("window").height/16}}>
                        
                        <View style={{marginTop : Dimensions.get("window").height/10,            
                                    marginBottom : Dimensions.get("window").height/8,
                                    justifyContent: "center", alignItems: "flex-start", 
                                   }}>    
                            <Text style={{fontSize : 24, color : '#fff'}}>Profile</Text>
                        </View>
                        <ImageView style={{borderRadius : 150,
                                    marginBottom : Dimensions.get("window").height/6,}}
                            imageSrc={{uri :  "http://192.168.43.2/apiqueue/v1/"+ this.props.photoprofile}}
                            width={Dimensions.get('window').width / 2}
                            height={Dimensions.get('window').height/5}>
                        </ImageView>
                    </View> 
                </View>
            </View>
            <View style={{ marginTop : Dimensions.get("window").height/14,
                           marginBottom : Dimensions.get("window").height/24}}>
                
                <View style={{ justifyContent: "center", alignItems: "center"}}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }} >{this.props.name}</Text>
                        <Text style={{ fontSize: 16 }} >{this.props.email}</Text>
                </View>
            </View>
            <View style={{flex : 1,alignItems :'center', justifyContent : 'flex-start', 
                        marginBottom : Dimensions.get("window").height/4.2}}>
                <CardView
                    style={{ marginTop: 8 }}
                    width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={Dimensions.get('window').height/ 5.2}
                    cardElevation={2}
                    cardMaxElevation={1}
                    cornerRadius={5}>
                    <View style={{ justifyContent: "flex-start"}}>
                        <TouchableOpacity onPress={()=>Alert.alert("Belum tersedia")}>
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#EDEDED', paddingLeft : 8 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 15,
                                    padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing, }}>Update Profil</Text>
                                <Text style={{ fontSize: 15, paddingHorizontal : 8 }}>Anda bisa mengupdateprofil anda disini</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>Alert.alert("Belum tersedia")}>
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#EDEDED', paddingLeft : 8 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 15,
                                    padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing, }}>Ubah Password</Text>
                                <Text style={{ fontSize: 15, paddingHorizontal : 8 }}>Anda bisa mengubah password anda disini</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </CardView>
            </View>
            {/* {(()=>{
                if (this.props.havePlace == false) {
                    return( */}
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
                    {/* )
                } */}
            {/* })()} */}
        </View>
    }
}
