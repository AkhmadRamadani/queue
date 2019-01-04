import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import Input from './components/Input';
import InputBottom from './components/InputBottom';
import Button from './components/Button';
import { ScrollView } from 'react-native-gesture-handler';

export default class EditProfileScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {}]}>
             
            <View style={{flexDirection: "row", justifyContent:"center", alignItems:"center", borderBottomWidth: 2, borderBottomColor: '#EDEDED'}}>
                
                <TouchableOpacity style={{flex: 1}} onPress={()=>this.props.onPressBack()}>
                    <View style={{flexDirection: "row"}}>
                        <ImageView
                            imageSrc={require('../assets/images/back.png')}
                            width={Dimensions.get('window').width / 10}
                            height={3 * AppConstants.ActiveTheme.AppObjectSpacing}
                            />

                        <Text>
                            Back
                        </Text>
                    </View>
                </TouchableOpacity>
                
                <View style={{flex: 1, alignItems: 'center'}}>
                    <ImageView
                        imageSrc={require('../assets/images/profil.png')}
                        width={Dimensions.get('window').width / 3}
                        height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                        />
                </View>
                
               <View style={{flex:1}}></View>

            </View>      
            
            <ScrollView scrollEnabled={this.props.scrollEnabled}>
                <View style={{ flex: 1, paddingHorizontal: 5 * AppConstants.ActiveTheme.AppObjectSpacing}}>          

                    <View style={{
                            justifyContent:"center", 
                            alignItems :"center", 
                            marginVertical: 4 * AppConstants.ActiveTheme.AppObjectSpacing, 
                        }}>
                        <ImageView
                            imageSrc={require('../assets/images/user.png')}
                            width={Dimensions.get('window').width}
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
                        
                    <View style={{justifyContent : "flex-start", alignItems:"center", marginTop: 6 * AppConstants.ActiveTheme.AppObjectSpacing, marginBottom: 2 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                        <Button
                            style={{borderRadius : 4 * AppConstants.ActiveTheme.AppObjectSpacing}}
                            width={Dimensions.get('window').width - (10 * AppConstants.ActiveTheme.AppObjectSpacing)}
                            height={AppConstants.ActiveTheme.AppInputHeightDefault + (1* AppConstants.ActiveTheme.AppObjectSpacing)}
                            label={'EDIT'}
                            onPress={() => this.props.onPressEdit()}
                            radius={AppConstants.ActiveTheme.AppObjectSpacing} /> 
                    </View>
                </View>
            </ScrollView>
            
        </View>
    }
}
